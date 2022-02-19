import { object, string } from 'zod'

export const createSessionSchema = object({
  body: object({
    email: string({
      required_error: 'Email requerido'
    }),
    password: string({
      required_error: 'Contraseña requerida'
    })
  })
})
