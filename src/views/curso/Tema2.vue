<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Problemas de consistencia y escalabilidad'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En el estudio de sistemas distribuidos, los problemas de consistencia y escalabilidad representan retos claves que determinan la calidad y confiabilidad de las aplicaciones. La consistencia se refiere a la necesidad de mantener datos coherentes entre múltiples nodos que operan de forma simultánea, mientras que la escalabilidad se centra en la capacidad del sistema para adaptarse al aumento de usuarios y cargas de trabajo sin degradar su rendimiento. 
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Comprender cómo estos problemas impactan el diseño y funcionamiento de los sistemas distribuidos, permite al estudiante reconocer la importancia de implementar estrategias adecuadas que equilibren el rendimiento, la disponibilidad y la integridad de los datos, asegurando que las soluciones tecnológicas respondan de manera efectiva, a las demandas de crecimiento y uso real (Muñoz Escoí, 2013).

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Concepto de consistencia en sistemas distribuidos
    
    p.mb-5 La consistencia es un principio esencial en los sistemas distribuidos, ya que garantiza que los datos replicados entre múltiples nodos mantengan coherencia y precisión, incluso ante actualizaciones simultáneas o fallos del sistema.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white
            h2.mb-4(data-aos="flip-up") Concepto de consistencia en sistemas distribuidos 
            p.mb-4(data-aos="fade-right") En el PDF <b>Concepto de consistencia en sistemas distribuidos</b>, se abordan los distintos niveles de consistencia, su papel dentro del teorema CAP y los retos técnicos asociados a su mantenimiento. A través de ejemplos prácticos y estrategias como el uso de protocolos de consenso y sincronización, se ofrece una comprensión sólida sobre cómo lograr coherencia de datos en entornos distribuidos complejos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Concepto de consistencia en sistemas distribuidos .
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Modelo CAP y sus implicaciones
    
    p.mb-5 El equilibrio entre consistencia, disponibilidad y tolerancia a fallos representa uno de los mayores desafíos en el diseño de sistemas distribuidos.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white.order-2
            h2.mb-4(data-aos="flip-up") Modelo CAP y sus implicaciones 
            p.mb-4(data-aos="fade-right") En el PDF <b>Modelo CAP y sus implicaciones</b>, se analiza este principio fundamental propuesto por Eric Brewer, que establece que un sistema distribuido no puede garantizar simultáneamente las tres propiedades. A través de una explicación clara de sus componentes, ejemplos prácticos y decisiones de diseño asociadas, se brinda al lector una comprensión profunda de cómo el Modelo CAP orienta la construcción de sistemas robustos y adaptables frente a las limitaciones inherentes de la comunicación en red.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Modelo CAP y sus implicaciones .
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='')
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Técnicas de manejo de consistencia
    
    p.mb-5 En sistemas distribuidos, garantizar que todos los nodos compartan un estado coherente de la información es un desafío constante debido a la latencia de red y posibles fallos. Para gestionar este reto, se implementan diversas técnicas de manejo de consistencia, ajustadas a las necesidades de cada aplicación, según sus requerimientos de rendimiento, disponibilidad y exactitud de datos.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Consistencia fuerte")
            p En la consistencia fuerte, todos los nodos del sistema reflejan inmediatamente las actualizaciones realizadas en cualquier nodo antes de confirmar la operación.
            p <b>Ejemplo</b>. En un sistema de transacciones bancarias, al realizar una transferencia, el saldo actualizado debe reflejarse de inmediato en todos los nodos, garantizando que no se realicen operaciones sobre un saldo desactualizado.
            h5 Técnicas aplicadas:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Bloqueo distribuido. Para evitar accesos simultáneos inconsistentes.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Protocolos de consenso (Raft, Paxos). Para garantizar que todos los nodos acuerden un mismo valor antes de confirmar cambios.
          .div(titulo="Consistencia eventual")
            p Este enfoque permite que los nodos no se sincronicen de inmediato, pero asegura que con el tiempo todos convergen al mismo estado de datos.
            p <b>Ejemplo</b>. En sistemas de redes sociales, un “me gusta” puede no reflejarse de inmediato en todos los servidores, pero tras unos segundos o minutos, todos mostrarán el mismo número actualizado.
            h5 Técnicas aplicadas:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 o	Replicación asíncrona. Los cambios se propagan a otros nodos de forma progresiva.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 o	Uso de vectores de versión. Permiten gestionar el orden de las actualizaciones y resolver conflictos cuando ocurren cambios simultáneos.
            
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Consistencia causal")
            p Este modelo garantiza que las operaciones relacionadas causalmente se observen en el mismo orden en todos los nodos, mientras que las operaciones independientes pueden ser vistas en distinto orden (Boronat Seguí, 2012).
            p <b>Ejemplo</b>. Si un usuario publica un comentario en un post y luego lo edita, todos los nodos deben mostrar primero el comentario antes de mostrar la edición, asegurando la relación causal.
            h5 Técnicas aplicadas:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Relación de dependencias. Identificar eventos relacionados para mantener su orden.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Protocolos de replicación causal. Que aseguran la preservación de dependencias entre eventos durante la replicación.
          .div(titulo="Uso de quorum")
            p El enfoque de quorum se emplea para lograr consistencia controlada entre nodos mediante el uso de lecturas y escrituras en un subconjunto de réplicas, de modo que la intersección de estos subconjuntos garantice la coherencia (Boronat Seguí, 2012).
            p <b>Ejemplo</b>. En Cassandra, una operación de escritura puede requerir confirmación en al menos 3 de 5 nodos, mientras que una lectura consultará al menos 3 nodos. Si el número de lecturas y escrituras consultadas se superpone, se asegura consistencia.

    h2(data-aos="fade-left") Replicación y control de conflictos
    p El manejo de consistencia se complementa con técnicas de resolución de conflictos, necesarias cuando ocurren actualizaciones simultáneas en nodos distintos.
    p.mb-5 Ejemplo. En sistemas como Amazon DynamoDB, se usan estrategias de last write wins (LWW), donde el último cambio, según la marca de tiempo es el que se conserva, o se permite la reconciliación manual por la aplicación en caso de conflictos complejos.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              p.mb-0 Las técnicas de manejo de consistencia en sistemas distribuidos permiten equilibrar la disponibilidad y la coherencia de datos, según las necesidades de la aplicación, utilizando modelos de consistencia fuerte, eventual y causal, además de mecanismos de quorum, replicación y resolución de conflictos. Cada técnica se implementa considerando el Modelo CAP, asegurando que los sistemas distribuidos mantengan la integridad de los datos mientras se adaptan a las realidades de la red y de los requerimientos de negocio.

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Concepto de escalabilidad
    
    p.mb-5 La capacidad de un sistema para crecer sin perder eficiencia ni disponibilidad es esencial en entornos distribuidos donde la demanda puede escalar rápidamente.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white.order-2
            h2.mb-4(data-aos="flip-up") Concepto de escalabilidad 
            p.mb-4(data-aos="fade-right") En el PDF <b>Concepto de escalabilidad</b>, se aborda este principio clave en el diseño de arquitecturas distribuidas, explorando las estrategias verticales y horizontales que permiten adaptar los sistemas al aumento de usuarios, datos o transacciones. A través de ejemplos reales y buenas prácticas, el documento proporciona una comprensión integral de cómo diseñar soluciones escalables que mantengan la calidad del servicio ante escenarios de alta demanda, asegurando así el éxito operativo y la sostenibilidad tecnológica.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Concepto de escalabilidad .
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/9.png', alt='')

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Estrategias para mejorar la escalabilidad
    
    p.mb-5 La mejora de la escalabilidad en sistemas distribuidos requiere la aplicación de estrategias que permitan atender un mayor volumen de solicitudes, usuarios o procesamiento de datos sin sacrificar el rendimiento, la disponibilidad ni la eficiencia del sistema. Para ello, se aplican métodos de diseño, implementación y gestión que optimizan el crecimiento de la infraestructura conforme a las necesidades del negocio o del proyecto.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Descomposición en microservicios")
            p Dividir una aplicación monolítica en microservicios independientes, es una estrategia esencial para mejorar la escalabilidad. Cada microservicio se puede desplegar, actualizar y escalar de manera independiente, según su carga.
            p <b>Ejemplo</b>. En una plataforma de compras en línea, el servicio de pagos y el servicio de inventario pueden escalar de manera separada si presentan diferentes niveles de demanda.
            h5 Técnicas aplicadas:
          .div(titulo="Balanceo de carga")
            p El balanceo de carga distribuye las solicitudes entrantes entre varios nodos del sistema, evitando que un servidor se sature mientras otros permanecen inactivos. Además, permite agregar o quitar nodos, según las necesidades de tráfico.
            p <b>Ejemplo</b>. Un sitio de educación virtual utiliza un balanceador de carga para distribuir las conexiones de estudiantes entre varios servidores de aplicación, evitando caídas durante periodos de alta demanda como inscripciones o evaluaciones.
          .div(titulo="Caché distribuida")
            p Utilizar sistemas de caché distribuido como Redis o Memcached reduce el acceso frecuente a bases de datos, permitiendo recuperar datos con mayor rapidez y disminuyendo la carga de procesamiento en las instancias de almacenamiento.
            p <b>Ejemplo</b>. Una red social almacena en caché los perfiles más consultados para evitar consultas repetidas a la base de datos central cada vez que un usuario accede a la información de un perfil popular.
            
            
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Escalado horizontal y vertical")
            p El escalado horizontal agrega más nodos al sistema para distribuir la carga, mientras que el escalado vertical incrementa los recursos de hardware en un nodo específico (Muñoz Escoí, 2013).
            p <b>Ejemplo</b>. Un servicio de streaming de música puede aumentar el número de instancias de servidores de transmisión en distintas regiones durante picos de tráfico, implementando un escalado horizontal en la nube.
            
          .div(titulo="Uso de bases de datos distribuidas y particionamiento")
            p Las bases de datos distribuidas, permiten almacenar y procesar datos en múltiples nodos, mientras que el particionamiento (sharding) divide los datos en fragmentos gestionables, permitiendo consultas en paralelo y reduciendo los tiempos de respuesta.
            p <b>Ejemplo</b>. Una aplicación financiera distribuye las transacciones por regiones geográficas para procesarlas en bases de datos diferentes, mejorando la capacidad de respuesta ante un crecimiento en el número de operaciones.
          .div(titulo="Automatización con infraestructura como código (IaC)")
            p La automatización de la creación y gestión de recursos mediante IaC (como Terraform o AWS CloudFormation) facilita el escalado automático de la infraestructura, según métricas de uso, garantizando eficiencia y reducción de tiempos de configuración manual.
            p <b>Ejemplo</b>. Un sistema de comercio electrónico configura automáticamente nuevas instancias de servidores cuando el uso de CPU supera un umbral definido.
    
    .row.justify-content-center.align-items-center.bg-color-6.bg-full-width
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.p-5
            p Las estrategias para mejorar la escalabilidad en sistemas distribuidos incluyen:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Descomposición en microservicios.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Balanceo de carga.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Uso de caché distribuida.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Escalado horizontal y vertical.
              i.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Bases de datos distribuidas y particionamiento.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Automatización con infraestructura como código.

          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/12.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estas prácticas permiten que un sistema distribuido responda eficientemente a la demanda variable, manteniendo tiempos de respuesta estables, reduciendo costos operativos y garantizando la disponibilidad del servicio para los usuarios.




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Distributed%20Systems.%20Principles%20and%20Paradigms.pdf " target="_blank" rel="noopener noreferrer") Tanenbaum, A. S., & van Steen, M. (2018). Distributed Systems: Principles and Paradigms (3ª ed.).
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://www.designgurus.io/blog/consistency-patterns-distributed-systems " target="_blank" rel="noopener noreferrer") DesignGurus. (Junio 7 del 2025). Consistency patterns in distributed systems: A complete guide. DesignGurus. 




            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=B_Hp0HEht1Y " target="_blank" rel="noopener noreferrer") Software Guru. [@softwareguru]. (2023, 11 de septiembre). Talks 2 Code 2023 - Arquitectura de Software basada en Microservicios. [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
