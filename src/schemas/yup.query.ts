import { object, string, number, date, InferType } from 'yup';

export const querySchema = object({
  page: number().integer('solo acepta numeros enteros.').positive('solo acepta valores positivos.'),
  pageSize: number().integer(),
  sort: object({
    id: string().matches(/(asc|desc)/),
    ocid: string().matches(/(asc|desc)/),
    id_project: string().matches(/(asc|desc)/),
    title_project: string().matches(/(asc|desc)/)
  }),
  query: object({
    id: string(),
    ocid: string(),
    id_project: string(),
    title_project: string(),
    institution: string()
  })
});

export type IQuery = InferType<typeof querySchema>;
