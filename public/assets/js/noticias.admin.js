

    const contenedor = document.getElementById('contenedorListadoNoticias')
    const idNoticia = document.getElementById('idnoticia')
    const noticiaTitulo = document.getElementById('titulonoticia')
    const noticiaTexto = document.getElementById('textonoticia')
    const notificaAutor = document.getElementById('autornoticia')
    const noticiaFecha = document.getElementById('fechanoticia')
    const noticiaImagen = document.getElementById('imagennoticia')
    const categorianoticia = document.getElementById('categorianoticia')
    const fechanoticialb = document.getElementById('fechanoticialb')
   
  
    const API_URL = 'https://grupo9api.up.railway.app/noticias'
    const BASE_URL = 'https://grupo9api.up.railway.app'
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
              <div class="unaNotadetalle">
                <div class="noticiasfoto">
                  <img src="` + BASE_URL+ `${noticia.imagen}" alt="${noticia.titulo}">
                </div>
                <div class="noticiasTexto">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500">${noticia.categoria}</p>
                  <p class="text-xl font-bold sm:text-2xl ">${noticia.titulo}</p>
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
            <div class="unaNotadetalle">
              <div class="noticiasfoto">
                <img src="${noticia.imagen}" alt="${noticia.titulo}">
              </div>
              <div class="noticiasTexto">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">${noticia.categoria}</p>
                <p class="text-xl font-bold sm:text-2xl">${noticia.titulo}</p>
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




const enviar = async () => {
    try {
        let fecha = "";
        let config;
        if (idNoticia.value > 0){
            let arr1 = noticiaFecha.value.split('-');
            fecha = arr1[2] + "-" + arr1[1] + "-" + arr1[0];
            config = {
                url: API_URL + '/' + idNoticia.value,
                method:'PATCH'
            }
        }else{           
            let hoy=new Date(); 
            fecha = hoy.getFullYear() + "-" + ("0"+(hoy.getMonth()+1)).slice(-2) + "-" + ("0" + hoy.getDate()).slice(-2)
            config = {
                url: API_URL,
                method:'POST'
            }
        }
               
        let payload = {
            categoria: categorianoticia.value,
            titulo: noticiaTitulo.value,
            cuerpo: noticiaTexto.value,
            autor: notificaAutor.value,
            fecha: fecha,
            imagen: noticiaImagen.value
        };        
        let data = JSON.stringify( payload );          
                  
        setContenedorHTML('<div align="center">enviando noticia...</div>')
        console.log(config.url + " " + config.method + " " + data)
        const res = await fetch(config.url, { 
                method: config.method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: (data) 
        })       
           
        if (!res.ok) throw new Error('Error en la respuesta de la API agregar')
        const respuesta = await res.json()  
                
        document.getElementById("altanoticia").style.display="none"
        document.getElementById("contenedorListadoNoticias").style.display="block"    
        setContenedorHTML('<div align="center"><span class="mdi mdi-check-bold"></span><br>Noticia enviada correctamente</div>')

        setTimeout("cargarNoticias()",2000);

        } catch (error) {
            document.getElementById("altanoticia").style.display="none"
            document.getElementById("contenedorListadoNoticias").style.display="block" 
            console.error('Error al agregar la noticia ', error)
            mostrarError('<div align="center">Error al enviar noticia</div>')
        }
}

const preparoAlta = () => {
    mostrar("altanoticia")
    idnoticia.value = "0"        
    noticiaTitulo.value = ""        
    noticiaTexto.value = ""       
    notificaAutor.value = ""       
    noticiaFecha.value = ""  
    noticiaFecha.style.display="none"     
    fechanoticialb.style.display="none"     
    noticiaImagen.value =""       
    categorianoticia.value =""  
   
}

const editar = async (id) => {
     
            try {
            
            setContenedorHTML('<div align="center">Cargando noticia...</div>')
            const res = await fetch(API_URL + '/' + id)
            if (!res.ok) throw new Error('Error en la respuesta de la API editar')
            const respuesta = await res.json()          
            
            mostrar("altanoticia")

            noticiaFecha.style.display="block"   
            fechanoticialb.style.display="block"   
            idnoticia.value = id        
            noticiaTitulo.value = respuesta.titulo         
            noticiaTexto.value = respuesta.cuerpo
            notificaAutor.value = respuesta.autor
            noticiaFecha.value = respuesta.fecha
            noticiaImagen.value = respuesta.imagen
            categorianoticia.value = respuesta.categoria
          

            } catch (error) {
                console.error('Error al cargar las noticias:', error)
                mostrarError('<div align="center">Error al leer  noticia</div>')
            }
     
  }

const borrar = async (id) => {
    if (confirm("Borrar noticia?") == true) {
            try {
            
            setContenedorHTML('<div align="center">Cargando noticias...</div>')
            const res = await fetch(API_URL + '/' + id, { method: 'DELETE'})
            if (!res.ok) throw new Error('Error en la respuesta de la API borrar')
            const respuesta = await res.json()         
                        
            setContenedorHTML('<div align="center">'+respuesta.message+'</div>')
            setTimeout("cargarNoticias()",2000);

            } catch (error) {
                console.error('Error al borrar las noticias:', error)
                mostrarError('<div align="center">Error al borrar las noticias</div>')
            }
    }
  }


 