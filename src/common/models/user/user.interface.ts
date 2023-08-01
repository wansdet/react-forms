import { IAddress } from 'common/models/address'

export interface IUserCredential {
    username: string
    password: string
}

export interface IUser {
    id?: number
    email: string
    firstName: string
    lastName: string
    password: string
    gender: string
}

export interface IUserUpdate extends IUser {
    id: number
}

export interface IUserAddress extends IAddress {
    id?: number
    name: string
    phoneNumber?: string
    organisation?: string
    primaryAddress: boolean
}
