const emailValido = correo => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
}
let btnEnviar = document.getElementById('btnEnviar')
let myForm = document.getElementById('myForm')
btnEnviar.addEventListener('click', validarFormulario)

function validarFormulario () {
  console.log('validar')

  let tipoconsulta = document.getElementById('tipoconsulta')
  let nombre = document.getElementById('nombre')
  let correo = document.getElementById('correo')
  let falta = ''

  if (tipoconsulta.options[tipoconsulta.selectedIndex].value == 0) {
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
    return
  }
}

document.getElementById('imagen').addEventListener('change', function (event) {
  var file = event.target.files[0]
  var preview = document.getElementById('preview')
  preview.innerHTML = ''

  var imgContainer = document.createElement('div')
  imgContainer.style.marginBottom = '20px'
  var img = document.createElement('img')
  img.src = URL.createObjectURL(file)
  img.style.height = '100px'
  img.style.display = 'block'

  imgContainer.appendChild(img)

  preview.appendChild(imgContainer)
})
