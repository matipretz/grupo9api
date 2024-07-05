import mysql from 'mysql2/promise'

const connectionString = process.env.DATABASE_URL

const createConnection = async () => {
  try {
    const connection = await mysql.createConnection(connectionString)
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
