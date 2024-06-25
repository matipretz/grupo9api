import { Router } from 'express'
import { controllers } from '../controllers/noticia.controller.js'

const router = Router()

router
  .get('/', controllers.getAllArticles)
  .get('/:id', controllers.getArticleById)
  .post('/', controllers.createArticle)
  .patch('/:id', controllers.updateArticle)
  .delete('/:id', controllers.deleteArticle)

export default router
