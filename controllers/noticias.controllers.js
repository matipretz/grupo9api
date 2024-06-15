import NoticiasHelpers from '../helpers/noticias.helper.js'
import NoticiasDaoMemory from '../db/daos/noticias.daos.local.js'
// import UsersDaoMysql from '../db/daos/users.dao.mysql.js'

export default class NoticiaController {
  constructor () {
    this.db = new NoticiasDaoMemory()
    // this.db = new UsersDaoMysql()
    this.helpers = new NoticiasHelpers()
  }

  getAll = (req, res) => {
    const noticias = this.db.getAll()
    res.json(noticias)
  }

  getById = (req, res) => {
    const { id } = req.params
    const noticia = this.db.getById(id)
    res.json(noticia)
  }

  getByCategory = async (req, res) => {
    const { categoria } = req.query
    const result = await this.db.getByCategory(categoria)
    res.json(result)
  }

  add = async (req, res) => {
    const noticia = this.helpers.createNoticia(req.body)
    const result = await this.db.add(noticia)
    res.json(result)
  }

  modify = async (req, res) => {
    const noticia = this.helpers.createNoticia(req.body)
    const result = await this.db.modify(noticia)
    res.json(result)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.db.delete(id)
    res.json(result)
  }
}
