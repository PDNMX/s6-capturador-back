import { RecordModel, RecordModelPaginate } from './record.schema';
import { IDataUpdate, IRecord } from './record.interface';
import { CustomError } from '../../exceptions/customError';
import { IQuery } from '../../schemas/yup.query';

class Record {
  static queryString = (cadena: String) => {
    cadena = cadena
      .toLowerCase()
      .replace('ñ', '#')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/a/g, '[a,á,à,ä]')
      .replace(/e/g, '[e,é,ë]')
      .replace(/i/g, '[i,í,ï]')
      .replace(/o/g, '[o,ó,ö,ò]')
      .replace(/u/g, '[u,ü,ú,ù]')
      .replace(/#/g, 'ñ');

    return { $regex: cadena, $options: 'i' };
  };

  static getQuery = (q: IQuery) => {
    let nQuery = {};
    let query = q.query;
    let nSort = q.sort || {};
    let page = q.page || 1;
    let nPageSize = q.pageSize || 10;
    let pageSize = nPageSize < 1 ? 10 : nPageSize > 200 ? 200 : nPageSize;

    let ops = { page, limit: pageSize, sort: nSort, collation: { locale: 'es' } };

    if (query.ocid) {
      nQuery = { ...nQuery, ['ocid']: this.queryString(query.ocid) };
    }

    if (query.id_project) {
      nQuery = { ...nQuery, ['planning.budget.projectID']: this.queryString(query.id_project) };
    }

    if (query.title_project) {
      nQuery = { ...nQuery, ['planning.budget.project']: this.queryString(query.title_project) };
    }

    console.log('nQuery: ', JSON.stringify(nQuery));

    return { query: nQuery, options: ops };
  };

  static query = async (q: IQuery) => {
    const { query, options } = this.getQuery(q);
    console.log('{ query, options }: ', { query, options });

    try {
      let rQuery = await RecordModelPaginate.paginate(query, options).then();
      return {
        pagination: { page: rQuery.page, pageSize: rQuery.limit, totalRows: rQuery.totalDocs, hasNextPage: rQuery.hasNextPage },
        results: rQuery.docs
      };
    } catch (error: object | any) {
      throw new CustomError('record_1001', '{query} Proceso de consulta fallido', error.message);
    }
  };

  static getById = async (req: IDataUpdate) => {
    const recordId = req.id;
    console.log('recordId: ', recordId);

    try {
      let record = await RecordModel.findById(recordId);
      if (record) {
        return { record };
      } else {
        throw new CustomError('', `record_1002: El ID indicado no existe: ${req.id}`);
      }
    } catch (error: object | any) {
      throw new CustomError('record_1003', '{getById} Proceso de consulta fallido', 501, error.message);
    }
  };

  static update = async (req: IDataUpdate) => {
    const recordId = req.id;
    const data: IRecord = req.data;
    try {
      let updatedRecord = await RecordModel.findByIdAndUpdate(recordId, { $set: data }, { new: true, runValidators: true });
      if (updatedRecord) {
        return { updated: updatedRecord };
      } else {
        throw new CustomError('', `record_1004: El ID indicado no existe: ${req.id}`);
      }
    } catch (error: object | any) {
      throw new CustomError('record_1005', '{update} Proceso de consulta fallido', 501, error.message);
    }
  };

  static insert = async (req: IDataUpdate) => {
    const data: IRecord = req.data;
    console.log('data: ', data);

    if (!data) {
      throw new CustomError('record_1006', '{insert} No existen datos para insertar', 501);
    }

    try {
      let newRecord = await RecordModel.create(data);
      if (newRecord) {
        return { new: newRecord };
      } else {
        throw new CustomError('record_1007', '{insert} Error en los datos', 501);
      }
    } catch (error: object | any) {
      throw new CustomError('record_1008', '{insert} Proceso de insert fallido', 501, error.message);
    }
  };

  static delete = async (req: IDataUpdate) => {
    const recordId = req.id;

    try {
      let deletedRecord = await RecordModel.findByIdAndDelete(recordId);

      if (deletedRecord) {
        return { deleted: deletedRecord };
      } else {
        throw new CustomError('', `record_1009: El ID indicado no existe: ${req.id}`);
      }
    } catch (error: object | any) {
      throw new CustomError('record_1010', '{delete} Proceso de consulta fallido', 501, error.message);
    }
  };
}

export default Record;
