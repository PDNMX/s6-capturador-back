import { object, string, number, date, InferType } from 'yup';

export const querySchema = object({
    page: number().integer('solo acepta numeros enteros.').positive('solo acepta valores positivos.'),
    pageSize: number().integer(),
/*     sort: object({
        
    }), */
    query: object({
        
    })
});

export type IQuery = InferType<typeof querySchema>;

