import 'dotenv/config'
import express from 'express'
import { authRoutes, config } from './auth/index.js'
import cors from 'cors'
import router from './routes/noticias.routes.js'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = process.env.PORT

app
  .use(cookieParser(config.secretKey))
  .use(express.static('public'))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors())
  .disable('x-powered-by')
  .use('/auth', authRoutes)
  .use('/noticias', router)
  .listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
  })
