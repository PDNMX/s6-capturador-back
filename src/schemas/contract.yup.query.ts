//import * as yup from 'yup';
import { object, number, string, InferType, array } from "yup";
export const contractData = object({
    id: number().required("El id es obligatorio"),
    awardID: string().required("El id de la adjudicación es obligatorio"),
    title: string(),
    description: string(),
    status: string().required("El status es obligatorio"),
    period: object({
      startDate: string(), // .required('La fecha de inicio es obligatoria'),
      endDate: string(),
      durationInDays: number(),
      maxExtentDate: string(),
    value: object({
      amount: number(),
      amountNet: number(),
      currency: string(),
    }),
    surveillanceMechanisms: array().of(string()),
    dateSignedContracts: object({
      dateSigned: string(),
    }),
  }),
});

export const itemContractData = object({
  id: number().required("El id es obligatorio"),
  description: string(),
  classification: object({
    scheme: string(),
    id: string(),
    description: string(),
    uri: string(),
  }),
  additionalClassifications: array().of(
    object({
      scheme: string(),
      id: string(),
      description: string(),
      uri: string(),
    })
  ),
  quantity: number(),
  unit: object({
    scheme: string(),
    id: string(),
    name: string(),
    uri: string(),
    value: object({
      amount: number(),
      currency: string(),
    }),
  }),
  deliveryLocation: object({
    uri: string(),
    description: string(),
    geometry: object({
      type: string(),
      coordinates: array().of(
        object({
          latitude: string(),
          longitude: string(),
        })
      ),
      gazetteer: object({
        scheme: string(),
        idenfiers: string(),
      }),
    }),
  }),
  deliveryAddress: object({
    uri: string(),
    description: string(),
    streetAddress: string(),
    locality: string(),
    region: string(),
    postalCode: string(),
    countryName: string(),
  }),
});

/* const contractValueSchema = yup.object().shape({
    value: yup.object().shape({
      amount: yup.number().required('El monto es obligatorio'),
      currency: yup.string().required('La moneda es obligatoria'),
    }),
} );*/

/* export const querySchema = object({
    page: number().integer('solo acepta numeros enteros.').positive('solo acepta valores positivos.'),
    pageSize: number().integer(),
    sort: object({
        
    }),
    query: object({
        
    })
});

export type IQuery = InferType<typeof querySchema>;

 */
