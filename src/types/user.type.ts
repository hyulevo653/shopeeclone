type Role = 'User' | 'Admin'

export interface User {
    _id: string
    roles: Role[]
    email: string
    name: string
    date_of_birth: string // ISO 8601
    address: string
    phone: string
    createAt: string
    updateAt: string
}