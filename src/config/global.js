export default {
  global: {
    componenteFormativo: 'Marco normativo y conceptual',
    descripcionCurso:
      'En este componente formativo se abordarán los conceptos básicos relacionados con el dengue desde su definición como enfermedad, pasando a la epidemiología en Colombia y las políticas públicas vigentes para contribuir en la reducción de la morbilidad y mortalidad por esta causa, este es un contexto general para los profesionales que llevan a cabo el abordaje clínico de los casos y para la comprensión del dengue como evento de interés en salud pública priorizado dentro del gobierno nacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-mujer.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner_principal_0.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Qué es el dengue?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Forma de transmisión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Epidemiología',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Dengue en el marco de la política nacional de salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Plan decenal de salud pública',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Estrategia de gestión de las ETV (enfermedades transmitidas por vectores)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Rutas integrales de atención en salud',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Sistema de vigilancia en salud pública: Protocolos y lineamiento de vigilancia en salud pública',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Guías y lineamientos de manejo clínico',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        titulo: 'Descargar pdf',
        download: 'downloads/CFA_1_33130192.pdf',
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
  complementario: [
    {
      tema: '¿Qué es el dengue?',
      referencia: 'Ministerio de Salud y Protección Social. (2022). Dengue.',
      tipo: 'Página web',
      link: 'https://www.minsalud.gov.co/salud/publica/PET/Paginas/dengue.aspx',
    },
    {
      tema: '¿Qué es el dengue?',
      referencia: 'Organización Panamericana de la Salud. (2022). Dengue.',
      tipo: 'Página web',
      link: 'https://www.paho.org/es/temas/dengue',
    },
    {
      tema: 'Epidemiología',
      referencia:
        'Instituto Nacional de Salud (2022). Acceso a información epidemiológica nacional.',
      tipo: 'Página web',
      link:
        'https://www.ins.gov.co/buscador-eventos/Paginas/Vista-Boletin-Epidemilogico.aspx',
    },
    {
      tema: 'Estrategia de Gestión Integral de las ETV- EGI ETV',
      referencia:
        'Instituto Nacional de Salud (2022). Gestión para la vigilancia entomológica y control de transmisión de dengue. Documento técnico.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/gestion-vigilancia-entomologica-dengue.pdf',
    },
    {
      tema:
        'Plan Decenal de Salud Pública: Dimensión de vida saludable y enfermedades transmisibles.',
      referencia:
        'Ministerio de Salud y Protección Social. Plan Decenal de Salud Pública. PDSP 2012-2021. La salud en Colombia la construyes tú.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/PDSP.pdf',
    },
    {
      tema:
        'Plan Decenal de Salud Pública: Dimensión de vida saludable y enfermedades transmisibles.',
      referencia:
        'Resolución Número 1035 DE 2022. [Ministerio de Salud y Protección Social]. Por el cual se adopta el Plan Decenal de Salud Pública 2022-2031 con sus capítulos diferenciales: indígena para los pueblos y comunidades indígenas de Colombia, población víctima de conflicto armado, el Pueblo Rrom y la población negra, afrocolombiana, raizal y palenquera. 14 de junio de 2022.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%c3%b3n%20No.%201035%20de%202022.pdf',
    },
    {
      tema: 'Estrategia de Gestión Integral de las ETV- EGI ETV',
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Lineamiento táctico y operativo de la estrategia de gestión integrada para las enfermedades transmitidas por vectores (EGI-ETV) a nivel territorial.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/PAI/Lineamiento-Tatico-operativo-egi-Etv.pdf',
    },
    {
      tema: 'Estrategia de Gestión Integral de las ETV- EGI ETV',
      referencia:
        'Organización Panamericana de la Salud Ministerio de Salud y Protección Social. (2016). Plan estratégico del subprograma de dengue chikunguña 2014- 2021 en el marco de la EGI ETV y articulado al plan nacional mesoamericano de dengue – chikunguña.',
      tipo: 'Documento',
      link:
        'http://www.proyectomesoamerica.org:8088/smsp/phocadownload/Institucional/PlanesNacionales/PNDengue/COL%20PN%20Dengue.pdf',
    },
    {
      tema: 'Rutas integrales de atención',
      referencia:
        'Ministerio de Salud y Protección Social (2016). Ruta de atención de dengue.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/Documents/NOTICIAS%20OFICINA%20COMUNICACIONES/Salud/dengue/Ruta%20Dengue.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atención en salud',
      significado:
        'Servicios recibidos por los individuos o las poblaciones para promover, mantener y garantizar el bienestar y la salud.',
    },
    {
      termino: 'Arbovirosis',
      significado:
        'Su nombre proviene del inglés “Arthropod-Borne Virus”, que significa “virus transmitidos por artrópodos”.',
    },
    {
      termino: 'Artrópodo',
      significado:
        'Se refiere a animales multicelulares con simetría bilateral cuyo cuerpo está formado por tres regiones, cabeza, tórax y abdomen, con segmentos modificados en cada región, con forma y función específicas y recubiertas por una capa dura compuesta de quitina y que funciona como esqueleto externo, patas articuladas y crecimiento discontinuo por medio de mudas (Ministerio de la Protección Social, Instituto Nacional de Salud, Organización Panamericana de la Salud, 2011).',
    },
    {
      termino: 'Dengue',
      significado:
        'Enfermedad viral, de carácter endémico-epidémico, transmitida por mosquitos del género Aedes, principalmente por Aedes aegypti en la región de las Américas, que constituye hoy la arbovirosis más importante a nivel mundial en términos de morbilidad, mortalidad e impacto económico. El virus puede causar fiebre, dolores de cabeza, sarpullidos y dolor por todo el cuerpo. La mayoría de los casos de fiebre del dengue son leves y desaparecen por sí solos en aproximadamente una semana.',
    },
    {
      termino: 'Derecho',
      significado:
        'Es el conjunto de normas que establecen las bases de convivencia social y cuyo fin es dotar a todos los miembros de la sociedad de los mínimos de seguridad, certeza, igualdad, libertad y justicia',
    },
    {
      termino: 'Enfermedades Transmitidas por Vectores',
      significado:
        'Se refiere a los padecimientos en los que el agente causal o infeccioso requiere la participación de un artrópodo como hospedero o transmisor para completar su ciclo de vida y para mantener su población en hospederos vertebrados susceptibles (Ministerio de la Protección Social, Instituto Nacional de Salud, Organización Panamericana de la Salud, 2011).',
    },
    {
      termino: 'Epidemiología',
      significado:
        'El estudio de la distribución y los determinantes de estados o eventos (en particular de enfermedades) relacionados con la salud y la aplicación de esos estudios al control de enfermedades y otros problemas de salud.',
    },
    {
      termino: 'Eventos en salud',
      significado:
        'Conjunto de sucesos o circunstancias que pueden modificar o incidir en la situación de salud de una comunidad (enfermedad, factores protectores, discapacidad, muerte, factores de riesgo y otros determinantes).',
    },
    {
      termino: 'Gestión en Salud Pública',
      significado:
        'Es un proceso dinámico, integral, sistemático y participativo bajo el liderazgo y conducción de la autoridad sanitaria, el cual está orientado a que las políticas, planes, programas y proyectos de salud pública se realicen de manera efectiva, coordinada y organizada, entre los diferentes actores del SGSSS (Minsalud, Colombia).',
    },
    {
      termino: 'Inter epidémico',
      significado: 'Periodo comprendido entre dos epidemias.',
    },
    {
      termino: 'Política Pública',
      significado:
        'Directrices que fija el estado sobre un asunto de interés común.',
    },
    {
      termino: 'Salud Pública',
      significado:
        'Constituida por el conjunto de políticas que buscan garantizar de una manera integrada, la salud de la población por medio de acciones de salubridad dirigidas tanto de manera individual como colectiva, ya que sus resultados se constituyen en indicadores de las condiciones de vida, bienestar y desarrollo del país. Dichas acciones se realizarán bajo la rectoría del estado y deberán promover la participación responsable de todos los sectores de la comunidad. (República de Colombia, 2007)',
    },
    {
      termino: 'Normatividad',
      significado:
        'Un conjunto de reglas que tienen como finalidad regular y asegurar las cantidades y características en la producción o servicio de los bienes de consumo entre personas físicas y/o jurídicas.',
    },
    {
      termino: 'Morbilidad',
      significado:
        'Se refiere a la presentación de una enfermedad o síntoma de una enfermedad, o a la proporción de enfermedad en una población (Diccionario NCI, Instituto Nacional de Cáncer, Estados Unidos de América).',
    },
    {
      termino: 'Mortalidad',
      significado:
        'Tasa de muertes producidas en una población durante un tiempo dado, en general o por una causa determinada (RAE).',
    },
    {
      termino: 'Vectores: (Insectos vectores)',
      significado:
        'Se definen como aquellos que pueden transmitir enfermedades infecciosas entre personas, o de animales a personas. Muchos de esos vectores son insectos hematófagos que ingieren los microorganismos patógenos junto con la sangre de un portador infectado (persona o animal), y posteriormente los inoculan a un nuevo portador al ingerir su sangre. Se debe tener en cuenta que no todos los insectos hematófagos son vectores de patógenos infecciosos (OMS, 2019) (https://www.who.int/es/news-room/fact-sheets/detail/vector-borne-diseases).',
    },
  ],
  referencias: [
    {
      referencia:
        'Organización Mundial de la Salud. (2022). Dengue y dengue grave.',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/dengue-and-severe-dengue',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022): Sitio dengue.',
      link: 'https://www.minsalud.gov.co/salud/publica/PET/Paginas/dengue.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2017). Plan Decenal de Salud Pública 2012-2021.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/PDSP.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2021). Resolución 1035 de 2022 por el cual se adopta el Plan Decenal de Salud Pública 2022-2031.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%c3%b3n%20No.%201035%20de%202022.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Lineamiento táctico y operativo de la Estrategia de Gestión integrada para las enfermedades transmitidas por vectores (EGI ETV) a nivel territorial.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/PAI/Lineamiento-Tatico-operativo-egi-Etv.pdf',
    },
    {
      referencia:
        'Organización Panamericana de la Salud, Ministerio de la Protección Social de Colombia, Instituto Nacional de Salud de Colombia. (S.F). Gestión para la vigilancia entomológica y control de la transmisión de dengue.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/gestion-vigilancia-entomologica-dengue.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2021). Poner fin a la desatención para alcanzar los objetivos de desarrollo sostenible: hoja de ruta sobre enfermedades tropicales desatendidas 2021-2030. Organización Mundial de la Salud',
      link:
        'https://www.paho.org/es/documentos/poner-fin-desatencion-para-alcanzar-objetivos-desarrollo-sostenible-hoja-ruta-sobre',
    },
    {
      referencia:
        'Ministerio de Salud y ´Protección Social. (2022). Lineamiento para la gestión y operación de los programas de Enfermedades Transmitidas por Vectores y Zoonosis y otras consideraciones para la ejecución de transferencias nacionales de funcionamiento. Bogotá.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ET/lineamiento-transferencias-etv-resolucion-451-de-2022.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Rocío Sánchez Ruiz ',
          cargo: 'Experto Temático',
          centro:
            'Regional Distrito Capital Centro de Electricidad, Electrónica y Telecomunicaciones. ',
        },
        {
          nombre: 'Miroslava González H. ',
          cargo: 'Diseñador y Evaluador instruccional ',
          centro: 'Regional Distrito Capital Centro de Gestión Industrial ',
        },
        {
          nombre: 'Juan Gilberto Giraldo Córtes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodologa',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Iván Uribe',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: ' Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
