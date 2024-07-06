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
      SELECT usuario_id,nombre,email,password
      FROM usuario;
    `)
    console.log('usuarios.getUsers')
    return users
  }

 

const getUserById = async id => {
    await init()
    const [rows] = await db.query(
      `SELECT usuario_id,nombre,email,password
       FROM usuario 
       WHERE usuario_id = ?`,
      [id]
    )
    console.log('getUserById')
    return rows[0]
  }



function getUserByName(username) {
    await init()
    const [rows] = await db.query(
      `SELECT usuario_id,nombre,email,password
       FROM usuario 
       WHERE email = ?`,
      [username]
    )
    console.log('getUserByName')
    return rows[0]
}



 const createUser = async user => {
    await init()
    const { usuario_id, nombre, email, password } = usuario
    const [result] = await db.query(
      `INSERT INTO usuario_id 
       (nombre, email, password) 
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