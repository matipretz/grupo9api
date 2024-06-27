import dotenvx from '@dotenvx/dotenvx'
import express from 'express'
import cors from 'cors'
import router from './routes/noticias.routes.js'

dotenvx.config()
const app = express()
const PORT = process.env.PORT

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.disable('x-powered-by')

app.use('/noticias', router)
const DB_PORT = process.env.DB_PORT
app.listen(PORT, () => {
  console.log('HOST_DB:', process.env.HOST_DB)
  console.log('USER_DB:', process.env.USER_DB)
  console.log('PASS_DB:', process.env.PASS_DB)
  console.log('DB:', process.env.DB)
  console.log('DB_PORT:', process.env.DB_PORT)

  console.log(`server listening on port ${PORT}`)
  console.log(`DB on port ${DB_PORT}`)
  console.error(`${process.env.ENV}`)
})
