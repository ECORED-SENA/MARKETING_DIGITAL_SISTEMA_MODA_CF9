export default {
  global: {
    componenteFormativo: 'Comunicación Gráfica',
    descripcionCurso:
      'Toda marca necesita desarrollar un proceso comunicativo fundamentado en los diversos aspectos del diseño. Por ello, en este componente se integran aquellos conceptos que se tienen en cuenta para desarrollar una imagen sólida que exprese un determinado mensaje a través de elementos compositivos apoyados en la gráfica visual.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Comunicación visual y comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Comunicación visual',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Comunicación comercial',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentos de diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios de la composición gráfica',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Leyes de la Gestalt',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Teoría del color',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Tipografías',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Proceso de digitalización',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamentos de fotografía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Breve historia de la fotografía',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Elementos básicos de la fotografía',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tipos de fotografía',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Fundamentos de producción audiovisual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Breve historia de la producción audiovisual',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Elementos básicos de la producción audiovisual',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Tipos de producción audiovisual',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Herramientas de edición de piezas gráficas y comunicacionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Fundamentos de marca',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Baratas, M. A. (2016). Elaboración de materiales de marketing y comunicación. Ediciones de la U.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=7126',
    },
    {
      referencia:
        'Bergondo, E. (2014). Fundamentos de la fotografía. Ministerio de Educación de España.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/114108?page=36',
    },
    {
      referencia:
        'Casa Verde Films (2014). Casa Verde Films: 7 Elementos básicos de la fotografía.',
      link:
        'https://casaverdefilms.wordpress.com/2014/05/01/7-elementos-basicos-de-la-fotografia/',
    },
    {
      referencia:
        'Delgado, J. C. (2021). Crehana: 16 tipos de fotografía para convencerte de expandir tu talento.',
      link:
        'https://www.crehana.com/co/blog/fotografia/tipos-de-fotografia-que-tienes-que-conocer/',
    },
    {
      referencia:
        'Díaz Soloaga, P. (2014). Comunicación y gestión de marcas de moda. Editorial Gustavo Gili.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45542?page=100',
    },
    {
      referencia: 'Espinel, R. (2021). ¿Qué es la producción audiovisual?',
      link:
        'https://produccionaudiovisual.com/que-es-la-produccion-audiovisual/',
    },
    {
      referencia:
        'Gavidia Anticona, J. A. (2015). Lenguaje y comunicación. Ediciones de la U.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5589',
    },
    {
      referencia:
        'Gaticos y Monetes. (2020). Gaticos y Monetes: La comunicación comercial.',
      link: 'https://gaticosymonetes.com/8-la-comunicacion-comercial/',
    },
    {
      referencia:
        'ILERNA. (2019). ILERNA: La percepción visual: las leyes de la Gestalt.',
      link: 'https://www.ilerna.es/blog/fp-a-distancia/3d/leyes-de-la-gestalt/',
    },
    {
      referencia:
        'López, Anna María. (2014). Curso diseño gráfico Fundamentos y técnicas. Madrid: Anaya Multimedia.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=13687',
    },
    {
      referencia:
        'Loop Creativo. (2016). ¿Qué es una marca? – Fundamentos sobre Branding.',
      link:
        'https://loopcreativo.com/que-es-una-marca-fundamentos-sobre-branding/#:~:text=Podemos%20definir%20la%20marca%20como,lo%20diferencia%20de%20sus%20competidores',
    },
    {
      referencia:
        'Mandarina Brand (2016). Mandarina Brand: Importancia del contenido visual y herramientas de edición.',
      link: 'https://mandarinabrand.com/blog/contenido-visual-herramientas/',
    },
    {
      referencia:
        'Munari, B. (2016). Diseño y comunicación visual: contribución a una metodología proyectual. Editorial Gustavo Gili. Digitalia.',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/41395',
    },
    {
      referencia:
        'Neetwork Businnes School. (2020). Neetwork Businnes School: 7 principios de la composición visual en diseño gráfico',
      link: 'https://neetwork.com/7-principios-de-la-composicion-visual/',
    },
    {
      referencia:
        'Pérez, M. (2020). Composición fotográfica: mega guía con consejos y trucos imprescindibles.',
      link:
        'https://www.blogdelfotografo.com/consejos-trucos-composicion-fotografica/',
    },
    {
      referencia:
        'Productora audiovisual. (2015). 5 tipos de producciones audiovisuales.',
      link:
        'https://productoraudiovisualbarcelona.com/5-tipos-producciones-audiovisuales/',
    },
    {
      referencia:
        'Redactor Rock Content. (2018). Los mejores programas de diseño gráfico.',
      link: 'https://rockcontent.com/es/blog/programas-de-diseno-grafico/',
    },
    {
      referencia:
        'Rollié, R. O. (2011). La enseñanza del diseño en comunicación visual. Editorial Nobuko. Digitalia.',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/34193',
    },
    {
      referencia:
        'Silva, S. (2020). Too Many Flash: Tipos de Fotografía: Define tu Estilo como Fotógrafo.',
      link: 'https://toomanyflash.com/tipos-de-fotografia/',
    },
    {
      referencia:
        'Treintaycinco mm. (2020). Treintaycinco mm: Historia de la producción audiovisual.',
      link: 'https://35mm.es/historia-produccion-audiovisual/',
    },
    {
      referencia:
        'Wong, W (1991). Fundamentos del diseño bi- y tri- dimensional. Gustavo Gili.',
    },
  ],
  glosario: [
    {
      termino: 'Bidimensional',
      significado: 'Que posee dos caras, o sea un objeto plano.',
    },
    {
      termino: 'Brief',
      significado:
        'Documento que expone todos los elementos de una marca, en cuanto a su información, objetivos a alcanzar y plan de marca.',
    },
    {
      termino: 'Ficción cinematográfica',
      significado:
        'Género del cine, en que se desarrolla una historia fantasiosa o de ciencia ficción.',
    },
    {
      termino: 'Feedback',
      significado:
        'Se refiere a la retroalimentación, sobre todo en un proceso comunicativo.',
    },
    {
      termino: 'Gráfica Vectorial',
      significado: 'Imagen digital formada por objetos geométricos.',
    },
    {
      termino: 'Gestalt',
      significado:
        'actividad creativa orientada a soluciones idóneas a ciertas problemáticas.',
    },
    {
      termino: 'Tridimensional',
      significado: 'Que posee tres caras.',
    },
    {
      termino: 'Tipografía',
      significado:
        'Tarea de diseñar la forma de las letras que serán usadas en impresión.',
    },
  ],
  complementario: [
    {
      texto:
        'Díaz, P. (2014). Comunicación y gestión de marcas de moda. Editorial Gustavo Gili.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45542?page=100',
    },
    {
      texto:
        'Pérez, M. (2020). Composición fotográfica: mega guía con consejos y trucos imprescindibles.',
      tipo: 'Artículo web',
      link:
        'https://www.blogdelfotografo.com/consejos-trucos-composicion-fotografica/',
    },
    {
      texto: 'Espinel, R. (2021). ¿Qué es la producción audiovisual?',
      tipo: 'Página Web',
      link:
        'https://produccionaudiovisual.com/que-es-la-produccion-audiovisual/',
    },
    {
      texto:
        'Redactor Rock Content. (2018). Los mejores programas de diseño gráfico.',
      tipo: 'Artículo web',
      link: 'https://rockcontent.com/es/blog/programas-de-diseno-grafico/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Camila Alvarez Trujillo',
        cargo: 'Contratista diseño curricular',
        centro:
          'Regional Antioquia - Centro de Formación en Diseño, Cinfección y Moda',
      },
      {
        nombre: 'Liliana María Ceballos',
        cargo: 'Contratista diseño curricular',
        centro:
          'Regional Antioquia - Centro de Formación en Diseño, Cinfección y Moda',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica del SENA',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Oscar Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Giselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Perez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Herrera',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
