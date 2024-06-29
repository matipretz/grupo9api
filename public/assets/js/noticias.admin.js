

    const contenedor = document.getElementById('contenedorListadoNoticias')
  
    const API_URL = 'https://grupo9api-production.up.railway.app/noticias'
    const setContenedorHTML = html => {
      contenedor.innerHTML = html
    }


  
  
    const mostrarError = mensaje => {
      setContenedorHTML(`<div align="center">${mensaje}</div>`)
    }
  
    const cargarNoticias = async () => {
      try {
        setContenedorHTML('<div align="center">Cargando noticias...</div>')
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error('Error en la respuesta de la API')
        const noticias = await res.json()
       
        const html = noticias
          .map(
            noticia => `         
            <article data-id="${noticia.id}">
              <div class="unaNotadetalle aparecer">
                <div class="noticiasfoto">
                  <img src="${noticia.imagen}" alt="${noticia.titulo}">
                </div>
                <div class="noticiasTexto">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500">${noticia.categoria}</p>
                  <p class="text-xl font-bold sm:text-2xl slide-in-left">${noticia.titulo}</p>
                  <p>Por: ${noticia.autor} el ${noticia.fecha}</p>
                  <div class="botonera"> <a onclick="editar(${noticia.id})"><span class="mdi mdi-pencil"></span> Editar</a> <a onclick="borrar(${noticia.id})"><span class="mdi mdi-delete"></span> Borrar</a></div>
                </div>
              </div>
            </article>
         `)
          .join('')
         
        setContenedorHTML(html)
      } catch (error) {
        console.error('Error al cargar las noticias:', error)
        mostrarError('Error al cargar las noticias.')
      }
    }
  
    window.vernoticia = async id => {
      try {
        setContenedorHTML('<div align="center">Cargando noticia...</div>')
        const res = await fetch(API_URL + `/${id}`)
        if (!res.ok) throw new Error('Error en la respuesta de la API')
        const noticia = await res.json()
        const html = `
          <article data-id="${noticia.id}">
            <div class="unaNotadetalle aparecer">
              <div class="noticiasfoto">
                <img src="${noticia.imagen}" alt="${noticia.titulo}">
              </div>
              <div class="noticiasTexto">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">${noticia.categoria}</p>
                <p class="text-xl font-bold sm:text-2xl slide-in-left">${noticia.titulo}</p>
                <p class="text-sm copete">${noticia.cuerpo}</p>
              </div>
            </div>
          </article>`
        setContenedorHTML(html)
      } catch (error) {
        console.error('Error al cargar la noticia:', error)
        mostrarError('Error al cargar la noticia.')
      }
    }
  
    cargarNoticias()



  function mostrar(idElemento){
    document.getElementById("altanoticia").style.display="none"
    document.getElementById("contenedorListadoNoticias").style.display="none"
    document.getElementById(idElemento).style.display="block"
    if (idElemento == 'contenedorListadoNoticias') cargarNoticias()
}
  

const borrar = async (idNoticia) => {
    if (confirm("Borrar noticia?") == true) {
            try {
            
            setContenedorHTML('<div align="center">Cargando noticias...</div>')
            const res = await fetch(API_URL + '/' + idNoticia, { method: 'DELETE'})
            if (!res.ok) throw new Error('Error en la respuesta de la API')
            const respuesta = await res.json()          
            
            
            setContenedorHTML(respuesta.message)

            setTimeout("cargarNoticias()",2000);

            } catch (error) {
            console.error('Error al cargar las noticias:', error)
            mostrarError('Error al cargar las noticias.')
            }
    }
  }

