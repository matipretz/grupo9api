import { Router } from 'express'
import { controllers } from '../auth/index.js'

export const routes = Router()

routes
  .post('/register', controllers.register)
  .post('/login', controllers.login)
