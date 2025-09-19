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
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
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
    
    .row.justify-content-center.align-items-center.bg-color-11.border-top.color-primario
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.p-5
            h2(data-aos="fade-left") Buenas prácticas en sistemas P2P
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 ●	Implementar protocolos de consistencia y replicación para mantener la integridad de la información distribuida.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 ●	Aplicar mecanismos de reputación para mitigar comportamientos maliciosos de nodos dentro de la red.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 ●	Usar cifrado y autenticación para proteger la comunicación entre nodos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 ●	Incorporar algoritmos de descubrimiento de nodos eficientes para mantener conectividad y disponibilidad.

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
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
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
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

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
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
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
