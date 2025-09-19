<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Tipos de sistemas distribuidos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los tipos de sistemas distribuidos permiten comprender cómo se estructuran las diversas arquitecturas que posibilitan la colaboración de múltiples nodos en la ejecución de tareas compartidas. Desde sistemas basados en cliente-servidor, que centralizan la gestión y el control de servicios, hasta modelos peer-to-peer (P2P) que promueven la descentralización, cada tipo de sistema ofrece ventajas específicas, según las necesidades de escalabilidad, disponibilidad y control. Asimismo, se incluyen sistemas basados en middleware, en la nube y aquellos de tiempo real, permitiendo al estudiante identificar las características, aplicaciones y retos de cada enfoque para seleccionar la arquitectura adecuada en la solución de problemas reales en entornos distribuidos (Urbano López, 2015).
    
    .titulo-figura.mb-4
      h5 Figura 3.
      span Tipos de sistemas distribuidos
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/2.svg", data-aos="zoom-in")

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Sistemas distribuidos basados en cliente-servidor
    
    p.mb-5 El modelo cliente-servidor constituye uno de los enfoques arquitectónicos más tradicionales y ampliamente adoptados en la construcción de sistemas distribuidos, al establecer una clara división entre quienes consumen los servicios (clientes) y quienes los proveen (servidores).

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white
            h2.mb-4(data-aos="flip-up") Sistemas distribuidos basados en cliente-servidor
            p.mb-4(data-aos="fade-right") En el PDF <b>Sistemas distribuidos basados en cliente-servidor</b>, se examina detalladamente el funcionamiento, las características y las ventajas de este modelo, incluyendo su capacidad para centralizar el procesamiento, facilitar el mantenimiento y escalar servicios a múltiples usuarios. A través de ejemplos concretos y escenarios prácticos, se demuestra cómo esta arquitectura sustenta desde aplicaciones web hasta servicios bancarios y de correo electrónico, consolidándose como una base esencial para comprender otras formas más complejas de distribución de sistemas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Sistemas distribuidos basados en cliente-servidor.
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/3.png', alt='')
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Sistemas distribuidos basados en peer-to-peer (P2P)
    
    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/4.svg", data-aos="zoom-in")
          .col-lg-9
            .bg-color-1.p-4(data-aos="fade-left").mb-5
              p Los sistemas distribuidos basados en peer-to-peer (P2P) son un modelo de arquitectura que elimina la jerarquía de cliente-servidor, permitiendo que cada nodo de la red actúe simultáneamente como cliente y servidor, compartiendo recursos, datos y servicios de manera directa entre sí (Celaya Luna, 2014).
              p.mb-0 En esta estructura, cada nodo (o “peer”) puede solicitar y proporcionar servicios, generando una red descentralizada donde no existe un punto único de control. Esta descentralización aumenta la robustez del sistema, mejora la disponibilidad y permite escalar eficientemente a medida que se añaden más nodos.
            p Características principales:


        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Descentralización
                p.mb-0 No existe un servidor central que coordine toda la comunicación, reduciendo los cuellos de botella y puntos de fallo únicos.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Escalabilidad natural
                p.mb-0 Al añadir más nodos, se incrementa la capacidad de la red y los recursos disponibles.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Distribución de carga
                p.mb-0 Las tareas de almacenamiento y transmisión se reparten entre los nodos de forma dinámica.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Autonomía de nodos
                p.mb-0 Cada nodo gestiona sus propios recursos y decisiones de participación en la red.

    p.mb-5 Ejemplos prácticos:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-7
              h5 Compartición de archivos
              p Redes como bittorrent permiten que los usuarios compartan partes de un archivo entre sí, reduciendo la dependencia de un servidor central y acelerando la descarga de grandes volúmenes de datos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7
              h5 Criptomonedas
              p Redes como bitcoin y ethereum operan bajo un esquema p2p donde cada nodo mantiene una copia del libro contable (blockchain) y participa en la validación de transacciones, manteniendo la seguridad y consistencia de la red de forma distribuida.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7
              h5 Comunicación en tiempo real
              p Aplicaciones como skype (en sus primeras versiones) emplearon un modelo p2p para permitir la transmisión de voz y video entre usuarios, sin pasar por un servidor central.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7
              h5 Almacenamiento distribuido
              p Sistemas como ipfs (interplanetary file system) distribuyen el almacenamiento de archivos a través de una red p2p, mejorando la disponibilidad de los datos y reduciendo la dependencia de proveedores centralizados.
    
    .row.justify-content-center.align-items-center.bg-color-8
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.p-5
            h2(data-aos="fade-left") Ventajas del modelo P2P
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Alta tolerancia a fallos debido a la ausencia de un único punto de fallo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Mejor aprovechamiento de recursos distribuidos (ancho de banda, almacenamiento y capacidad de procesamiento).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Escalabilidad efectiva sin requerir infraestructura central costosa.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Reducción de costos de operación y mantenimiento.

          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema3/13.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.justify-content-center.align-items-center.bg-color-6.border-top.color-primario
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.p-5.order-2
            h2(data-aos="fade-left") Limitaciones del modelo P2P
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Mayor complejidad en la gestión de la seguridad, autenticación y control de acceso en entornos abiertos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Posibilidad de inconsistencias en la replicación de datos si no se implementan mecanismos de sincronización adecuados.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Difícil gestión de la calidad de servicio debido a la variabilidad de la disponibilidad de nodos.

          .col-lg-5(data-aos="zoom-in").order-1
            img.img-fluid(src='@/assets/curso/tema3/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.justify-content-center.align-items-center.bg-color-11.border-top.color-primario.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.p-5
            h2(data-aos="fade-left") Buenas prácticas en sistemas P2P
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Implementar protocolos de consistencia y replicación para mantener la integridad de la información distribuida.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Aplicar mecanismos de reputación para mitigar comportamientos maliciosos de nodos dentro de la red.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Usar cifrado y autenticación para proteger la comunicación entre nodos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Incorporar algoritmos de descubrimiento de nodos eficientes para mantener conectividad y disponibilidad.

          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema3/15.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Sistemas distribuidos basados en middleware
    
    p.mb-5 Los sistemas distribuidos actuales requieren soluciones que simplifiquen la interacción entre componentes heterogéneos y geográficamente dispersos, garantizando eficiencia, escalabilidad y transparencia.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white.order-2
            h2.mb-4(data-aos="flip-up") Sistemas distribuidos basados en middleware
            p.mb-4(data-aos="fade-right") En el PDF <b>Sistemas distribuidos basados en middleware</b>, se analiza el papel fundamental del middleware como capa intermedia de software que gestiona la comunicación, coordinación y servicios esenciales entre nodos distribuidos. Este documento ofrece una visión clara de sus características, funciones y beneficios, permitiendo comprender cómo tecnologías como CORBA, gRPC o RabbitMQ hacen posible la integración de sistemas complejos, reduciendo la carga del desarrollador y facilitando la creación de aplicaciones robustas, interoperables y escalables.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Sistemas distribuidos basados en middleware.
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/16.png', alt='')
    
    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Sistemas distribuidos en la nube (Cloud Computing)
    
    p.mb-5 Los sistemas distribuidos en la nube (Cloud Computing) representan una evolución significativa en la arquitectura de sistemas, permitiendo que recursos de hardware, software y almacenamiento, sean proporcionados como servicios a través de internet. En esta arquitectura, la nube actúa como una infraestructura distribuida que ofrece escalabilidad, disponibilidad y flexibilidad bajo demanda, eliminando la necesidad de que las organizaciones gestionan directamente sus propios recursos físicos (Urbano López, 2015).

    h2(data-aos="fade-left").mb-5 ¿Qué implica la computación en la nube en sistemas distribuidos?

    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-2.p-4(data-aos="fade-left").mb-4
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema3/18.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 En sistemas distribuidos tradicionales, la gestión de servidores y la coordinación entre nodos era responsabilidad de las organizaciones (Celaya Luna, 2014). Con el cloud computing, la infraestructura subyacente está abstraída y gestionada por proveedores de servicios en la nube, como AWS, Azure o Google Cloud, mientras que los usuarios acceden y operan recursos distribuidos de forma transparente.
            p(data-aos="fade-left") Los sistemas distribuidos en la nube aprovechan granjas de servidores distribuidos globalmente, capaces de manejar picos de carga y garantizar la continuidad del servicio con replicación de datos, balanceo de carga y escalado automático.
            p Características principales:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/19.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Elasticidad
                p.mb-0 Permite escalar recursos automáticamente, según la demanda, aumentando o reduciendo capacidad en tiempo real.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/20.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Pago por uso
                p.mb-0 Los usuarios pagan únicamente por los recursos consumidos, optimizando los costos de operación.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/21.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Alta disponibilidad
                p.mb-0 Gracias a la replicación y distribución geográfica, se garantiza la continuidad del servicio incluso ante fallos en ciertos nodos.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/22.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Accesibilidad global
                p.mb-0 Permite acceder a recursos y aplicaciones distribuidas desde cualquier lugar con conexión a Internet.
    
    p.mb-5 Modelos de servicio en sistemas distribuidos en la nube:

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="IaaS (<em>Infrastructure as a Service</em>)" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 IaaS (<em>Infrastructure as a Service</em>)
            p Proporciona infraestructura de red, almacenamiento y servidores virtuales (ejemplo: Amazon EC2).
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/23.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="PaaS (<em>Platform as a Service</em>)" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 PaaS (<em>Platform as a Service</em>)
            p Ofrece plataformas para desplegar aplicaciones sin gestionar hardware subyacente (ejemplo: Google App Engine).
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/24.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="SaaS (<em>Software as a Service</em>)" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 SaaS (<em>Software as a Service</em>)
            p Entrega software a través de Internet sin necesidad de instalación local (ejemplo: Microsoft 365, Salesforce).
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/25.png', alt='', style="width: 100%;")
    
    p.mb-5 Ejemplos de sistemas distribuidos en la nube:

    .bg-full-width.bg-color-5
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/26.svg" alt="" style="width: 90px")
              h5.text-center Netflix  
              p.mb-0.text-center Utiliza AWS para distribuir contenido de streaming a millones de usuarios globalmente, escalando servidores, según la cantidad de visualizaciones en tiempo real.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/27.svg" alt="" style="width: 90px")
              h5.text-center Dropbox
              p.mb-0.text-center Gestiona almacenamiento de archivos mediante sistemas distribuidos en la nube, que permiten sincronización entre dispositivos y disponibilidad continua.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/28.svg" alt="" style="width: 90px")
              h5.text-center GitHub
              p.mb-0.text-center Como repositorio de control de versiones distribuido, utiliza la nube para facilitar colaboración global con replicación de datos y alta disponibilidad.

    h2(data-aos="fade-left").mb-5 Ventajas de utilizar sistemas distribuidos en la nube

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/29.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-10.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Reducción de costos en infraestructura física y mantenimiento.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Capacidad de escalar servicios y recursos bajo demanda.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Mejora en la confiabilidad gracias a la replicación y balanceo de carga.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Facilidad de implementar arquitecturas complejas como microservicios y DevOps sobre la nube. 
        .bg-color-1.p-4(data-aos="fade-left")
          h5 Ejemplo práctico
          p Una startup que desarrolla una aplicación de monitoreo de salud puede utilizar Google Cloud para alojar su base de datos y microservicios, de forma que ante un aumento de usuarios, la plataforma ajuste automáticamente el número de instancias ejecutándose, garantizando la continuidad y rendimiento de la aplicación sin intervención manual.
          
    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Sistemas distribuidos en tiempo real y embebidos
    
    p.mb-5 Los entornos industriales, médicos, automotrices y aeroespaciales requieren sistemas que no solo funcionen de manera distribuida, sino que además respondan con precisión dentro de márgenes de tiempo críticos.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white.order-2
            h2.mb-4(data-aos="flip-up") Sistemas distribuidos en tiempo real y embebidos
            p.mb-4(data-aos="fade-right") En el PDF <b>Sistemas distribuidos en tiempo real y embebidos</b>, se presentan los fundamentos y aplicaciones de este tipo de arquitecturas especializadas, que combinan procesamiento en tiempo real con operaciones sobre dispositivos de recursos limitados. A través de ejemplos prácticos, se ilustra cómo estos sistemas garantizan sincronización, confiabilidad y eficiencia en escenarios donde la seguridad, la precisión y la inmediatez son esenciales, contribuyendo así al desarrollo de soluciones tecnológicas avanzadas e inteligentes.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_9.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Sistemas distribuidos en tiempo real y embebidos.
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/30.png', alt='')



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/250588 " target="_blank" rel="noopener noreferrer") Villar Cueli, J. & Huércano Ruíz, F. (2024). Implementación e integración de elementos software con tecnologías basadas en componentes. IFCT0609: (1 ed.). IC Editorial. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://devcookies.medium.com/distributed-systems-a-comprehensive-guide-14a9b76d2414  " target="_blank" rel="noopener noreferrer") Dev Cookies. (2024, agosto 14). Distributed Systems: A Comprehensive Guide. Medium. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Gz7b-uIrCHg " target="_blank" rel="noopener noreferrer") KeepCoding - Tech School. [@KeepCoding]. (2017, 6 de noviembre). Diferencias entre sistemas distribuidos y monolíticos.  [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es uno de los objetivos principales de utilizar arquitecturas distribuidas en sistemas de software?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reducir el uso de recursos gráficos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Aumentar la dependencia de un único servidor',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Mejorar la escalabilidad y la disponibilidad del sistema',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Limitar el acceso concurrente de usuarios',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes conceptos está relacionado con la necesidad de mantener la coherencia de datos entre múltiples nodos en sistemas distribuidos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escalabilidad horizontal',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Consistencia',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Latencia de red',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Middleware',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué tipo de sistema distribuido se caracteriza por utilizar una estructura jerárquica en la que un servidor central atiende a múltiples clientes?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Cliente-servidor',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: '<em>Peer-to-peer</em> (P2P)',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Basado en middleware',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'En tiempo real embebido',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué problema puede surgir cuando se aumenta el número de nodos en un sistema distribuido sin una estrategia adecuada de gestión de recursos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reducción de la disponibilidad del sistema',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Problemas de escalabilidad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reducción de la redundancia de datos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Mejora de la consistencia de datos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '5.	¿Cuál de los siguientes tipos de sistemas distribuidos facilita la colaboración descentralizada entre nodos, permitiendo que cada uno actúe como cliente y servidor?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Sistemas cliente-servidor',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Sistemas en tiempo real',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Sistemas <em>peer-to-peer</em> (P2P)',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Sistemas en la nube',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
