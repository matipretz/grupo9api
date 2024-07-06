import initializeDatabase from '../db/Mysql.js'

let db

const init = async () => {
  if (!db || db.connection._closing) {
    db = await initializeDatabase()
  }
}

const getUsers = async () => {
  await init()
  const [rows] = await db.query(`
      SELECT usuario_id, nombre, email, password
      FROM usuario;
    `)
  console.log('usuarios.getUsers')
  return rows
}

const getUserById = async id => {
  await init()
  const [rows] = await db.query(
    `SELECT usuario_id, nombre, email, password
       FROM usuario 
       WHERE usuario_id = ?`,
    [id]
  )
  console.log('getUserById')
  return rows[0]
}

const getUserByName = async username => {
  await init()
  const [rows] = await db.query(
    `SELECT usuario_id, nombre, email, password
       FROM usuario 
       WHERE email = ?`,
    [username]
  )
  console.log('getUserByName')
  return rows[0]
}

const createUser = async user => {
  await init()
  const { nombre, email, password } = user
  const [result] = await db.query(
    `INSERT INTO usuario 
       (usuario_id, nombre, email, password) 
       VALUES (?, ?, ?)`,
    [nombre, email, password]
  )
  console.log('createUser')
  return {
    usuario_id: result.insertId,
    nombre,
    email,
    password
  }
}

export const usuariosDao = {
  getUsers,
  getUserByName,
  getUserById,
  createUser
}
