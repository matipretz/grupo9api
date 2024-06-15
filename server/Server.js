import express from 'express'
import NoticiasRoutes from '../routes/noticias.routes.js'

export default class Server {
  static app = express()

  static middlewares () {
    Server.app.use(express.json())
    Server.app.use(express.urlencoded({ extended: true }))
  }

  static routes () {
    const noticiasRoutes = new NoticiasRoutes()
    Server.app.use('/noticias', noticiasRoutes.router)
  }

  static runServer (port) {
    Server.app.listen(port, () =>
      console.log(`listen at http://localhost:${port}`)
    )
  }

  static run (port) {
    console.clear()
    Server.middlewares()
    Server.routes()
    Server.runServer(port)
  }
}
