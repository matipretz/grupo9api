import { Router } from 'express'
import { controllers } from '../controllers/noticia.controller.js'
import { middlewares } from '../auth/index.js'

const router = Router()

router
  .get('/', controllers.getAllArticles)
  .get('/:id', controllers.getArticleById)
  .post('/',middlewares.authJWT, controllers.createArticle)
  .patch('/:id',middlewares.authJWT, controllers.updateArticle)
  .delete('/:id',middlewares.authJWT, controllers.deleteArticle)

export default router
