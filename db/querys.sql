DROP DATABASE IF EXISTS noticiasdb_combineleg;

CREATE DATABASE noticiasdb_combineleg;

USE noticiasdb_combineleg;

DROP TABLE IF EXISTS noticias;
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS categoria;
DROP TABLE IF EXISTS noticia_foto;

CREATE TABLE usuario (
  usuario_id int(11) unsigned NOT NULL AUTO_INCREMENT,
  nombre varchar(50) NOT NULL DEFAULT '',
  email varchar(100) NOT NULL DEFAULT '',
  password varchar(150) NOT NULL DEFAULT '',
  PRIMARY KEY (usuario_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO
    usuario (usuario_id, nombre,email,password)
VALUES
    (
        1,
        'Noelia',
				'noelia@gmail.com',
				''      
    ),
		(
        2,
        'Marcos',
				'marcos@gmail.com', 
				''     
    ),
		(
        3,
        'Matias',
				'matias@gmail.com',     
				''
    ),
		(
        4,
        'Lucas',
				'lucas@gmail.com',
		   	''	     
    );

CREATE TABLE categoria (
  `categoria_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL DEFAULT '',
  PRIMARY KEY (`categoria_id`)
)  ENGINE=InnoDB  DEFAULT CHARSET=latin1;

INSERT INTO
    categoria (categoria_id, nombre)
VALUES
    (
        1,
        'Tecnolog�a'      
    ),
		(
        2,
        'Espect�culos'      
    )		,
		(
        3,
        'Energias renovables'     
    );

CREATE TABLE noticia_foto (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  noticia_id int(11) unsigned NOT NULL DEFAULT '0',
  foto varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE
    noticias (
        id INT (11) UNSIGNED NOT NULL AUTO_INCREMENT,
        categoria TINYINT (3) UNSIGNED NOT NULL DEFAULT 1,
        titulo VARCHAR(500) NOT NULL,
        cuerpo TEXT NOT NULL,
        autor VARCHAR(50) NOT NULL,
        fecha DATE NOT NULL,
        imagen VARCHAR(150) DEFAULT NULL,
        PRIMARY KEY (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO
    noticias (categoria, titulo, cuerpo, autor, fecha, imagen)
VALUES
    (
        1,
        'Descubrimiento de una nueva especie marina',
        'Científicos han descubierto una nueva especie marina en el océano Atlántico. La especie tiene características únicas que no se habían visto antes. Los investigadores creen que este descubrimiento puede ofrecer nuevas perspectivas sobre la evolución marina. La nueva especie se encuentra en una región de difícil acceso, lo que dificultó su descubrimiento. Se están realizando más estudios para entender su comportamiento y hábitat.',
        'Juan Marcos Kruppa',
        '2024-06-11',
        '/images/marina.webp'
    ),
    (
        2,
        'Avances en la medicina genética',
        'Un equipo de investigadores ha logrado un gran avance en la medicina genética. Han desarrollado una técnica que permite editar genes con una precisión sin precedentes. Este avance podría llevar a la cura de muchas enfermedades genéticas. Los ensayos clínicos iniciales han mostrado resultados prometedores. Se espera que esta tecnología esté disponible para uso general en unos pocos años.',
        'Ojunian Lucas',
        '2024-06-12',
        '/images/genetica.webp'
    ),
    (
        3,
        'Revolución en el transporte urbano',
        'Las ciudades están adoptando nuevas tecnologías para mejorar el transporte urbano. Los vehículos eléctricos y autónomos están ganando popularidad. Estas innovaciones están ayudando a reducir la congestión y la contaminación. Los ciudadanos están viendo mejoras significativas en la calidad del aire. Los expertos creen que el futuro del transporte urbano será más limpio y eficiente.',
        'Noelia Susana Matamoros Bello',
        '2024-06-13',
        '/images/transporte_urbano.webp'
    ),
    (
        4,
        'Innovaciones en energías renovables',
        'Las energías renovables están experimentando un crecimiento sin precedentes. Nuevas tecnologías están haciendo que la energía solar y eólica sean más eficientes. Los gobiernos están invirtiendo en infraestructura para apoyar estas fuentes de energía. Los costos de producción están disminuyendo, haciendo que las energías renovables sean más accesibles. Se espera que en las próximas décadas, las energías renovables se conviertan en la principal fuente de energía.',
        'Matias Martin Murad Pretz',
        '2024-06-14',
        '/images/energias_renovables.webp'
    ),
    (
        5,
        'Exploración del espacio profundo',
        'La exploración del espacio profundo está alcanzando nuevos hitos. Misiones a Marte y más allá están proporcionando datos valiosos. Los científicos están utilizando estos datos para entender mejor nuestro universo. La tecnología espacial está avanzando rápidamente, permitiendo misiones más ambiciosas. Se espera que en el futuro cercano, los humanos puedan viajar más allá del sistema solar.',
        'Juan Marcos Kruppa',
        '2024-06-15',
        '/images/exploracion_espacial.webp'
    ),
    (
        6,
        'Innovaciones en el campo de la robótica',
        'La robótica está transformando industrias en todo el mundo. Nuevos robots están siendo desarrollados para realizar tareas complejas. Estos robots están siendo utilizados en la manufactura, la medicina y otros campos. Los avances en inteligencia artificial están mejorando la capacidad de estos robots. Se prevé que la robótica seguirá siendo un campo de rápido crecimiento.',
        'Ojunian Lucas',
        '2024-06-16',
        '/images/robotica_innovaciones.webp'
    ),
    (
        7,
        'Cambio climático y sus efectos',
        'El cambio climático está teniendo efectos significativos en nuestro planeta. Las temperaturas globales están aumentando, causando cambios en los patrones climáticos. Estos cambios están afectando a la agricultura y la biodiversidad. Los científicos están trabajando en soluciones para mitigar estos efectos. Es crucial que se tomen medidas urgentes para abordar el cambio climático.',
        'Noelia Susana Matamoros Bello',
        '2024-06-17',
        '/images/cambio_climatico_efectos.webp'
    ),
    (
        8,
        'Educación digital en el siglo XXI',
        'La educación digital está revolucionando el aprendizaje. Plataformas en línea están haciendo que la educación sea más accesible. Los estudiantes pueden aprender a su propio ritmo y en cualquier lugar. Las herramientas digitales están mejorando la experiencia de aprendizaje. Se espera que la educación digital siga creciendo en popularidad.',
        'Matias Martin Murad Pretz',
        '2024-06-18',
        '/images/educacion_digital.webp'
    ),
    (
        9,
        'Descubrimientos en arqueología',
        'Recientes excavaciones han llevado a descubrimientos sorprendentes. Los arqueólogos han encontrado restos de antiguas civilizaciones. Estos descubrimientos están proporcionando nueva información sobre la historia humana. Los sitios arqueológicos están siendo preservados para futuras generaciones. La arqueología sigue siendo una disciplina vital para entender nuestro pasado.',
        'Juan Marcos Kruppa',
        '2024-06-19',
        '/images/arqueologia_descubrimientos.webp'
    ),
    (
        10,
        'Tecnología blockchain en finanzas',
        'La tecnología blockchain está revolucionando las finanzas. Las transacciones son más seguras y transparentes. Las empresas están adoptando blockchain para mejorar sus operaciones. Los expertos creen que blockchain será fundamental en el futuro de las finanzas. Se están desarrollando nuevas aplicaciones para esta tecnología.',
        'Ojunian Lucas',
        '2024-06-20',
        '/images/blockchain_finanzas.webp'
    );

SELECT
    id,
    categoria,
    titulo,
    cuerpo,
    autor,
    fecha,
    imagen
FROM
    noticias;