import { readJSON } from '../../utils/readJSON.js'

const noticias = readJSON('../noticias.json')

export class NoticiaModel {
  static async getAll ({ categoria }) {
    if (categoria) {
      return noticias.filter(noticia =>
        noticia.categoria.some(g => g.toLowerCase() === categoria.toLowerCase())
      )
    }
    return noticias
  }

  static async getById ({ id }) {
    const noticia = noticias.find(noticia => noticia.id === id)
    return noticia
  }
}
