import { object, number, string, InferType, array, date } from "yup";
export const AwardData = object({
  id: number(),
  status: string(),
  title: string(),
  description: string(),
  rationale: string(),
  date: date(),
  value: object({
    amount: number(),
    currency: string(),
  }),
  contractPeriod: object({
    startDate: date(),
    endDate: date(),
    maxExtentDate: date(),
    durationInDays: number(),
  }),
  suppliers: array().of(object({ id: string(), name: string() })),
  items: array().of(
    object({
      id: string(),
      description: string(),
      quantity: number(),
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
        uri: string().url(),
      }),
      additionalClassifications: array().of(
        object({
          id: string(),
          description: string(),
          scheme: string(),
          uri: string().url(),
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