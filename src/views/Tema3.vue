<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Fundamentos de fotografía

    figure.mb-4
      img(src="@/assets/curso/tema3-imagen1.png", alt="")

    p.mb-5 La fotografía se ha convertido en un medio capaz de reflejar la realidad que capta el ojo humano, con todas sus características identitarias. A lo largo del tiempo ésta ha tenido una evolución impactante gracias a los avances tecnológicos, lo cual ha permitido que la ciencia y la sociedad aumentara las posibilidades de observar y entender diversos fenómenos, hasta la oportunidad de generar retratos por pura diversión, ya sea con una cámara o con su teléfono inteligente, además esta se ha convertido en el arma más poderosa para retratar la realidad y compartirla a través del internet.
      br
      br
      | Al hablar de fotografía es importante entender que todo parte de la imagen, la cual se entiende como una reflexión de la realidad a partir de los elementos utilizados. De esta forma, se podría decir que la fotografía como tal es el proceso de captar imágenes a partir de un elemento técnico, que fija dichas imágenes con materiales químicos, en un soporte para su revisión digital o impresión en papel (Bergondo, 2014). La multiplicidad de la imagen es otro aspecto importante de la fotografía, con la habilidad de generar un sinfín de copias de un elemento compositivo a partir de lo captado por el lente del instrumento técnico, en este caso, una cámara.
      br
      br
      | Al observar las imágenes generadas por la fotografía, con sus respectivos significados se puede hablar de dos tipos de análisis para una correcta lectura de dichas imágenes:

    .row.mb-5
      .col-md-5.offset-md-1
        .cajon.color-primario.p-4.mb-4
          .h5 Análisis de nivel denotativo
          p.mb-0 Se refiere a un nivel de reconocimiento visual, solo al conocer los elementos que aparecen en la imagen se entiende el mensaje que se desea entregar.
      .col-md-5
        .cajon.color-secundario.p-4.mb-4
          .h5 Análisis de nivel connotativo
          p.mb-0 Se refiere a la incidencia de la percepción personal con respecto a una imagen determinada, conectan con la experiencia que dicho elemento genera en el observador.

    Separador

    #t_3_1.titulo-segundo
      h2 3.1  Breve historia de la fotografía

    p.mb-5 Según Bergondo (2014) la historia de la fotografía se fundamenta en tres importantes momentos que se muestran en el siguiente recurso educativo:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_3_2.titulo-segundo
      h2 3.2  Elementos básicos de la fotografia

    p.mb-5 La fotografía aporta mucho valor a toda imagen que se desee exponer, la manera en que se muestra y los elementos utilizados influyen en gran medida (Casa Verde Films, 2014). Explora el siguiente recurso de aprendizaje para que usted tenga elementos para hacer una fotografía acorde a una intención laboral o personal:

    .tarjeta.tarjeta--gris.p-4.mb-5
      //- LineaTiempoC debe ir acompañado de una de una de estas clases =>
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      LineaTiempoC.color-primario
        .row(titulo="Composición").px-5
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-imagen2.svg', alt='')
          .col-md-6.offset-1.align-self-center
            .h3 Composición
            p.mb-0 Se refiere a la organización de los elementos que intervienen en la fotografía, se espera que ésta genera armonía y equilibro, para ello existen técnicas como la Ley de Tercios, en la que debe dividir la imagen en nueve secciones con líneas imaginarias, con éstas se alinearán los elementos de la fotografía.

        .row(titulo="Textura")
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-imagen3.svg', alt='')
          .col-md-6.offset-1.align-self-center
            .h3 Textura
            p.mb-0 Permite acercar la imagen plana con una especie de experiencia sensorial a través de la percepción visual. De esta forma, la imagen expresa lo que en realidad puede sentir el observador al palpar la superficie fotografiada.

        .row(titulo="Profundidad")
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-imagen4.svg', alt='')
          .col-md-6.offset-1.align-self-center
            .h3 Profundidad
            p.mb-0 Sugiere la sensación de tridimensionalidad en la foto, con esto se hace uso de focos y ángulos que enfoquen un determinado elemento de la fotografía y distorsione su fondo para generar esta percepción visual.

        .row(titulo="Línea")
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-imagen5.svg', alt='')
          .col-md-6.offset-1.align-self-center
            .h3 Línea
            p.mb-0 Se refiere a los contornos de los elementos existentes en una fotografía, esto permite acentuar el mensaje de la imagen y ayuda al observador estableciendo el camino a seguir para entender la fotografía. Las líneas horizontales expresan serenidad, las verticales expresan poder o fuerza y las diagonales representan dinamismo.

        .row(titulo="Luz")
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-imagen6.svg', alt='')
          .col-md-6.offset-1.align-self-center
            .h3 Luz
            p.mb-0 Es un componente fundamental en la fotografía, dependiendo de este se determinan los patrones de luz y sombra que va a poseer la imagen final. Para ello, se debe tener en cuenta el nivel de la luz, el cual determina el nivel de detalle en áreas iluminadas u oscuras, del mismo modo, se debe tener en cuenta el ángulo de la luz, que determinará la distribución de sombras en la imagen.

        .row(titulo="Diseños y forma")
          .col-md-3.align-self-center
            .h3 Diseños y forma
            p.mb-0 No hay nada que atraiga más la percepción visual que los diseños y la forma contenidos en una fotografía, aquí influyen tres aspectos importantes: el ritmo, la simetría y triángulos.
          .col-md-3
            figure.mb-3
              img(src='@/assets/curso/tema3-imagen7.svg', alt='')
            p.mb-0
              strong Ritmo
              | : Se refiere a la repetición de una forma en la fotografía.
          .col-md-3
            figure.mb-3
              img(src='@/assets/curso/tema3-imagen8.svg', alt='')
            p.mb-0
              strong Simetría
              | : Dos elementos presentan un reflejo exacto entre ellos.
          .col-md-3
            figure.mb-3
              img(src='@/assets/curso/tema3-imagen9.svg', alt='')
            p.mb-0
              strong Triángulos
              | : Se forman al unirse dos líneas diagonales dentro de la foto y generan mayor atención al observador.

        .row(titulo="Punto de vista")
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-imagen10.svg', alt='')
          .col-md-6.offset-1.align-self-center
            .h3 Punto de vista
            p.mb-0 Se refiere a la posición desde la que se toma la fotografía a un objeto determinado, esta influye mucho en el mensaje que desea transmitir la imagen.

    Separador

    #t_3_3.titulo-segundo
      h2 3.3  Tipos de Fotografía

    p.mb-5 Al entender que se desarrolla la fotografía análoga utilizada en tiempos anteriores y la fotografía digital, que prevalece en la actualidad, existe un amplio abanico de posibilidades para desarrollar este arte en función de los objetivos deseados. Por ello, según Silva (2020) se identifican estos tipos de fotografía.
      br
      br
      | Para la lectura de cada tipología le invitamos a realizar un ejercicio mental, cuando lea traiga a su mente una imagen que se asocie a cada característica de la fotografía. Empieza.

    .row.justify-content-center
      .col-md-8
        .tarjeta.color-primario.mb-5
          SlyderA
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía publicitaria
                p.mb-0 Tiene como función promover productos y servicios determinados, en conexión con el marketing y la comunicación de marca.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía artística
                p.mb-0 Sigue líneas estéticas de la pintura y tiene un enfoque subjetivo y hasta surrealista.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía de arquitectura
                p.mb-0 En esta se trata de resaltar los aspectos característicos de las estructuras, texturas y diseño. Además, se pretende realizar imágenes minimalistas y composiciones geométricas.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía de autor
                p.mb-0 El fotógrafo les imprime su sello único a las imágenes y mantiene un enfoque subjetivo.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía de retrato
                p.mb-0 El fotógrafo trata de sacar a relucir aspectos muy propios de la persona que es retratada, logrando mayor profundidad y emotividad en la imagen.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía documental
                p.mb-0 Se enfoca en el relato de una historia a través de la fotografía, que surge a partir de hechos cotidianos.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Reportaje fotográfico
                p.mb-0 De la mano de la fotografía documental, el reportaje fotográfico está presente en momentos importantes para la historia de un lugar.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía surrealista
                p.mb-0 Hace uso de elementos de edición para crear mundos imaginarios.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía de paisajes
                p.mb-0 Uno de los primeros tipos de fotografía empleada tanto para el ocio, como para el comercio.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía aérea
                p.mb-0 Para la observación de grandes extensiones de tierra se ha hecho uso de la fotografía aérea, con la actualización de elementos como el drone es posible generar planos fotográficos como el vertical de 90 grados y el oblicuo de 45 grados.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía de deportes
                p.mb-0 Se enfoca en la captura de alta velocidad de los distintos momentos decisivos en el deporte.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía boudoir
                p.mb-0 Se enfoca en la captura de imágenes íntimas con un toque de romanticismo.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía abstracta
                p.mb-0 Se enfoca en el arte, con composiciones inspiradas en las pinturas.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía de stock
                p.mb-0 Se refiere a todo tipo de fotografías que aportan a un banco virtual en el que se alojan imágenes de todo tipo, para ser usada con fines comerciales.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía de producto
                p.mb-0 Fotografías enfocadas a destacar las características de determinado producto para su promoción y comercialización
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía de moda
                p.mb-0 Se enfoca hacia la fotografía publicitaria, haciendo uso de escenografía, estilismo y demás elementos que permiten contar una historia para que sea consumida por el público y a su vez comercializar y promover los productos del sector moda.
            .row.p-5
              .col-12.pb-4.px-5
                .h3 Fotografía gastronómica
                p.mb-0 Se enfoca en lograr una imagen que evoque al apetito del comensal y la publicidad de dicho elemento gastronómico.

    .row.justify-content-center
      .col-md-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-0
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-4 Gracias por participar la lectura de la tipología de fotografías, ahora que ha evocado alguna experiencia relacionada con una imagen, le sugerimos explorar algunas fotografías de Delgado, J. C. (2021), allí se compilaron algunas fotos que le ayudará a fortalecer su conocimiento adquirido ¿qué esperas? ¿cuál será a que más le gustará?
                a.anexo.mb-5.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p
                      strong 16 tipos de fotografía para convencerte de expandir tu talento
            .col-lg-4.mb-0.mb-lg-0
              figure
                img(src='@/assets/curso/tema3-imagen11.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
