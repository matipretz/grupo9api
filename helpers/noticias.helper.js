import Noticia from '../models/Noticia.js'

export default class NoticiasHelpers {
  createNoticia (newData) {
    const { id, autor, categoria, copete, imagenUrl, titulo } = newData
    const noticia = new Noticia(
      parseInt(id),
      autor,
      categoria,
      copete,
      imagenUrl,
      titulo
    )
    return noticia
  }
}
