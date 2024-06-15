const mock = [
  {
    id: 1,
    autor: 'Noelia Matamoros',
    categoria: ['Barriales'],
    copete:
      'Durante un incendio que consumía un vecindario en la ciudad, el bombero veterano Juan Pérez protagonizó un acto de valentía al rescatar a un gato atrapado en lo alto de un árbol en llamas. El felino, bautizado como Pelusa por los vecinos, fue llevado a salvo por Pérez, quien arriesgó su vida para asegurar la seguridad de todos los habitantes, incluyendo a los miembros peludos de la comunidad.',
    imagenUrl: 'https://grupo9.vercel.app/images/noticia1.mobile.webp',
    titulo: 'Bombero héroe rescata a minino atrapado en árbol durante incendio'
  },
  {
    id: 2,
    autor: 'Juan Marcos Kruppa',
    categoria: ['Ciencia'],
    copete:
      'En un emocionante giro de los acontecimientos, un equipo de paleontólogos anunció el descubrimiento de un nuevo dinosaurio en el desierto de Egipto. El hallazgo es excepcional no solo por la rareza de encontrar restos fósiles en esta región, sino también por la singularidad de la especie. El dinosaurio, bautizado como Aegyptosaurus, desafía las suposiciones previas sobre la distribución geográfica de estas criaturas prehistóricas.',
    imagenUrl: 'https://grupo9.vercel.app/images/noticia2.mobile.webp',
    titulo:
      'Descubierto nuevo dinosaurio en Egipto: Un hallazgo que desafía la historia'
  },
  {
    id: 3,
    autor: 'Noelia Matamoros',
    categoria: ['Tecnología'],
    copete:
      'Científicos en un laboratorio de investigación anunciaron el desarrollo de una nueva tecnología que podría impulsar significativamente la eficiencia de las células solares. Este avance promete hacer que la energía solar sea más accesible y económica para un mayor número de personas, allanando el camino hacia un futuro más sostenible. Título:Artista local transforma desechos plásticos en obras de arte para concienciar sobre la contaminación.',
    imagenUrl: 'https://grupo9.vercel.app/images/noticia3.mobile.webp',
    titulo: 'Nuevo avance científico promete revolucionar la energía renovable'
  },
  {
    id: 4,
    autor: 'Juan Marcos Kruppa',
    categoria: ['Comida'],
    copete:
      'El famoso chef español José Andrés anunció que sus restaurantes se convertirán en cocinas comunitarias para proporcionar comidas gratuitas a personas afectadas por la pandemia del coronavirus. Andrés dijo que su equipo está preparado para ofrecer miles de comidas diarias y que están comprometidos a ayudar a la comunidad en estos tiempos difíciles.',
    imagenUrl: 'https://grupo9.vercel.app/images/chef.webp',
    titulo:
      'El chef José Andrés convierte sus restaurantes en cocinas comunitarias'
  },
  {
    id: 5,
    autor: 'Lucas Ojunian',
    categoria: ['Tecnología'],
    copete:
      'La NASA anunció que el lanzamiento del próximo rover a Marte, Perseverance, sigue programado para julio de 2020 a pesar de los desafíos presentados por la pandemia del coronavirus. El equipo de la misión ha implementado estrictas medidas de seguridad para proteger la salud de todos los involucrados y garantizar que la misión continúe según lo previsto.',
    imagenUrl: 'https://grupo9.vercel.app/images/nasa.webp',
    titulo:
      'La NASA confirma el lanzamiento del rover Perseverance a Marte en julio'
  },
  {
    id: 6,
    autor: 'Lucas Ojunian',
    categoria: ['Internacionales'],
    copete:
      'El gobierno español ha anunciado un paquete de estímulo económico de 200 mil millones de euros para hacer frente a la crisis causada por el coronavirus. Este paquete incluye ayudas directas a las empresas y a los trabajadores autónomos, así como garantías de préstamos para asegurar la liquidez del sistema financiero.',
    imagenUrl: 'https://grupo9.vercel.app/images/spain.webp',
    titulo:
      'España anuncia un paquete de estímulo económico de 200 mil millones de euros'
  },
  {
    id: 7,
    autor: 'Lucas Ojunian',
    categoria: ['Tecnología'],
    copete:
      'Amazon ha informado que contratará a 100,000 empleados adicionales en Estados Unidos para satisfacer el aumento en la demanda de compras en línea durante la pandemia del coronavirus. La compañía también incrementará el salario por hora para sus empleados de almacén y distribución.',
    imagenUrl: 'https://grupo9.vercel.app/images/amazon.webp',
    titulo:
      'Amazon contratará a 100,000 empleados adicionales en EE.UU. debido a la pandemia'
  },
  {
    id: 8,
    autor: 'Noelia Matamoros',
    categoria: ['Deportes'],
    copete:
      'El Comité Olímpico Internacional (COI) ha anunciado que los Juegos Olímpicos de Tokio 2020 se pospondrán hasta el verano de 2021 debido a la pandemia del coronavirus. La decisión se tomó tras consultar con el primer ministro japonés y otros funcionarios internacionales de salud.',
    imagenUrl: 'https://grupo9.vercel.app/images/coi.webp',
    titulo: 'El COI pospone los Juegos Olímpicos de Tokio 2020 hasta 2021'
  },
  {
    id: 9,
    autor: 'Matias Pretz',
    categoria: ['salud'],
    copete:
      'La Organización Mundial de la Salud (OMS) ha lanzado una aplicación móvil para proporcionar información precisa y actualizada sobre el coronavirus. La aplicación, disponible en varios idiomas, incluye consejos de salud, noticias y actualizaciones sobre la pandemia, así como herramientas para la autoevaluación de los síntomas.',
    imagenUrl: 'https://grupo9.vercel.app/images/oms.webp',
    titulo:
      'La OMS lanza una aplicación móvil para información sobre el coronavirus'
  },
  {
    id: 10,
    autor: 'Matias Pretz',
    categoria: ['Farándula'],
    copete:
      'El actor estadounidense Aaron Paul, quien interpretó a Jesse Pinkman en \'Breaking Bad\', reveló que usa un \'teléfono tonto del tamaño de una tarjeta de crédito\' que no puede almacenar aplicaciones y solo puede hacer llamadas y enviar mensajes de texto. "No tiene cámara ni correo electrónico," dijo Paul, agregando que planea comprar un teléfono de tapa. "No he tenido una computadora en más de 10 años," añadió.',
    imagenUrl: 'https://grupo9.vercel.app/images/braking.webp',
    titulo:
      "Uso un 'teléfono tonto' que solo hace llamadas y envía textos: actor de 'Breaking Bad'"
  },
  {
    id: 11,
    autor: 'Matias Pretz',
    categoria: ['salud'],
    copete:
      'Google compartió recientemente cinco medidas básicas de protección contra el coronavirus que pueden seguir las personas en todo el mundo. Estas incluyen lavarse las manos con frecuencia, toser en el codo, no tocarse la cara, mantenerse a más de un metro de distancia de los demás y quedarse en casa si se sienten enfermos. Los ingenieros de Google también están construyendo un sitio web para evaluar a posibles pacientes de coronavirus en EE.UU.',
    imagenUrl: 'https://grupo9.vercel.app/images/google.webp',
    titulo:
      'Google comparte 5 medidas básicas de protección contra el coronavirus'
  }
]
export default mock
