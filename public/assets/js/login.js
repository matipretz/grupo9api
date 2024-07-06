const API_LOGIN_URL = 'https://grupo9api.up.railway.app/auth'
const email = document.getElementById('email')
const password = document.getElementById('password')

const login = async () => {
    try {

      let payload = {
            email: email.value,
            password: password.value           
      }  
         
      const res = await fetch(API_LOGIN_URL + '/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
        })
      if (!res.ok) throw new Error('Error en la respuesta de la API')
      const respuesta = await res.json()
         
     console.log(respuesta)

    } catch (error) {
      console.error('Error en la respuesta de la API:', error)
      alert('Error en la respuesta de la API')
    }
  }