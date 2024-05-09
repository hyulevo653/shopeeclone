export interface ErrorResponseApi<Data> {
    message: string
    data?: Data
}
export interface SuccessResponseApi<Data> {
    message: string
    data: Data
}

//cú pháp  -? loại bỏ  key optional ( là cái ?: trả về kiểu undefined)
export type NoUndefinedField<T> = {
    [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}