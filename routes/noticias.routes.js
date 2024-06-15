import Routes from './routes.js'
import NoticiaController from '../controllers/noticias.controllers.js'

export default class NoticiasRoutes extends Routes {
  constructor () {
    super()
    this.controller = new NoticiaController()
    this.getRoutes()
  }

  getRoutes () {
    this.router
      .get('/', this.controller.getAll)
      .get('/:id', this.controller.getById)
      .post('/', this.controller.add)
      .put('/', this.controller.modify)
      .delete('/:id', this.controller.delete)
  }
}
