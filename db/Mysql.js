import mysql from 'mysql2/promise'

const config = {
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.DB,
  port: process.env.DB_PORT,
  connectTimeout: 10000,
  trace: true
}
const createConnection = async () => {
  try {
    const connection = await mysql.createConnection(config)
    console.log('Conectado a la DB')
    return connection
  } catch (err) {
    console.error('No se pudo conectar a la DB:', err.message)
    throw err
  }
}

const initializeDatabase = async () => {
  const connection = await createConnection()
  return connection
}

export default initializeDatabase
