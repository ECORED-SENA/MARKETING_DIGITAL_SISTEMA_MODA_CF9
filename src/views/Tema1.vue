<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Comunicación visual y comercial

    figure.mb-4
      img(src="@/assets/curso/tema1-imagen1.png", alt="")

    p.mb-4 El proceso de comunicación en el ser humano se desarrolla bajo una serie de códigos establecidos entre un emisor y un receptor al compartir un mensaje y generar una retroalimentación. Comunicarse es una necesidad básica de toda población en cualquier contexto para resolver problemas.
      br
      br
      | Al situar la comunicación en el ámbito visual, se lleva a cabo a través de imágenes que expresan una idea, ya sea por la distribución del espacio, los colores, la composición, las herramientas utilizadas, el uso de textos, entre otros. Seguido a ello, la comunicación comercial se inclina más por el lado publicitario, al evidenciar todas las estrategias usadas para promocionar productos o servicios determinados, enfocadas mucho más hacia el marketing.
      br
      br
      | “La comunicación se ubica como la base de toda sociedad, por el simple hecho de generar interacción social” (Gavidia Anticona, 2015). Por ello, la comunicación presenta una tipología muy amplia de acuerdo con distintos componentes y aplicaciones, en este documento solo se hará énfasis en dos tipos, la comunicación visual y comercial. Pero primero se debe entender conceptos básicos en cuanto al proceso comunicativo en cualquier instancia, del que se desprenden diversas ramas para su uso en la vida cotidiana.
      br
      br
      | Por lo anterior, ¿se ha preguntado cuáles son los elementos básicos de la comunicación? Imagina una conversación entre un amigo y usted ¿quiénes intervienen? ¿cómo sucede?, para contestar estas preguntas identifica los elementos básicos de la comunicación. Según Gavidia Anticona (2015) en la comunicación, como proceso que involucra a unos participantes se conforma por los siguientes elementos:

    .row.justify-content-center
      .col-md-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1-imagen2.svg', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen
          .tarjeta.color-acento-contenido.p-3(x="40.6%" y="3.7%")
            p.mb-0 Se denomina a las circunstancias que rodean el acto comunicativo, para generar entendimiento y coherencia al mensaje.
          .tarjeta.color-acento-contenido.p-3(x="25.2%" y="48.3%")
            p.mb-0  Se define como el individuo o grupo de individuos que selecciona una información determinada con los recursos que cuenta y configura un determinado mensaje mediante signos a través de un canal para ser enviada al receptor.
          .tarjeta.color-acento-contenido.p-3(x="74.6%" y="48.3%")
            p.mb-0  Se define como el individuo o grupo de individuos que reciben el mensaje enviado por el emisor, a través del canal determinado haciendo uso de los signos elegidos.
          .tarjeta.color-acento-contenido.p-3(x="40.7%" y="48.3%")
            p.mb-0  Es la organización de ideas presentada por el emisor hacia el receptor, el cual se expresa a través de un código determinado.
          .tarjeta.color-acento-contenido.p-3(x="49.7%" y="68%")
            p.mb-0  Es determinado por los signos lingüísticos y no lingüísticos utilizados para generar el mensaje y establecer el proceso de comunicación.
          .tarjeta.color-acento-contenido.p-3(x="49.7%" y="28.5%")
            p.mb-0  Tema al cual se hace alusión en el mensaje.
          .tarjeta.color-acento-contenido.p-3(x="39%" y="90%")
            p.mb-0  Se determina por el medio usado para desplegar el mensaje.

    p.mb-5 Identificados los elementos de la comunicación, es necesario valorar las características de las Comunicación Visual y Comercial. Adelante

    Separador

    #t_1_1.titulo-segundo
      h2 1.1  Comunicación Visual

    .row.justify-content-center.mb-5
      .col-md-10
        .row.mb-4
          .col-md-8
            .bloque-texto-d.color-primario.p-3
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                h3.text-regular.px-5 La comunicación visual se entiende como el tipo de comunicación apoyada en imágenes o medios visuales para transmitir un mensaje o dar a conocer una idea. Aunque en el mundo es posible percibir diversos códigos, el que lleva preponderancia por encima de los demás es el visual y con ello se ha usado las ventajas que la imagen supone, entendiendo que esta no solo es una representación de un determinado referente, sino que se construye por un conjunto de sentidos definidos en diversas lecturas.
                i.fas.fa-quote-right
              .bloque-texto-d__autor
                .h5.mb-0 (Rollié, 2011)
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-imagen19.svg', alt='')
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-imagen20.svg', alt='')
          .col-md-8
            .bloque-texto-d.color-acento-botones.p-3
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                h3.text-regular.px-5 Para entender la comunicación visual es importante identificar dos componentes: el mensaje y el análisis de sus componentes. A su vez, el mensaje se divide en la información que este proporciona y el soporte visual, reconociendo que este último se conforma por todos los elementos que se utilizan para darle coherencia con respecto a la información emitida, como son: la textura, la forma, la estructura, el módulo y el movimiento.
                i.fas.fa-quote-right
              .bloque-texto-d__autor
                .h5.mb-0 (Munari, 2016)

    //- TabsB debe ir acompañado de una de una de estas clases =>
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Textura" :icono="require('@/assets/curso/tema1-imagen5.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p.mb-4 La textura se trabaja con el fin de sensibilizar una superficie y determinar una distancia entre la zona en que se ubica el signo y el resto del plano.
              br
              br
              | Con la intención de que observe algunos ejemplos de textura y para ampliar más información le sugerimos leer la página 75  del siguiente libro:
            a.anexo.mb-5.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p
                  strong Enlace web.
            p.mb-0.mt-4 (Ingresa a la Biblioteca del SENA con su usuario y contraseña)
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-imagen10.svg')

      .py-4.py-md-5(titulo="Forma" :icono="require('@/assets/curso/tema1-imagen6.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p.mb-4 Se define como el conjunto de líneas y superficies utilizadas para componer un elemento, las formas geométricas más básicas son el círculo, el cuadrado y el triángulo equilátero.
              br
              br
              | Con la intención de que observe algunos ejemplos de forma y para ampliar más información le sugerimos leer las páginas 105 y 129 del siguiente libro:
            a.anexo.mb-5.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p
                  strong Enlace web.
            p.mb-0.mt-4 (Ingresa a la Biblioteca del SENA con su usuario y contraseña)
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-imagen11.svg')

      .py-4.py-md-5(titulo="Estructura" :icono="require('@/assets/curso/tema1-imagen7.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p.mb-4 Se definen como las construcciones que se generan al repetir formas iguales en contacto estrecho.
              br
              br
              | Con la intención de que observe algunos ejemplos de estructura y para ampliar más información le sugerimos leer las páginas 216 del siguiente libro:
            a.anexo.mb-5.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p
                  strong Enlace web.
            p.mb-0.mt-4 (Ingresa a la Biblioteca del SENA con su usuario y contraseña)
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-imagen12.svg')

      .py-4.py-md-5(titulo="Módulo" :icono="require('@/assets/curso/tema1-imagen8.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p.mb-0 Formas idénticas que se encuentran dentro de una estructura y hacen parte de su composición.
              br
              br
              | Con la intención de que observe algunos ejemplos de módulo le sugerimos observar la siguiente imagen:
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-imagen13.svg')

      .py-4.py-md-5(titulo="Movimiento" :icono="require('@/assets/curso/tema1-imagen9.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p.mb-0 Se refiere al cambio de posición de un elemento visual.
              br
              br
              | Con la intención de que observe algunos ejemplos de textura y para ampliar más información le sugerimos observar la siguiente imagen :
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-imagen14.svg')

    p.mb-4 La comunicación visual se enfoca a todo lo que pueden percibir los ojos del espectador de acuerdo con un contexto determinado configuran diferentes significados. A partir de esto, la comunicación se divide en dos: Casual o Intencional como lo indica Munari (2016).

    ol.lista-ol--cuadro.mb-5
      li
        .lista-ol--cuadro__vineta
          span 1
        p
          strong Comunicación visual casual
          | : esta se interpreta libremente por quien recibe el mensaje.
      li
        .lista-ol--cuadro__vineta
          span 2
        p
          strong Comunicación visual intencional
          | : en esta se espera que el receptor adquiera el significado del mensaje tal cual como lo envió el emisor. Esta se examina a través de dos aspectos: Información estética e Información Práctica.
          br
          br
          span.ms-3
            strong - Información Estética
            | : se define por un mensaje que informe acerca de algo, por ejemplo: los elementos que definen una forma.
          br
          br
          span.ms-3
            strong - Información Práctica:
            | : se define por una imagen como tal, como una fotografía, una señalética, etc.

    Separador

    #t_1_2.titulo-segundo
      h2 1.2  Comunicación comercial

    p.mb-5 La comunicación comercial o corporativa está muy relacionada con el marketing y se enfoca en todos los elementos que permiten enviar un mensaje en el ámbito empresarial, a partir de la configuración de una imagen corporativa que mantenga equilibrio y cohesión. Gracias a este tipo de comunicación las organizaciones comerciales pueden posicionarse en el mercado y promover sus productos o servicios a públicos determinados con el objetivo de generar una necesidad de adquisición (Gaticos y Monetes, 2020).
      br
      br
      | La comunicación comercial desarrollada tanto en ámbitos virtuales como presenciales está influenciada por el marketing, de esta forma, la comunicación comercial se inclina por cuatro variables o 4S’s que permiten generar una adecuada estrategia (Gaticos y Monetes, 2020).

    .row.justify-content-center
      .col-md-6
        .row
          .col-6
            .tarjeta--boton.color-acento-botones.p-4.mb-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1-imagen15.svg', alt='')

              h3.text-center Shareable
              p.text-small Contenidos comunicativos con facilidad para compartir.
            .tarjeta--boton.color-secundario.p-4.mb-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1-imagen17.svg', alt='')

              h3.text-center Snackable
              p.text-small Contenidos comunicativos sencillos y fáciles de digerir por el espectador.
          .col-6
            .tarjeta--boton.color-acento-contenido.p-4.mb-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1-imagen16.svg', alt='')

              h3.text-center Searchable
              p.text-small Contenidos comunicativos con facilidad de ser encontrados en la web.
            .tarjeta--boton.color-primario.p-4.mb-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1-imagen18.svg', alt='')

              h3.text-center Surprising
              p.text-small Contenidos comunicativos que generen interés enfocados en la creatividad.



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
