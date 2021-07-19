<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 La definición de contenido digital es una oportunidad para las organizaciones porque implica una constante identificación de las necesidades de los clientes en el marco de su portafolio. Saber qué necesitan los clientes contribuye a mantener actualizado el plan de <i>marketing</i> .
      br
      br
      | Por lo anterior, el presente componente formativo surge ante la necesidad de la inexistencia de contenido digital en las organizaciones acorde a los intereses de información que desea un cliente para poder efectuar una compra. Para continuar, le sugerimos observar el siguiente recurso educativo para entender las condiciones y el contexto de aprendizaje. Bienvenido.

    .row.justify-content-center
      .col-md-5.align-self-center
        figure
          img(src="@/assets/curso/intro-imagen1.svg", alt="")
        .rectangle-title.rounded.color-secundario.px-4.py-3.mb-2.text-white
          | ¿Cómo iniciar este proceso de aprendizaje?
        .rectangle-text-pointed.p-4
          | Para comenzar es importante que usted comprenda que todas las marcas desean generar recordación en sus clientes y ante esta necesidad es importante el diseño de contenido digital a través de elementos gráficos y audiovisuales como solución, pero para este propósito es importante que usted identifique los elementos de la comunicación ¿cuáles son?, para más información explora el contenido del presente momento de aprendizaje.
        .vl(style="height: 50px")
    .row.justify-content-center
      .col-10.align-self-center
        .row.gx-0.mb-5
          .col-4
            hr.hl.middle-left
            .vl(style="height: 50px")
            figure.mb-3
              img(style="max-height: 140px;", src="@/assets/curso/intro-imagen2.svg", alt="")
            .rectangle-title.px-3.py-2.color-acento-botones-20.mx-3.mb-2
              | ¿Qué elementos tengo para
              br
              | aprender?
            p.mx-3 Usted tiene a su disposición un conjunto de recursos de aprendizaje para desarrollar conocimientos, habilidades y actitudes. Entre ellos: infografía, videos, textos de los autores del componentes y otros.

          .col-4
            hr.hl
            .vl(style="height: 50px")
            figure.mb-3
              img(style="max-height: 140px;", src="@/assets/curso/intro-imagen3.svg", alt="")
            .rectangle-title.px-3.py-2.color-acento-contenido-20.mx-3.mb-2
              | ¿Cuál es el propósito de este
              br
              | momento de aprendizaje?
            p.mx-3 Una vez finalice este componente de formación se espera que usted tenga la capacidad adaptar piezas comunicacionales digitales, de acuerdo a la estrategia de mercadeo.

          .col-4
            hr.hl.middle-right
            .vl(style="height: 50px")
            figure.mb-3
              img(style="max-height: 140px;", src="@/assets/curso/intro-imagen4.svg", alt="")
            .rectangle-title.px-3.py-2.color-secundario-20.mx-3.mb-2
              | ¿Cómo finalizar este
              br
              | componente de formación?
            p.mx-3 Para culminarlo debe recorrer la ruta de aprendizaje que se ha creado a partir de contenido temático y las actividades de aprendizaje.

        .cajon.color-primario.p-4.mb-4
          .h5 Recuerde
          .row
            .col-md-8
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | Mantener una disciplina de estudio de acuerdo a los tiempos que tiene para este componente de formación.
                li
                  i.lista-ul__vineta
                  | Participar de los espacios de interacción del programa. Uno de ellos son los foros.
                li
                  i.lista-ul__vineta
                  | Si tiene dudas con respecto a su proceso no dudes en escribirle un correo a su instructor.
              p.mb-4 ¿Qué esperar para iniciar? Observe el siguiente video:
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=R7kJ6Ro_XBk" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p
                    strong Cómo Crear CONTENIDO para las REDES SOCIALES
                    | . Aprende a Crear Contenidos de Valor.
            .col-md-4
              figure
                img(src="@/assets/curso/intro-imagen5.svg", alt="")
        p.mb-0 Luego de reconocer el punto de partida de este proceso de aprendizaje digital, es oportuno que comience con la apropiación de la información para que pueda desarrollar actividades de aprendizaje que lo llevarán a desarrollar conocimientos, habilidades y actitudes.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
