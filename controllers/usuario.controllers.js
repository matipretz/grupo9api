import { usuariosDao } from '../daos/usuarios.dao.js'



/**
 * Endpoint response '/users/'
 
 */
 
const getUsers = async (req, res) => {
    try {
      const result = await usuariosDao.getUsers()
      res.json(result)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }


/**
 * Endpoint response '/users/:id'
 */
 
const getUserById = async (req, res) => {
    try {        
      const result = await usuariosDao.getUserById(req.params.id)
      if (result) {
        res.json(result)
      } else {
        res.status(404).json({ error: 'usuario no encontrado' })
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }




export const controllers = {
    getUsers,
    getUserById
}  