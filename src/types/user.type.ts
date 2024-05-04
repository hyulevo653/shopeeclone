const user = {
    _id: '91451654612461246dsad15as1d5asd1',
    roles: ['User'],
    email: 'user2@gmail.com',
    name: 'Real user',
    date_of_birth: null,
    address: '',
    phone: '',
    createAt: '2021-05-10T08:58:29.081Z',
    updateAt: '2021-05-10T08:58:29.081Z',
    __v: 0

}

export interface User {
    _id: string
    roles: string[]
    email: string
    name: string
    date_of_birth: null
    address: string
    phone: string
    createAt: string
    updateAt: string
}