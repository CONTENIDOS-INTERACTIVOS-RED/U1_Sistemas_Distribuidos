export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de sistemas distribuidos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Arquitecturas distribuidas     ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Introducción a las arquitecturas distribuidas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modelos de arquitectura en sistemas distribuidos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Comunicación en arquitecturas distribuidas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Gestión de recursos y sincronización',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Escalabilidad, tolerancia a fallos y seguridad',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Problemas de consistencia y escalabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de consistencia en sistemas distribuidos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelo CAP y sus implicaciones',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Técnicas de manejo de consistencia',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Concepto de escalabilidad',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Estrategias para mejorar la escalabilidad',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de sistemas distribuidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Sistemas distribuidos basados en cliente-servidor',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Sistemas distribuidos basados en peer-to-peer (P2P)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Sistemas distribuidos basados en <em>middleware</em>',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Sistemas distribuidos en la nube (<em>Cloud Computing</em>)',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Sistemas distribuidos en tiempo real y embebidos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
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
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Muñoz Escoí, F. D. (2013). Concurrencia y sistemas distribuidos: ( ed.). Editorial de la Universidad Politécnica de Valencia. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57365 ',
    },
    {
      referencia:
        'Cardador Cabello, A. L. (2015). Desarrollo de aplicaciones web distribuidas (UF1846): ( ed.). IC Editorial.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/44134',
    },
    {
      referencia:
        'Muñoz Escoí, F. D. (2013). Concurrencia y sistemas distribuidos: ( ed.). Editorial de la Universidad Politécnica de Valencia.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57365',
    },
    {
      referencia:
        'Boronat Seguí, F. (2012). El nivel de red en el modelo de interconexión de redes basado en capas: ( ed.). Editorial de la Universidad Politécnica de Valencia.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/54078',
    },
    {
      referencia:
        'Urbano López, M. D. P. (2015). Administración y auditoría de los servicios Web. IFCT0509: ( ed.). IC Editorial.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/45242',
    },
    {
      referencia:
        'Celaya Luna, A. (2014). Cloud: herramientas para trabajar en la nube: ( ed.). Editorial ICB. 6 ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/5604',
    },
  ],
  glosario: [
    {
      termino: 'Cliente-servidor',
      significado:
        'Modelo de arquitectura distribuida donde un servidor central proporciona servicios o recursos a múltiples clientes, que realizan solicitudes para obtener información o procesar datos.',
    },
    {
      termino: 'Consistencia',
      significado:
        'Propiedad de los sistemas distribuidos que asegura que todos los nodos de la red compartan la misma información en un momento determinado, manteniendo coherencia en los datos replicados.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'Capacidad de un sistema distribuido para aumentar su rendimiento y manejar una mayor carga de trabajo al agregar recursos como nodos o servidores, sin afectar negativamente su funcionamiento.',
    },
    {
      termino: 'Integración continua',
      significado:
        'Práctica de desarrollo que implica integrar frecuentemente cambios de código en un repositorio compartido, permitiendo la ejecución automática de pruebas para detectar errores de forma temprana.',
    },
    {
      termino: '<em>Middleware</em>',
      significado:
        'Capa de software que facilita la comunicación y gestión de datos entre aplicaciones distribuidas, permitiendo la interoperabilidad entre diferentes sistemas y simplificando el desarrollo.',
    },
    {
      termino: 'Modelo CAP',
      significado:
        'Teorema que indica que en un sistema distribuido es imposible garantizar simultáneamente consistencia, disponibilidad y tolerancia a particiones, obligando a priorizar dos de estos tres aspectos.',
    },
    {
      termino: '<em>Peer-to-peer</em> (P2P)',
      significado:
        'Modelo de sistema distribuido donde todos los nodos actúan como iguales, compartiendo recursos directamente entre sí sin depender de un servidor central.',
    },
    {
      termino: '<em>Pipeline</em>',
      significado:
        'Flujo de trabajo automatizado en la integración y entrega continua que define etapas como compilación, pruebas y despliegue de una aplicación, mejorando la eficiencia en proyectos de software.',
    },
    {
      termino: 'Réplica',
      significado:
        'Copia de un conjunto de datos mantenida en varios nodos de un sistema distribuido, utilizada para mejorar la disponibilidad y la tolerancia a fallos de la información.',
    },
    {
      termino: 'Sincronización',
      significado:
        'Proceso mediante el cual se coordina la ejecución de operaciones entre nodos de un sistema distribuido, asegurando la consistencia y el orden en el acceso a recursos compartidos.',
    },
    {
      termino: 'Sistemas embebidos',
      significado:
        'Dispositivos de cómputo integrados en equipos físicos específicos, diseñados para realizar tareas particulares, que pueden participar en sistemas distribuidos para controlar procesos en tiempo real.',
    },
    {
      termino: 'Tolerancia a fallos',
      significado:
        'Capacidad de un sistema distribuido para continuar funcionando correctamente incluso cuando algunos de sus componentes presentan errores o fallas.',
    },
  ],
}
