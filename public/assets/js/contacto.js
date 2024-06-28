const emailValido = correo => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
}
const btnEnviar = document.getElementById('btnEnviar')
const myForm = document.getElementById('myForm')
btnEnviar.addEventListener('click', validarFormulario)

function validarFormulario () {
  console.log('validar')

  const tipoconsulta = document.getElementById('tipoconsulta')
  const nombre = document.getElementById('nombre')
  const correo = document.getElementById('correo')
  let falta = ''

  if (tipoconsulta.options[tipoconsulta.selectedIndex].value === 0) {
    falta += 'Falta completar el tipo de consulta\n'
    tipoconsulta.focus()
  }
  if (nombre.value.trim().length < 3) {
    falta += 'Falta completar el nombre\n'
    nombre.focus()
  }
  if (correo.value.trim().length < 3 || !emailValido(correo.value)) {
    falta += 'Falta completar el Email\n'
    correo.focus()
  }

  if (falta.trim().length > 0) {
    console.log('falta ' + falta)
    alert(falta)
  } else {
    console.log('todo ok ' + falta)
    alert(
      'Gracias por contactarse con nosotros. \nSu mensaje será respondido a la brevedad.'
    )
    myForm.submit()
  }
}

document.getElementById('imagen').addEventListener('change', function (event) {
  const file = event.target.files[0]
  const preview = document.getElementById('preview')
  preview.innerHTML = ''

  const imgContainer = document.createElement('div')
  imgContainer.style.marginBottom = '20px'
  const img = document.createElement('img')
  img.src = URL.createObjectURL(file)
  img.style.height = '100px'
  img.style.display = 'block'

  imgContainer.appendChild(img)

  preview.appendChild(imgContainer)
})
