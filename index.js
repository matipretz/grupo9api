import { noticiasRouter } from './routes/noticias.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())
app.disable('x-powered-by')
app.use('/noticias', noticiasRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/noticias`)
})
