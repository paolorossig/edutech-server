import validateResource from './middleware/validateResource.js'
import requireUser from './middleware/requireUser.js'
import { createSessionSchema } from './schema/session.schema.js'
import { createUserSchema } from './schema/user.schema.js'
import { getUserSession, login } from './controller/session.controller.js'
import { signUp } from './controller/user.controller.js'

function routes(app) {
  app.get('/healthcheck', (req, res) => res.sendStatus(200))

  app.post('/api/users', validateResource(createUserSchema), signUp)
  app.post('/api/sessions', validateResource(createSessionSchema), login)
  app.get('/api/sessions', requireUser, getUserSession)

  app.use((req, res, next) => {
    console.log('catch 404')
    res.send('404')
  })
}

export default routes
