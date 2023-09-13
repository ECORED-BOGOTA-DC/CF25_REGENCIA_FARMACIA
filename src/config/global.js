export default {
  global: {
    componenteFormativo:
      'Acciones de mejora del proceso de selección y adquisición',
    descripcionCurso:
      'Se abordan conocimientos para seleccionar proveedores de acuerdo con las políticas de aprovisionamiento y normativa vigente, con miras a la implementación de acciones de mejora con hallazgos evidenciados y el sistema integrado gestión de la calidad de los procesos selección y adquisición de medicamentos y dispositivos médicos, y que los aprendices reconozcan fallas que pueden ocurrir para prevenirlas y/o eliminarlas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        //clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        //imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        //clases: ['banner-principal-decorativo-2'],
        //imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Sistema Integrado de Gestión (SIG)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Estándares de calidad en los procesos de selección y adquisición de medicamentos y dispositivos médicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Habilitación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Requisitos para la selección y adquisición de medicamentos y dispositivos médicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Control de documentos y registros',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Indicadores de gestión',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planes de mejora',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/331502_CF25_DU.pdf',
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
      tema: 'Indicadores de gestión',
      referencia:
        'González, F. (s. f.). <i>4 indicadores herramientas para la calidad.</i>',
      tipo: 'Página Web',
      link: 'https://es.calameo.com/books/0012362347d6b280a65c9',
    },
  ],
  glosario: [
    {
      termino: 'Congruentes',
      significado:
        'Conveniencia, coherencia o relación lógica que se establece entre distintas cosas.',
    },
    {
      termino: 'Cuantitativa',
      significado:
        'Adjetivo que refiere a la naturaleza numérica de datos, métodos, investigaciones y / o resultados.',
    },
    {
      termino: 'CUM',
      significado: ' Código Único de Medicamentos.',
    },
    {
      termino: 'EAPB',
      significado: ' Empresas Administradoras de Planes de Beneficios.',
    },
    {
      termino: 'Extraordinarias',
      significado: 'Fuera del orden o regla natural o común.',
    },
    {
      termino: 'Habilitación',
      significado:
        'Refiere a la capacitación o adecuación para hacer algo o lograr alguna cuestión.',
    },
    {
      termino: 'Invima',
      significado:
        ' Instituto Nacional de Vigilancia de Medicamentos y Alimentos.',
    },
    {
      termino: 'Patrimonio',
      significado: 'Conjunto de los bienes y derechos de una persona.',
    },
    {
      termino: 'Restringido',
      significado: 'Que tiene limitado o reducido el paso de personas o cosas.',
    },
    {
      termino: 'SGC',
      significado: ' Sistema de Gestión de la Calidad.',
    },
    {
      termino: 'SIG',
      significado: ' Sistema Integrado de Gestión.',
    },
    {
      termino: 'Suficiencia',
      significado:
        'Término que puede usarse para hacer mención a una habilidad, un talento o una capacidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'CTMA Consultores. (2018). <i>¿Qué son los sistemas de gestión integrados y por qué los necesitas?</i>',
      link: 'https://ctmaconsultores.com/sistemas-gestion-integrados/',
    },
    {
      referencia:
        'González, F. (s. f.). <i>4 indicadores herramientas para la calidad.</i>',
      link: 'https://es.calameo.com/books/0012362347d6b280a65c9',
    },
    {
      referencia:
        'Ministerio de Protección Social. (2007). Resolución 1403. Por la cual se determina el modelo de gestión del servicio farmacéutico, se adopta el manual de condiciones esenciales y procedimientos de dicho servicio y se dictan otras disposiciones.  ',
      link:
        'https://www.invima.gov.co/documents/20143/453029/Resoluci%C3%B3n+1403+de+2007.pdf/6b2e1ce1-bb34-e17f-03ef-34e35c126949',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Decreto 780. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricía Aristizábal Gutiérres',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Ayala Pardo',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo:
            'Diseñadora Instruccional – Revisora Metodológica y Pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Revisión y corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzáte Suárez',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suárez Eljure',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisua',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validadora de recursos educativos',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validadora de recursos educativos',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
