// src/mocks/handlers.ts
import { rest } from 'msw'

import { MOCK_SERVICE_WORKER_BASE_URL } from '@/core/application'
import jsonData from './db/mswdb.json'

interface IUserCreate {
    email: string
    firstName: string
    lastName: string
    password: string
    gender: string
}

interface IUser extends IUserCreate {
    id: number
}

interface IAddress {
    propertyNumber: string
    street: string
    locality: string
    city: string
    state: string
    postalCode: string
}

interface IUserAddressCreate extends IAddress {
    name: string
    phoneNumber: string
    organisation: string
    primaryAddress: boolean
}

interface IUserAddress extends IUserAddressCreate {
    id: number
}

export const handlers = [
    rest.get(`${MOCK_SERVICE_WORKER_BASE_URL}/api/users`, (req, res, ctx) => {
        const users: IUser[] = jsonData.users

        return res(ctx.json(users)) // 200
    }),

    rest.get(
        `${MOCK_SERVICE_WORKER_BASE_URL}/api/users/:id`,
        (req, res, ctx) => {
            const user = jsonData.users.find(
                (user: IUser) => user.id === Number(req.params.id)
            )

            return res(ctx.json(user))
        }
    ),

    rest.post(`${MOCK_SERVICE_WORKER_BASE_URL}/api/users`, (req, res, ctx) => {
        const newUser = req.body as IUser
        const updatedUsers: IUser[] = [...jsonData.users, newUser]

        // Update the JSON data
        jsonData.users = updatedUsers

        return res(ctx.status(201), ctx.json(newUser))
    }),

    rest.put(
        `${MOCK_SERVICE_WORKER_BASE_URL}/api/users/:id`,
        (req, res, ctx) => {
            const updatedUser = req.body as IUser
            const userId = req.params.id

            // Update the JSON data
            jsonData.users = jsonData.users.map((user) =>
                user.id === Number(userId) ? updatedUser : user
            )

            return res(ctx.json(updatedUser))
        }
    ),

    rest.delete(
        `${MOCK_SERVICE_WORKER_BASE_URL}/api/users/:id`,
        (req, res, ctx) => {
            const userId = req.params.id

            // Update the JSON data
            jsonData.users = jsonData.users.filter(
                (user) => user.id !== Number(userId)
            )

            // Return a successful response
            return res(ctx.status(204))
        }
    ),

    rest.get(
        `${MOCK_SERVICE_WORKER_BASE_URL}/api/addresses`,
        (req, res, ctx) => {
            const addresses: IUserAddress[] = jsonData.addresses

            return res(ctx.json(addresses))
        }
    ),
    rest.get(
        `${MOCK_SERVICE_WORKER_BASE_URL}/api/addresses/:id`,
        (req, res, ctx) => {
            // console.log('req.params.id', req.params.id)
            const address = jsonData.addresses.find(
                (address) => address.id === Number(req.params.id)
            )

            return res(ctx.json(address))
        }
    ),

    rest.post(
        `${MOCK_SERVICE_WORKER_BASE_URL}/api/addresses`,
        (req, res, ctx) => {
            const newAddress = req.body as IUserAddress
            const updatedAddresses = [...jsonData.addresses, newAddress]

            // Update the JSON data
            jsonData.addresses = updatedAddresses

            return res(ctx.status(201), ctx.json(newAddress))
        }
    ),

    rest.put(
        `${MOCK_SERVICE_WORKER_BASE_URL}/api/addresses/:id`,
        (req, res, ctx) => {
            const updatedAddress = req.body as IUserAddress
            const addressId = req.params.id

            // Update the JSON data
            jsonData.addresses = jsonData.addresses.map((address) =>
                address.id === Number(addressId) ? updatedAddress : address
            )

            return res(ctx.json(updatedAddress))
        }
    ),

    rest.delete(
        `${MOCK_SERVICE_WORKER_BASE_URL}/api/addresses/:id`,
        (req, res, ctx) => {
            const addressId = req.params.id

            // Update the JSON data
            jsonData.addresses = jsonData.addresses.filter(
                (address) => address.id !== Number(addressId)
            )

            // Return a successful response
            return res(ctx.status(204))
        }
    ),
]
