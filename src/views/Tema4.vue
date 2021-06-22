<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Fundamentos de producción audiovisual

    figure.mb-4
      img(src="@/assets/curso/tema4-imagen1.png", alt="")

    p.mb-5 Así como la fotografía, la producción audiovisual se cataloga como otro tipo de arte al darle movimiento a una imagen y maneja los mismos elementos compositivos en su imagen. De esta forma, la producción audiovisual se enfoca en la generación de contenidos audiovisuales para las distintas plataformas, desde las grandes producciones cinematográficas hasta la simpleza de subir una historia en redes sociales desde un teléfono inteligente.

    #t_4_1.titulo-segundo
      h2 4.1  Breve historia de la Producción Audiovisual

    div.mb-5.p-4(style="background-color: yellow") Pendiente ajuste del diseñador

    #t_4_2.titulo-segundo
      h2 4.2  Elementos básicos de la producción audiovisual

    p.mb-5 Al igual que en las grandes producciones cinematográficas, como en los videos realizados con celular o las historias en redes sociales, se determinan mediante procesos que, dependiendo del medio, pueden ser a pequeña o gran escala, es de entender que la producción audiovisual se desarrolla en tres importantes fases (Espinel, 2021), descritas a continuación:

    .row.mb-5.justify-content-center
      .col-md-10
        .row
          .col-md-4.d-flex
            .tarjeta-numerada.color-primario.p-4
              .tarjeta-numerada__numero
                .h2 1
              figure.mb-3
                img(src="@/assets/curso/tema4-imagen2.svg", alt="")
              p.text-center
                b Planificación
              p.text-center Etapa llamada Pre-Producción, se debe realizar una revisión del guion técnico, elegir el personal adecuado, los lugares y contrataciones. Termina con un plan de acción.
          .col-md-4.d-flex
            .tarjeta-numerada.color-secundario.p-4
              .tarjeta-numerada__numero
                .h2 2
              figure.mb-3
                img(src="@/assets/curso/tema4-imagen3.svg", alt="")
              p.text-center
                b Ejecución
              p.text-center Etapa llamada Producción, se lleva a cabo todo el plan de acción y se determina la participación de un determinado talento humano y equipos tecnológicos.
          .col-md-4.d-flex
            .tarjeta-numerada.color-acento-botones.p-4
              .tarjeta-numerada__numero
                .h2 3
              figure.mb-3
                img(src="@/assets/curso/tema4-imagen4.svg", alt="")
              p.text-center
                b Montaje y edición
              p.text-center Etapa llamada Postproducción, se revisa todo el material generado en la producción y se procede con la elección del más adecuado. Luego un elección de imagen y sonido para finalmente la obra audiovisual.

    #t_4_3.titulo-segundo
      h2 4.3  Tipos de producción audiovisual

    p.mb-5 Según Productora Audiovisual (2015), teniendo en cuenta factores como la duración del material, el contenido, la inversión, entre otros, existen diversos tipos de producción. A continuación, procede con la lectura para que puedas clasificarlos y seleccionarlos para su contexto personal y laboral. Adelante.

    .row.mb-4.justify-content-center
      .col-md-8
        .row.py-3.row-line.mb-4
          .col-md-3
            figure.mb-3
              img(src="@/assets/curso/tema4-imagen5.svg", alt="")
          .col-md-9.align-self-center
            p.mb-0
              strong Cortometrajes
              br
              br
              | Este tipo de producción audiovisual está supeditada al tiempo de duración, por lo que se considera un cortometraje a la obra que dure menos de 60 minutos y que cuente una historia entendible bajo un hilo conductor.

        .row.mb-4.py-3.row-line
          .col-md-3
            figure.mb-3
              img(src="@/assets/curso/tema4-imagen6.svg", alt="")
          .col-md-9.align-self-center
            p.mb-0
              strong Largometrajes
              br
              br
              | Los largometrajes son producciones que duran más de 60 minutos como las películas, las cuales se pueden clasificar por sus contenidos, el estilo de audiencia o el formato utilizado.

        .row.mb-4.py-3.row-line
          .col-md-3
            figure.mb-3
              img(src="@/assets/curso/tema4-imagen7.svg", alt="")
          .col-md-9.align-self-center
            p.mb-0
              strong Documentales
              br
              br
              | Producción audiovisual con imágenes previamente investigadas y organizadas que narran una historia real de un tema determinado.

        .row.mb-4.py-3.row-line
          .col-md-3
            figure.mb-3
              img(src="@/assets/curso/tema4-imagen8.svg", alt="")
          .col-md-9.align-self-center
            p.mb-0
              strong Series de ficción
              br
              br
              | Este tipo de producción audiovisual se organiza por capítulos y se emite a través de televisión o plataformas pagas, tienen una duración más prolongada y pueden desarrollarse en distintas versiones o temporadas.

        .row.mb-4.py-3.row-line
          .col-md-3
            figure.mb-3
              img(src="@/assets/curso/tema4-imagen9.svg", alt="")
          .col-md-9.align-self-center
            p.mb-0
              strong Streaming o Transmisiones en directo
              br
              br
              | Con la llegada del internet, transmitir a través de un teléfono inteligente es mucho más fácil mediante las redes sociales y plataformas especializadas en ello, lo que ha facilitado muchos procesos para compartir contenidos.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
