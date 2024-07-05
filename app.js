import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import router from './routes/noticias.routes.js'

const app = express()
const PORT = process.env.PORT

app
  .use(express.static('public'))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors())
  .disable('x-powered-by')
  .use('/noticias', router)

const DB_PORT = process.env.DB_PORT.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
  console.log(`DB on port ${DB_PORT}`)
  console.error(`${process.env.ENV}`)
})
