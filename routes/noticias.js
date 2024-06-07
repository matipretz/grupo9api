import { Router } from 'express'
import { NoticiaController } from '../controllers/noticias.js'

export const noticiasRouter = Router()

noticiasRouter.get('/', NoticiaController.getAll)
noticiasRouter.get('/:id', NoticiaController.getById)
