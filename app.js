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

app.listen(PORT, () => {
  console.clear()
  console.log(`server listening on port http://localhost:${PORT}`)
  console.error(`${process.env.ENV}`)
})
