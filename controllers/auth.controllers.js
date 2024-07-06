import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from '../auth/index.js'
 
import { usuariosDao } from '../daos/usuarios.dao.js'



/**
 * Endpoint response '/auth/register'
 * @param {Request} req Client Request 
 * @param {Response} res Client Response
 */
const register = (req, res) => {

    const { usuario_id, nombre, email, password } = req.body

    /*
    Cifrado/Encriptación:
    Es el proceso/algoritmo que realizamos para transformar información legible a ilegible
    
    
    Hash:
    El hash es una representación única y de longitud fija de un conjunto de datos o caracteres, si el elemento a hashear cambia en lo mas mínimo, el hash cambia
    
    
    Uso:
    El hash sirve para ser parte del proceso de cifrado, no es cifrado en sí
    
    
    Bcryptjs:
    Sirve para la codificación y encriptado
    
    Bcryptjs agrega una cadena aleatoria antes de hashear, por ello cambia el hash
    cada vez que lo hacemos
    
    El segundo parámetro hace referencia a las rondas de hasheo (re-hasheo, cantidad de veces que se hace el proceso de hash), a mayores
    vueltas da más seguridad pero la exigencia computacional es mayor (proceso pesado)
    */
    const hash = bcrypt.hashSync(password, 10)
   
    const user = {  usuario_id, nombre,email, password: hash }
    const result = usuariosDao.createUser(user)

    /*
    Codificación: 
    Es la transformación de los datos de un formato a otro.
    La idea de la codificación no es la de crear un valor único, sino transformación.
    
    JWT Se compone de tres partes: 
    - Headers (incluye toda la información del proceso de codificación)
    - Payload (el material de valor a transferir)
    - Signature (la firma que se elabora en el servidor gracias a nuestra clave secreta)
    
    Cada sección de la información se codifica en Base64 y se adjunta (punto mediante)
    
    Base64 es un conjunto de 64 caracteres que lo componen mayús, minus, números y símbolos.
    Cada grupo de 3 bytes (24 bits) se dividen en 4 grupos de 6 bits, estos se mapean en los caracteres que conforman la Base64
    */
    const signature = config.secretKey
    const payload = { id: user.usuario_id, email: user.email }
    const token = jwt.sign(payload, signature, config.token)

    result
        ? res
            .status(201)
            // .set('authorization', `Bearer ${token}`)
            // .cookie('token', token, config.cookie)
            .cookie('token', token, config.cookie)
            .redirect('/')

        : res.send('Algo sali� mal. Ingres� nuevamente')
}



/**
 * Endpoint response '/auth/login'
 * @param {Request} req Client Request 
 * @param {Response} res Client Response
 */
const login = (req, res) => {

    const { email, password } = req.body
    
    // Busco el usuario
    const user = usersDB.getUserByName(email)

    if (!user) return res
        .status(404)
        .json({ error: true, desc: 'Usuario o password incorrecto.' })

    // Comprobamos el password
    const isValid = bcrypt.compareSync(password, user.password)

    if (!isValid) return res
        .status(404)
        .json({ error: true, desc: 'Usuario o password incorrecto..' })

    const signature = config.secretKey
    const payload = { id: user.usuario_id, email: user.email }

    const token = jwt.sign(payload, signature, config.token)

    res
        .status(200)
        // .set('authorization', `Bearer ${token}`)
        .cookie('token', token, config.cookie)
        .redirect('/admin')
}



export const controllers = {
    register,
    login
}