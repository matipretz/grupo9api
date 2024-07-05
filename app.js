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
  .listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
  })
