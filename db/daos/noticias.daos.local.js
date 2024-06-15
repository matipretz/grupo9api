import mock from '../mocks/noticias.mock.js'
import NoticiasHelpers from '../../helpers/noticias.helper.js'

export default class NoticiasDaoMemory {
  constructor () {
    this.noticias = mock
    this.helpers = new NoticiasHelpers()
  }

  getAll () {
    return this.noticias
  }

  getById (id) {
    const noticia = this.noticias.find(noticia => noticia.id === parseInt(id))
    return noticia
  }

  getByCategory (categoria) {
    const result = this.noticias.filter(
      noticias => noticias.categoria === categoria
    )
    return result
  }

  add = async (req, res) => {
    const noticia = this.helpers.createNoticia(req.body)
    const result = await this.db.add(noticia)
    res.json(result)
  }

  modify (data) {
    let modified = null
    this.noticias = this.noticias.map(noticia => {
      if (noticia.id === data.id) {
        noticia = data
        modified = noticia
      }
      return noticia
    })
    return modified
  }

  delete (id) {
    const oldLength = this.noticias.length
    this.noticias = this.noticias.filter(noticia => noticia.id !== parseInt(id))
    return oldLength !== this.noticias.length
  }
}
