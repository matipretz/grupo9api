import { NoticiaModel } from '../models/json/noticias.js'

export class NoticiaController {
  static async getAll (req, res) {
    const { categoria } = req.query
    const noticias = await NoticiaModel.getAll({ categoria })
    res.json(noticias)
  }

  static async getById (req, res) {
    const { id } = req.params
    const noticias = await NoticiaModel.getById({ id })
    if (noticias) return res.json(noticias)
    res.status(404).json({ message: 'noticia not found' })
  }
}
