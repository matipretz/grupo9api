const API_LOGIN_URL = 'g9auth.up.railway.app'
const email = document.getElementById('email')
const password = document.getElementById('password')

const login = async () => {
  try {
    const payload = {
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
    window.alert('Error en la respuesta de la API')
  }
}