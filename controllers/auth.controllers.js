import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from '../auth/index.js'
import { usuariosDao } from '../daos/usuarios.dao.js'

const register = async (req, res) => {
  const { nombre, email, password } = req.body

  try {
    const hash = bcrypt.hashSync(password, 10)
    const user = { nombre, email, password: hash }

    const result = await usuariosDao.createUser(user)

    const signature = config.secretKey
    const payload = { email: user.email }
    const token = jwt.sign(payload, signature, config.token)

    if (result) {
      res
        .status(201)
        .set('authorization', `Bearer ${token}`)
        .cookie('token', token, config.cookie)
        .redirect('/')
    } else {
      res.status(500).send('Algo salió mal. Ingresa nuevamente')
    }
  } catch (error) {
    res.status(500).send('Error en el registro: ' + error.message)
  }
}

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await usuariosDao.getUserByEmail(email)

    if (!user) {
      return res
        .status(404)
        .json({ error: true, desc: 'Usuario o password incorrecto.' })
    }

    const isValid = bcrypt.compareSync(password, user.password)

    if (!isValid) {
      return res
        .status(404)
        .json({ error: true, desc: 'Usuario o password incorrecto.' })
    }

    const signature = config.secretKey
    const payload = { id: user.usuario_id, email: user.email }
    const token = jwt.sign(payload, signature, config.token)

    res.status(200).cookie('token', token, config.cookie).redirect('/admin')
  } catch (error) {
    res.status(500).send('Error en el login: ' + error.message)
  }
}

export const controllers = {
  register,
  login
}
