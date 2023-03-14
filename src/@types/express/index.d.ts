import * as expreess from 'express'

declare global{
        namespace Express{
            interface Request{
                user: {
                    id: number
                    isAdmin: string
                }
            }

        }
}