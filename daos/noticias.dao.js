import initializeDatabase from '../db/Mysql.js'

let db

const init = async () => {
  if (!db) {
    db = await initializeDatabase()
  }
}

const getAllArticles = async () => {
  await init()
  const [rows] = await db.query(`SELECT id, categoria, titulo, cuerpo, autor, fecha, imagen
FROM noticias;
`)
  return rows
}

const getArticleById = async id => {
  await init()
  const [rows] = await db.query(
    `SELECT id,
    categoria,
    titulo,
    cuerpo,
    autor,
    DATE_FORMAT(fecha, '%d-%m-%Y') AS fecha,
    imagen FROM noticias WHERE id = ?`,
    [id]
  )
  return rows[0]
}

const createArticle = async article => {
  await init()
  const { categoria, titulo, cuerpo, autor, fecha, imagen } = article
  const [result] = await db.query(
    'INSERT INTO noticias (categoria, titulo, cuerpo, autor, fecha, imagen) VALUES (?, ?, ?, ?, ?, ?)',
    [categoria, titulo, cuerpo, autor, fecha, imagen]
  )
  return {
    id: result.insertId,
    categoria,
    titulo,
    cuerpo,
    autor,
    fecha,
    imagen
  }
}

const updateArticle = async (id, article) => {
  await init()
  const { categoria, titulo, cuerpo, autor, fecha, imagen } = article
  const [result] = await db.query(
    'UPDATE noticias SET categoria = ?, titulo = ?, cuerpo = ?, autor = ?, fecha = ?, imagen = ? WHERE id = ?',
    [categoria, titulo, cuerpo, autor, fecha, imagen, id]
  )
  return result.affectedRows > 0
}

const deleteArticle = async id => {
  await init()
  const [result] = await db.query('DELETE FROM noticias WHERE id = ?', [id])
  return result.affectedRows > 0
}
export const articleDao = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
}
