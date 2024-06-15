import mock from '../mocks/noticias.mock.js'

export default class NoticiasDaoMemory {
  constructor () {
    this.noticias = mock
  }

  getAll () {
    return this.noticias
  }

  getById (id) {
    const noticia = this.noticias.find(noticia => noticia.id === parseInt(id))
    return noticia
  }

  add (noticia) {
    this.noticias.push(noticia)
    return true
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
