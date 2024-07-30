import { object, number, string, InferType, array, date } from "yup";
export const AwardData = object({
  id: number().required("El id es obligatorio"),
  status: string().required("El estado de la adjudicación es obligatorio"),
  title: string().required("El título es obligatorio"),
  description: string(),
  rationale: string().required(
    "La justificación de la adjudicación es obligatoria"
  ),
  date: date().required("La fecha1 es obligatoria"),
  value: object({
    amount: number().required("El valor es obligatorio"),
    currency: string().required("La moneda es obligatoria"),
  }),
  contractPeriod: object({
    startDate: date().required("La fecha inicial es obligatoria"),
    endDate: date().required("La fecha final es obligatoria"),
    maxExtentDate: date().required("La fecha máxima es obligatoria"),
    durationInDays: number(),
  }),
  suppliers: array().of(object({ id: string(), name: string() })),
  items: array().of(
    object({
      id: string(),
      description: string().required("La descripción del item es obligatoria"),
      quantity: number().required("La cantidad es obligatoria"),
      unit: object({
        id: string(),
        scheme: string(),
        name: string(),
        uri: string().url(),
        value: object({
          amount: number(),
          currency: string(),
        }),
      }),
      classification: object({
        id: string(),
        description: string(),
        scheme: string(),
        uri: string().url().required("El uri es obligatorio"),
      }),
      additionalClassifications: array().of(
        object({
          id: string(),
          description: string(),
          scheme: string(),
          uri: string().url().required("El uri es obligatorio"),
        }),
      ), 
    })
  ),
  documents: array().of(
    object({
      id: string(),
      documentType: string(),
      title: string(),
      description: string(),
      url: string().url(),
      datePublished: date(),
      dateModified: date(),
      format: string(),
      language: string(),
    })
  ),
  amendments: array().of(
    object({
      date: date(),
      rationale: string(),
      id: string(),
      description: string(),
      amendsReleaseID: string(),
      releaseID: string(),
    })
  ),
});