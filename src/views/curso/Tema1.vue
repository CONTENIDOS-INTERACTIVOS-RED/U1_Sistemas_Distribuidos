<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Arquitecturas distribuidas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/1.svg', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Las arquitecturas distribuidas representan el diseño estructural que permite que múltiples componentes de software y hardware, trabajen de manera conjunta en diferentes nodos de una red, colaborando para cumplir objetivos comunes de procesamiento y almacenamiento. Estas arquitecturas se caracterizan por su capacidad de escalabilidad, tolerancia a fallos y aprovechamiento de recursos distribuidos, permitiendo que los sistemas funcionen de forma coordinada, mientras mantienen la independencia de cada componente. En esencia, son la base que soporta el funcionamiento de sistemas modernos como aplicaciones web, servicios en la nube y plataformas de procesamiento de datos, facilitando la eficiencia y la disponibilidad en entornos de trabajo distribuidos (Muñoz Escoí, 2013).

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Introducción a las arquitecturas distribuidas
    
    p.mb-5 La comprensión de las arquitecturas distribuidas es esencial para el diseño de sistemas escalables, resilientes y eficientes en contextos tecnológicos actuales.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2.text-white
            h2.mb-4(data-aos="flip-up") Introducción a las arquitecturas distribuidas 
            p.mb-4(data-aos="fade-right") En el PDF <b>Introducción a las arquitecturas distribuidas</b>, se presenta una visión general de los modelos de diseño en los que múltiples componentes interactúan a través de redes para ejecutar funciones conjuntas, garantizando transparencia para el usuario final. Este recurso permite explorar los objetivos, ventajas y casos de uso más comunes de estas arquitecturas, facilitando su aplicación en entornos reales como servicios financieros, plataformas educativas y sistemas en la nube.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Introducción a las arquitecturas distribuidas .
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Modelos de arquitectura en sistemas distribuidos
    
    p Los modelos de arquitectura en sistemas distribuidos, son esquemas que determinan cómo interactúan los diferentes componentes de una aplicación distribuida, tanto en términos de funciones como de ubicación física. Estos modelos no solo definen la disposición de los nodos, sino también los protocolos de comunicación, el reparto de responsabilidades, y los mecanismos de tolerancia a fallos. La elección del modelo adecuado influye directamente en la escalabilidad, mantenibilidad, disponibilidad y rendimiento del sistema (Cardador Cabello, 2015).

    p.mb-5 A continuación, se describen los modelos más representativos, junto con sus características y ejemplos de uso:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Arquitectura Cliente-Servidor")
            p Es el modelo más tradicional. Se basa en una relación directa entre un cliente, que solicita servicios, y un servidor, que los provee. El cliente es responsable de la interfaz de usuario y de enviar solicitudes; el servidor responde procesando y devolviendo los resultados.
            h5 Características
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Centralización del procesamiento en el servidor.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Fácil de implementar.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Escasa escalabilidad horizontal sin mecanismos adicionales (como balanceadores de carga).
            p <b>Ejemplo</b>. Un sistema de correo electrónico como Outlook o Gmail: el cliente envía una solicitud para consultar los mensajes y el servidor devuelve los datos almacenados en su base de datos.
          .div(titulo="Arquitectura de Tres Capas")
            p Separa la aplicación en tres niveles funcionales:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Capa de presentación: interfaz con el usuario.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Capa lógica o de negocio: reglas y operaciones del sistema.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Capa de datos: gestión de información persistente.
            h5 Características
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Favorece la separación de responsabilidades.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Mejora la reutilización y el mantenimiento del sistema.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Permite escalabilidad por capas.
            p <b>Ejemplo</b>. En un sistema de gestión académica, la interfaz web se encarga de la interacción con el usuario (presentación), los cálculos de promedio o validaciones se ejecutan en el backend (lógica), y los datos de estudiantes se guardan en una base de datos (datos) (Cardador Cabello, 2015).
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Arquitectura basada en Microservicios")
            p Divide la aplicación en múltiples servicios pequeños, autónomos y especializados. Cada microservicio puede desarrollarse, desplegarse y escalar de manera independiente. La comunicación entre ellos se realiza generalmente mediante APIs REST o mensajería asincrónica (como Kafka o RabbitMQ).
            h5 Características
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Alta escalabilidad y resiliencia.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Despliegue independiente por servicio.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Favorece equipos de desarrollo distribuidos y autónomos.
            p <b>Ejemplo</b>. Una plataforma de e-commerce como Amazon tiene microservicios independientes para gestión de inventario, procesamiento de pagos, recomendaciones personalizadas y atención al cliente.
          .div(titulo="Arquitectura Peer-to-Peer (P2P)")
            p En este modelo, no hay servidores centrales. Todos los nodos actúan como pares con igual jerarquía, compartiendo recursos y colaborando directamente entre sí (Muñoz Escoí, 2013).
            h5 Características
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Distribución equitativa de recursos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Alta tolerancia a fallos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Difícil de controlar o gestionar centralizadamente.
            p <b>Ejemplo</b>. BitTorrent es un ejemplo claro: los usuarios comparten fragmentos de archivos entre sí, permitiendo descargas más rápidas y robustas.
          .div(titulo="Arquitectura basada en eventos")
            p Los componentes del sistema se comunican a través del envío y recepción de eventos. Esto promueve un acoplamiento débil entre componentes y una mayor capacidad de reacción ante cambios del sistema (Muñoz Escoí, 2013).
            h5 Características
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Asincronía en la comunicación.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Escalabilidad y flexibilidad.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Ideal para entornos donde los procesos se disparan por acciones específicas.
            p <b>Ejemplo</b>. En una aplicación de logística, cuando se registra la entrega de un paquete, se emite un evento que actualiza el estado en el sistema, genera una notificación al cliente y activa el proceso de facturación.


    .titulo-figura.mb-4
      h5 Tabla 1.
      span Comparación general
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-4.text-white Modelo
            th.bg-color-4.text-white Escalabilidad
            th.bg-color-4.text-white Acoplamiento
            th.bg-color-4.text-white Ejemplo típico
        tbody.bg-color-8
          tr
            td Cliente-Servidor
            td Baja
            td Alto
            td Aplicaciones web tradicionales
          tr
            td Tres Capas
            td Media
            td Medio
            td ERP empresariales
          tr
            td Microservicios
            td Alta
            td Bajo
            td Plataformas de comercio en línea
          tr
            td Peer-to-Peer
            td Alta
            td Bajo
            td Redes de compartición de archivos
          tr
            td Basado en Eventos
            td Alta
            td Bajo
            td Aplicaciones en tiempo real

    h2(data-aos="fade-left") Ventajas de utilizar modelos de arquitectura


    .bg-full-width.row.justify-content-center.align-items-center.bg-color-2.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.p-5
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Permiten mayor escalabilidad y resiliencia.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Facilitan el mantenimiento y actualización del sistema.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Mejoran la distribución de la carga de trabajo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Favorecen la reutilización de componentes en otros proyectos.
            p.mb-0 Cada modelo se selecciona, de acuerdo con las necesidades de la aplicación y los recursos disponibles, siendo un conocimiento clave para los futuros ingenieros de software que diseñarán sistemas distribuidos robustos y eficientes.
          .col-lg-3(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/5.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .titulo-figura.mb-4
      h5 Figura 1.
      span Modelos de arquitectura
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/6.svg", data-aos="zoom-in")

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Comunicación en arquitecturas distribuidas
    
    p La comunicación en sistemas distribuidos es un componente esencial que permite la interacción fluida entre los diferentes nodos que conforman una arquitectura distribuida.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2.text-white
            h2.mb-4(data-aos="flip-up") Comunicación en arquitecturas distribuidas 
            p.mb-4(data-aos="fade-right") En el PDF <b>Comunicación en arquitecturas distribuidas</b>, se analizan los mecanismos, modelos, protocolos y retos asociados a la transmisión de información entre componentes dispersos, asegurando la coherencia y disponibilidad de los servicios. Este contenido proporciona al lector una comprensión integral sobre cómo se coordinan las acciones en entornos distribuidos mediante estrategias síncronas y asíncronas, garantizando la eficiencia del sistema ante desafíos como la latencia, la seguridad y la consistencia de los datos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Comunicación en arquitecturas distribuidas .
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/7.png', alt='')
    
    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Gestión de recursos y sincronización
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La gestión de recursos y sincronización en sistemas distribuidos, se refiere al conjunto de estrategias y mecanismos que permiten coordinar el acceso, uso y liberación de recursos compartidos (como archivos, memoria, bases de datos y servicios) entre múltiples procesos que operan de forma concurrente en distintos nodos. Esta gestión es vital para mantener la coherencia, el rendimiento y la integridad de los sistemas distribuidos, evitando condiciones de carrera y bloqueos (Cardador Cabello, 2015).
    
        .bg-color-10.p-4(data-aos="fade-left")
          p.mb-0 <b>Importancia de la gestión de recursos</b>: en un sistema distribuido, diferentes nodos o procesos pueden necesitar el mismo recurso al mismo tiempo, por lo que se requiere una política clara de acceso concurrente para evitar conflictos. 
        .bg-color-1.p-4(data-aos="fade-left")
          p Sin una gestión adecuada:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Pueden surgir inconsistencias en los datos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Se generan bloqueos mutuos (deadlocks).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Se desperdician recursos por falta de liberación adecuada.

    p Por esta razón, la gestión de recursos asegura que los componentes distribuidos utilicen los recursos de manera eficiente y ordenada.
    p.mb-5 Tipos de recursos en sistemas distribuidos:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/9.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="81.5%" y="14%" numero="+")
                h5 Recursos físicos
                p CPU, memoria, dispositivos de almacenamiento.
    
              .bg-color-white.box-shadow.p-3(x="2.8%" y="21%" numero="+")
                h5 Recursos lógicos
                p Archivos, registros en bases de datos, sockets de red.
    
              .bg-color-white.box-shadow.p-3(x="97.3%" y="54%" numero="+")
                h5 Servicios distribuidos
                p APIs, microservicios y colas de mensajes.
    
    p.mb-5 Mecanismos de sincronización:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7
              h5 Exclusión mutua
              p Garantiza que un recurso solo sea utilizado por un proceso a la vez para evitar condiciones de carrera (Cardador Cabello, 2015).
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. Un archivo que solo puede ser modificado por un proceso a la vez para evitar pérdida de datos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7
              h5 Semáforos y monitores
              p Estructuras de sincronización que permiten controlar el acceso a recursos compartidos mediante señales y bloqueos.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. Un semáforo que limita a dos el número de procesos que pueden acceder simultáneamente a un recurso de red.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7
              h5 Relojes lógicos y vectoriales
              p Permiten mantener el orden de eventos en un sistema distribuido, facilitando la coordinación y la consistencia de las operaciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7
              h5 Algoritmos de consenso
              p Se emplean para acordar decisiones en sistemas distribuidos, como el algoritmo Paxos y Raft.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. Acordar qué nodo tiene acceso prioritario a un recurso de base de datos compartido.
    
    p.mb-5 Ejemplos prácticos:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/14.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Sistema de archivos distribuidos (HDFS)")
            p Gestiona múltiples nodos de almacenamiento para distribuir archivos de gran tamaño. Los bloqueos de acceso y los mecanismos de sincronización aseguran que no se produzcan conflictos al escribir datos.
    
          .div(titulo="Bases de datos distribuidas (Cassandra)")
            p  Implementa mecanismos de sincronización para mantener la consistencia entre réplicas en diferentes nodos, evitando conflictos de escritura concurrente.
    
          .div(titulo="Sistemas de impresión en red")
            p Cuando varios usuarios envían trabajos de impresión a una impresora compartida, se gestionan las colas de impresión y se sincroniza el acceso para imprimir de forma ordenada.
    
          .div(titulo="Servicios en la nube")
            p En entornos de contenedores orquestados con Kubernetes, se gestionan recursos como CPU y memoria para cada contenedor, evitando sobreasignación y asegurando la disponibilidad de recursos.
    
    .bg-full-width.row.justify-content-center.align-items-center.bg-color-3.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.p-5.order-lg-2
            p Retos en la gestión y sincronización:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Latencia en la comunicación</b>. Puede causar inconsistencias si no se controlan adecuadamente los accesos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Escalabilidad</b>. A medida que crece el número de nodos, la gestión de recursos se vuelve más compleja.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Bloqueos mutuos</b>. Situaciones donde dos o más procesos esperan indefinidamente recursos que se bloquean mutuamente.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Consistencia vs. Disponibilidad</b>. Mantener consistencia total puede afectar la disponibilidad del sistema en escenarios de alta concurrencia.
            p.mb-0 Estos retos se abordan utilizando algoritmos de sincronización eficientes, técnicas de recuperación de bloqueos y replicación controlada.
          .col-lg-3(data-aos="zoom-in").order-lg-1
            img.img-fluid(src='@/assets/curso/tema1/15.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .titulo-figura.mb-4
      h5 Figura 2.
      span Relojes lógicos 
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/16.svg", data-aos="zoom-in")
              
    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Escalabilidad, tolerancia a fallos y seguridad
    
    p La escalabilidad, la tolerancia a fallos y la seguridad representan aspectos críticos en la arquitectura de sistemas distribuidos, ya que determinan su capacidad para crecer, mantenerse operativos ante errores y proteger sus recursos.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white
            h2.mb-4(data-aos="flip-up") Escalabilidad, tolerancia a fallos y seguridad 
            p.mb-4(data-aos="fade-right") En el PDF <b>Escalabilidad, tolerancia a fallos y seguridad</b>, se analizan estos tres pilares desde una perspectiva técnica y práctica, ilustrando cómo se integran en el diseño y operación de soluciones distribuidas. A través de casos reales y estrategias implementadas en entornos como la computación en la nube y los sistemas bancarios en línea, se ofrecen herramientas clave para construir sistemas robustos, resilientes y seguros.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Escalabilidad, tolerancia a fallos y seguridad .
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/17.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/277393 " target="_blank" rel="noopener noreferrer") Coronado García, B. (2024). Administración y auditoría de los servicios web. UF1272: (1 ed.). Editorial Tutor Formación. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.numberanalytics.com/blog/distributed-architectures-101 " target="_blank" rel="noopener noreferrer") Number Analytics. (Junio 10 del 2025). Distributed architectures 101. Number Analytics. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=YYwMAa7AreI" target="_blank" rel="noopener noreferrer") Software Guru. [@softwareguru]. (2017, 6 de noviembre). Arquitectura de proyectos con infraestructura distribuida y tolerante a fallas.  [Vídeo]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
