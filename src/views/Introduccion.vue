<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8   
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el contexto del desarrollo de software, los sistemas distribuidos representan una base esencial para construir aplicaciones escalables, resilientes y capaces de operar de manera eficiente en entornos interconectados. Esta unidad se centra en brindar al estudiante una comprensión sólida de los principios y estructuras que fundamentan el funcionamiento de sistemas distribuidos, preparando el terreno para su análisis, diseño e implementación en escenarios reales.
        p(data-aos="fade-left") El propósito de esta unidad es que el estudiante adquiera los conceptos fundamentales relacionados con las arquitecturas distribuidas, identificando sus componentes, ventajas y retos, así como los diferentes modelos de comunicación y coordinación que permiten que múltiples sistemas trabajen de forma conjunta para cumplir objetivos comunes. Se destaca la importancia de comprender cómo los sistemas distribuidos permiten el uso compartido de recursos, el procesamiento paralelo y la optimización de tiempos de respuesta, en aplicaciones modernas.
    
    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.bg-color-2.mb-5
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.p-4
                p Un aspecto clave abordado en esta unidad son los problemas de consistencia y escalabilidad, conceptos indispensables para asegurar que un sistema distribuido mantenga la coherencia de los datos entre diferentes nodos, al mismo tiempo que es capaz de adaptarse a incrementos en la carga de trabajo, sin sacrificar su desempeño. Se analizan las implicaciones del teorema CAP, así como las técnicas utilizadas para mantener la consistencia y mejorar la escalabilidad en sistemas reales.
                p.mb-0 Asimismo, se exploran los tipos de sistemas distribuidos, abarcando desde los modelos basados en cliente-servidor, hasta las arquitecturas peer-to-peer y middleware, incluyendo los sistemas distribuidos en la nube y aquellos embebidos en tiempo real.
              .col-lg-3(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/intro/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        
        p Comprender las particularidades de cada tipo de sistema distribuido permitirá al estudiante evaluar sus características, casos de uso y limitaciones en proyectos de ingeniería de software.
        p.mb-5 Esta unidad se estructura en tres ejes temáticos: 

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/4.svg" alt="" style="width: 90px")
              h5.text-center Eje temático 1
              p.mb-0.text-center Se aborda el concepto y los elementos de las arquitecturas distribuidas, con ejemplos de su aplicación en la industria.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/5.svg" alt="" style="width: 90px")
              h5.text-center Eje temático 2
              p.mb-0.text-center Se analizan los problemas de consistencia y escalabilidad, revisando los retos más comunes y las estrategias para enfrentarlos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/6.svg" alt="" style="width: 90px")
              h5.text-center Eje temático 3
              p.mb-0.text-center Se estudian los tipos de sistemas distribuidos, proporcionando al estudiante una visión comparativa que le permitirá identificar la mejor alternativa para cada necesidad de desarrollo.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/7.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 A lo largo de esta unidad, el estudiante participa activamente en el análisis de ejemplos, actividades de reflexión y resolución de casos prácticos, con el fin de consolidar los conceptos fundamentales y desarrollar habilidades que le permitan abordar con seguridad, el diseño y la evaluación de sistemas distribuidos en su formación profesional. Se recomienda que el estudiante cuente con conocimientos básicos en redes y programación, para facilitar la asimilación de los temas y el aprovechamiento del enfoque práctico de esta unidad.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/8.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Con este aprendizaje, se espera que el estudiante fortalezca su capacidad de análisis crítico, tome decisiones informadas en el diseño de soluciones distribuidas y reconozca la relevancia de estos sistemas en la creación de software confiable, escalable y alineado con las demandas actuales de la industria tecnológica.



</template>
