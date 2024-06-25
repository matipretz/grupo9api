import { articleDao } from '../daos/noticias.dao.js'

const getAllArticles = async (req, res) => {
  try {
    const articles = await articleDao.getAllArticles()
    res.json(articles)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getArticleById = async (req, res) => {
  try {
    const article = await articleDao.getArticleById(req.params.id)
    if (article) {
      res.json(article)
    } else {
      res.status(404).json({ error: 'Article not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createArticle = async (req, res) => {
  try {
    const newArticle = await articleDao.createArticle(req.body)
    res.status(201).json(newArticle)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateArticle = async (req, res) => {
  try {
    const success = await articleDao.updateArticle(req.params.id, req.body)
    if (success) {
      res.json({ message: 'Article updated successfully' })
    } else {
      res.status(404).json({ error: 'Article not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
const deleteArticle = async (req, res) => {
  try {
    const success = await articleDao.deleteArticle(req.params.id)
    if (success) {
      res.json({ message: 'Article deleted successfully' })
      res.status(204).end()
    } else {
      res.status(404).json({ error: 'Article not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const controllers = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
}
