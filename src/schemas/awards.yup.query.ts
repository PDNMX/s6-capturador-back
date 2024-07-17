import { object, number, string, InferType, array } from "yup";
export const AwardData = object({
  id: number().required("El id es obligatorio"),

})