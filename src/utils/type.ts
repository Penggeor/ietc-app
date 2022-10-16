export type GetKeys<T> = keyof T

export type GetValues<T> = T[GetKeys<T>]
