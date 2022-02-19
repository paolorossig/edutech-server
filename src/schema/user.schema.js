import { object, string } from 'zod'

const createUserSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required'
    }).email('Correo electrónico inválido'),
    password: string({
      required_error:
        'Contraseña requerida - debe tener 6 caracteres como mínimo'
    }).min(6, 'Contraseña demasiado corta'),
    passwordConfirmation: string({
      required_error: 'Confirmación de contraseña requerida'
    })
  })
    // First validate password confirmation
    .refine((data) => data.password === data.passwordConfirmation, {
      message: 'Las contraseñas no coinciden',
      path: ['passwordConfirmation']
    })
})

export { createUserSchema }
