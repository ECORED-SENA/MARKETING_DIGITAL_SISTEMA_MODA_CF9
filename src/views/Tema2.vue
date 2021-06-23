<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Fundamentos de diseño

    figure.mb-4
      img(src="@/assets/curso/tema2-imagen1.png", alt="")

    p.mb-5 Todo lo que se ve en el mundo tiene que ver con el diseño, éste surge desde la concepción que se tiene de un elemento determinado hasta el resultado final, ya sea un objeto bidimensional o tridimensional. De esta forma, se denomina diseño a todo proceso de creación visual encaminado a suplir una necesidad, teniendo como componentes la estética y la funcionalidad (Wong, W, 1991). Para entender el diseño, es necesario comprender que este siempre tendrá un propósito con el cual fue desarrollado, con lo que el producto que surge debe cumplir con los requerimientos que el mercado exige para ser consumido. Igualmente es importante partir de un lenguaje visual que permita comprender los componentes del diseño para una adecuada organización del espacio en cuanto a sus elementos.
      br
      br
      | Teniendo en cuenta a Wong, W. (1991) para entender el diseño es importante conocer los cuatro grupos de elementos que lo conforman:

    .row.justify-content-center.mb-5
      .col-md-10
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Elementos conceptuales").px-4.py-2
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen2.svg', alt='')
              .col
                p
                  strong Punto:
                  br
                  |  indica posición y no ocupa una zona en el espacio, puede definirse como el principio y fin de una línea o la conexión entre estas.

            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen3.svg', alt='')
              .col
                p
                  strong Línea:
                  br
                  |  el recorrido de un punto que se mueve puede definirse como una línea, ésta determina los bordes de un plano ya que tiene posición y dirección.

            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen4.svg', alt='')
              .col
                p
                  strong Plano:
                  br
                  |  el plano define los límites extremos de un volumen y se determina como el recorrido de una línea en movimiento. Es de destacar que un plano tiene largo y ancho, pero no posee grosor.

            .row.mb-0
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen5.svg', alt='')
              .col
                p
                  strong Volumen:
                  br
                  |  el recorrido de un plano en movimiento se define como volumen, además tiene una posición en el espacio.

          .row(numero="2" titulo="Elementos visuales").px-4.py-2
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen6.svg', alt='')
              .col
                p
                  strong Forma:
                  br
                  |  manera de ser identificado un elemento, a través de la percepción visual.

            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen7.svg', alt='')
              .col
                p
                  strong Medida:
                  br
                  |  se refiere al tamaño que poseen todas las formas, ya sea algo grande o pequeño con relación a un espacio determinado.

            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen8.svg', alt='')
              .col
                p
                  strong Color:
                  br
                  |  es una característica para distinguir una forma, ya sea con los colores primarios y sus derivados, además de los colores neutros..

            .row.mb-0
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen9.svg', alt='')
              .col
                p
                  strong Textura:
                  br
                  |  características de la superficie de una forma, que conecta tanto la vista con el tacto.

          .row(numero="3" titulo="Elementos de relación").px-4.py-2
            p.mb-4 Se entiende como los elementos que determinan la ubicación e interrelación de las formas dentro de un diseño.
            .row.mb-4.px-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen10.svg', alt='')
              .col
                p
                  strong Dirección:
                  br
                  |  manera de ser identificado un elemento, a través de la percepción visual.

            .row.mb-4.px-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen11.svg', alt='')
              .col
                p
                  strong Posición:
                  br
                  |  se refiere al tamaño que poseen todas las formas, ya sea algo grande o pequeño con relación a un espacio determinado.

            .row.mb-4.px-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen12.svg', alt='')
              .col
                p
                  strong Espacio:
                  br
                  |  es una característica para distinguir una forma, ya sea con los colores primarios y sus derivados, además de los colores neutros..

            .row.mb-0.px-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen13.svg', alt='')
              .col
                p
                  strong Gravedad:
                  br
                  |  características de la superficie de una forma, que conecta tanto la vista con el tacto.

          .row(numero="4" titulo="Elementos prácticos").px-4.py-2
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen14.svg', alt='')
              .col
                p
                  strong Representación:
                  br
                  |  se define a las formas realizadas por el ser humano que representan un elemento del mundo o de la naturaleza.

            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen15.svg', alt='')
              .col
                p
                  strong Significado:
                  br
                  |  surge cuando un diseño genera un mensaje.

            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema2-imagen16.svg', alt='')
              .col
                p
                  strong Función:
                  br
                  |  es el objetivo para lo cual fue creado un diseño.

    #t_2_1.titulo-segundo
      h2 2.1  Principios de la composición gráfica

    p.mb-5 La composición gráfica se refiere a la organización de los elementos que posee un diseño. Desde una percepción visual éstos se ordenan teniendo en cuenta la finalidad y funcionalidad con que se ha desarrollado dicho diseño.

    .row.justify-content-center
      .col-md-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-4 Apreciado aprendiz le sugerimos leer el siguiente contenido de la página web Neetwork Businnes School, la cual nos inmiscuye en una información relacionada con la composición, entendida esta como la organización de elementos en un plano para dar un sentido comunicativo; pero antes de ir al sitio web piensa ¿Qué es dinamismo? ¿has visto equilibrio en algunas composiciones?; si te preguntáramos por tensión en el contexto de la composición ¿con qué palabra la defines? Tranquilo si no tienes respuestas empieza a explorar el contenido.
                a.anexo.mb-5.mb-lg-0(href="https://neetwork.com/7-principios-de-la-composicion-visual/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p
                      strong 7 principios de la composición visual en diseño gráfico
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2-imagen17.svg', alt='')

    p.mb-5 Ahora que has leído, podríamos ayudarte con este resumen sobre los elementos de la composición. Observa el siguiente recurso de aprendizaje:

    .row.justify-content-center
      .col-md-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2-imagen18.svg', alt='', style="max-height: 1000px")
          //- figcaption Leyenda de la imagen
          .tarjeta.color-acento-contenido.p-3(x="45.8%" y="4.8%")
            p.mb-0 Al jugar con la percepción visual es como se podría decir que un objeto tiene movimiento dentro de un diseño.
          .tarjeta.color-acento-contenido.p-3(x="54.3%" y="19.6%")
            p.mb-0 Todos los elementos de un diseño mantienen uniformidad y generan armonía.
          .tarjeta.color-acento-contenido.p-3(x="45.8%" y="34.9%")
            p.mb-0 Se determina por la ubicación de un elemento que sobresale a la mirada, con lo que se genera mayor peso visual en dicho lugar.
          .tarjeta.color-acento-contenido.p-3(x="54.3%" y="49.7%")
            p.mb-0 Los elementos de un diseño crean líneas de movimiento, siguiendo una repetición consecutiva, ya sea por el color, la línea o la forma.
          .tarjeta.color-acento-contenido.p-3(x="45.8%" y="65%")
            p.mb-0 Cuando los elementos que convergen dentro de un diseño generan una percepción visual de movimiento gracias a sus formas o la disposición en el espacio.
          .tarjeta.color-acento-contenido.p-3(x="54.3%" y="79.9%")
            p.mb-0 Se genera una conexión entre los elementos que componen la figura y el fondo, de tal manera que se juega con la percepción visual sin dar a entender cual es el elemento que sobresale.
          .tarjeta.color-acento-contenido.p-3(x="45.8%" y="95.2%")
            p.mb-0 Se toma un elemento y se repite tantas veces como sea necesario.
    Separador

    #t_2_2.titulo-segundo
      h2 2.2  Leyes de la gestalt

    p.mb-5 Las leyes de la Gestalt surgen del movimiento alemán Gestalt a principios del siglo XX, este se basa en que el todo es superior a la suma de sus partes (ILERNA, 2019). Este movimiento permitió entender las imágenes a partir de las siguientes leyes de la percepción visual:

    .row.justify-content-center
      .col-md-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2-imagen19.svg', alt='')
          //- figcaption Leyenda de la imagen
          .tarjeta.color-acento-contenido.p-3(x="12%" y="95%")
            p.mb-0 Los elementos que se encuentran en determinada distancia suelen ser percibidos como un grupo o un objeto como tal.
          .tarjeta.color-acento-contenido.p-3(x="24%" y="5%")
            p.mb-0 Dependiendo de la ubicación de los elementos de un diseño, la atención se fija en éstos.
          .tarjeta.color-acento-contenido.p-3(x="37%" y="95%")
            p.mb-0 Aunque no haya un patrón existente, la percepción visual se guía por un elemento que supone la mente.
          .tarjeta.color-acento-contenido.p-3(x="49%" y="5%")
            p.mb-0 Los elementos que se parecen por cualquiera de sus propiedades, se perciben como un grupo o un objeto como tal.
          .tarjeta.color-acento-contenido.p-3(x="61.3%" y="95%")
            p.mb-0 A las figuras incompletas, la mente agrega elementos para generar un cierre
          .tarjeta.color-acento-contenido.p-3(x="75.4%" y="5%")
            p.mb-0 La percepción visual permite generar una separación entre el fondo de los demás elementos, entendiendo que no existe uno sin el otro.
          .tarjeta.color-acento-contenido.p-3(x="87%" y="95%")
            p.mb-0 Se percibe las imágenes simétricas como si fueran iguales.

    Separador

    #t_2_3.titulo-segundo
      h2 2.3  Teoría del Color

    p.mb-5 Dentro del diseño, el color tiene un papel fundamental a la hora de caracterizar elementos, siendo éste un componente esencial para agregar valor a la percepción visual en la transmisión de un mensaje. En el planeta existe una infinidad de colores con los que es posible trabajar para lograr elementos compositivos enfocados al objetivo deseado.
      br
      br
      | Aunque fueron muchos los pensadores y filósofos que estudiaron el color, Isaac Newton estableció que la luz es color y seguido a esto definió los siete colores, rojo, naranja, amarillo, verde, azul, añil y violeta (López, 2014).
      br
      br
      | Los colores se dividen en subgrupos según su grado de pureza, de los que se generan nuevas tonalidades:

    .row.justify-content-center
      .col-10
        .row.justify-content-between
          .col-4.d-flex
            .tarjeta--boton.p-4.mb-4
              h3.text-center Colores primarios
              p.text-center.mb-4 Colores que no se pueden crear a partir de otros
              .row.justify-content-center.mb-0
                .col-8
                  figure
                    img(src='@/assets/curso/tema2-imagen20.svg', alt='')
          .col-4.d-flex
            .tarjeta--boton.p-4.mb-4
              h3.text-center Colores secundarios
              p.text-center.mb-4 Mezcla de colores primarios
              .row.justify-content-center.mb-0
                .col-8
                  figure
                    img(src='@/assets/curso/tema2-imagen21.svg', alt='')
          .col-4.d-flex
            .tarjeta--boton.p-4.mb-4
              h3.text-center Colores terciarios
              p.text-center.mb-4 Mezcla de dos colores secundarios
              .row.justify-content-center.mb-0
                .col-8
                  figure
                    img(src='@/assets/curso/tema2-imagen22.svg', alt='')

    .row.justify-content-center
      .col-md-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-4 Luego de una búsqueda de fuentes secundarias de información se encontró el texto “Curso de Diseño Gráfico” una colección que nos acerca a las formas y colores.
                  br
                  br
                  | Con la intención de ayudarle a clasificar los colores y sus atributos le sugerimos leer el capítulo cuatro titulado “El Color en el Diseño” de la autora Anna María (2014). Leer desde la página 87 hasta la 98.

                a.anexo.mb-5.mb-lg-0(href="http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=13687" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p
                      strong El Color en el Diseño
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2-imagen23.svg', alt='')

    p.mb-5 Luego de explorar el capítulo cuatro podemos concluir que el círculo cromático se representa gráficamente la posición de los colores, partiendo del centro con los colores básicos de los que se despliegan los colores secundarios y terciarios para una mayor comprensión, y a su vez los efectos del color van más allá de una simple representación cromática, éstos conectan con emociones y sentimientos, los cuales están muy arraigados con las sensaciones que produce el mensaje de la tonalidad elegida en un elemento de diseño.

    Separador

    #t_2_4.titulo-segundo
      h2 2.4  Tipografías

    .row.mb-5
      .col-md-9.offset-md-1
        .row
          .col-md-5
            figure
              img(src='@/assets/curso/tema2-imagen24.svg', alt='')
          .col-md-7
            p Las letras imprimen en sí lo que desea transmitir un mensaje visual de un elemento gráfico, tanto por el significado de sus palabras como por el componente estético que llevan consigo en una tipografía. Estas a lo largo del tiempo han ido evolucionando conforme se han utilizado en los distintos medios y la connotación determinada en cada momento se ha transformado de la misma forma.
              br
              br
              | Se puede denominar familia tipográfica a un conjunto de fuentes o grupo de signos que se obtienen a partir del diseño básico, cada elemento de la familia puede variar de tamaño, grosor o estilo (López, 2014). Dentro de las familias tipográficas se encuentran diversas variables que dependen de la atención visual que se requiere.
    .row.mb-5.justify-content-center
      .col-md-10
        .row
          .col-md-8.align-self-center
            ul.lista-ul--color.mb-4
              li
                i.lista-ul__vineta
                p
                  strong Variables en función del peso o tono de color
                  | : ligero-light, negrita-bold, entre otros.
              li
                i.lista-ul__vineta
                p
                  strong Variables en función de la inclinación de los ejes
                  | : Itálica u oblicua.
              li
                i.lista-ul__vineta
                p
                  strong Variables en función del ancho del signo
                  | : condensado, extendido, estrecho, etc.
              li
                i.lista-ul__vineta
                p
                  strong Variables en función de la forma del trazo
                  | : contorno, sombra, etc.
            p.mb-0 Es importante destacar que a través del uso de las distintas variables pueden reforzar el significado de las palabras expresadas, esta es la mejor manera de direccionar la intensión del mensaje de la pieza gráfica.

          .col-md-4
            .titulo-sexto.color-acento-contenido
              p.mb-0
                strong Figura 1
                br
                | Familias de tipografías.
            figure
              img(src='@/assets/curso/tema2-imagen25.svg', alt='')
              figcaption Nota. . La imagen fue tomada de Anna María López (2014) del texto “Curso diseño gráfico Fundamentos y técnicas”.

    .rectangle.color-primario

    p.mb-5 De acuerdo con sus características, las familias tipográficas se clasifican en cuatro grupos fundamentales (López, 2014).

    .row.mb-5
      .col-md-3.d-flex
        .tarjeta--boton.color-primario.p-0.mb-4.pb-3
          .color-primario.text-center.py-1.fw-bold.mb-4 Romanas
          p.mb-4.px-4 Este tipo de fuentes mantiene armonía en sus proporciones y un importante contraste entre elementos rectos y curvos. De esta clasificación se identifican cinco grupos: Antiguas, de Transición, Modernas, Mecanos e Incisas.
          .row.justify-content-center.mb-3
             .col-7
               figure
                 img(src='@/assets/curso/tema2-imagen26.svg', alt='')
      .col-md-3.d-flex
        .tarjeta--boton.color-acento-contenido.p-0.mb-4.pb-3
          .color-acento-contenido.text-center.py-1.fw-bold.mb-4 Palo seco
          p.mb-4.px-4 Este tipo de fuentes tipográficas se enfocan en su esquema esencial y también pueden ser llamadas sans serif. Estas se dividen en dos grupos: Lineales sin modulación y Grotescas.
          .row.justify-content-center.mb-3
             .col-7
               figure
                 img(src='@/assets/curso/tema2-imagen27.svg', alt='')
      .col-md-3.d-flex
        .tarjeta--boton.color-primario.p-0.mb-4.pb-3
          .color-primario.text-center.py-1.fw-bold.mb-4 Rotuladas
          p.mb-4.px-4 Este tipo de fuentes permiten identificar el instrumento caligráfico con el que fueron realizadas. Se dividen en tres grupos: Caligráficas, Góticas y Cursivas informales.
          .row.justify-content-center.mb-3
             .col-7
               figure
                 img(src='@/assets/curso/tema2-imagen28.svg', alt='')
      .col-md-3.d-flex
        .tarjeta--boton.color-acento-contenido.p-0.mb-4.pb-3
          .color-acento-contenido.text-center.py-1.fw-bold.mb-4 Decorativas
          p.mb-4.px-4 Este tipo de fuentes poseen mayor libertad en su realización y por lo tanto una determinada personalidad. Se dividen en dos grupos: Fantasía y Época.
          .row.justify-content-center.mb-3
             .col-7
               figure
                 img(src='@/assets/curso/tema2-imagen29.svg', alt='')

    .row.justify-content-center.mb-5
      .col-md-6
        .titulo-sexto.color-acento-contenido
          p.mb-0
            strong Figura 2
            br
            | Clasificación DIN
        figure
          img(src='@/assets/curso/tema2-imagen30.svg', alt='')
          figcaption Nota. La imagen fue tomada de Anna María López (2014) del texto “Curso diseño gráfico Fundamentos y técnicas”.

    #t_2_5.titulo-segundo
      h2 2.5  Proceso de digitalización

    p.mb-5 Con la constante actualización de las Tecnologías de la Información y Comunicación (TIC), el proceso de digitalización en el diseño se mantiene en evolución todo el tiempo. Las herramientas digitales han permitido ir más allá para buscar las mejores opciones que conecten con la creatividad, siendo esta una fórmula para generar una infinidad de elementos tanto para medios impresos como digitales. Como aprendiz es necesario que reconozca algunos términos que aluden a una acción en campo del diseño y la digitalización. Estos son:

    .row.mb-5
      .col-md-4.align-self-center
        figure
          img(src='@/assets/curso/tema2-imagen31.svg', alt='')
      .col-md-8
        .tarjeta-avatar-b.mb-5
          img.number(src='@/assets/curso/tema2-imagen32.svg' alt='AvatarTop')
          .tarjeta.color-gris.py-3.ps-5.pe-4
            p.mb-0.ps-2
              strong Vectorización:
              br
              | Para entender la vectorización, se debe saber que un gráfico vectorial se define por una serie de puntos, denominados nodos. Estos poseen el control sobre las formas en la vectorización, según su curvatura pueden ser de tres tipos: asimétricos, uniformes y simétricos.
        .tarjeta-avatar-b.mb-5
          img.number(src='@/assets/curso/tema2-imagen33.svg' alt='AvatarTop')
          .tarjeta.color-gris.py-3.ps-5.pe-4
            p.mb-0.ps-2
              strong Elementos digitales de producto:
              br
              | Cada elemento posee características como el color, la forma, la textura, etc. El proceso de digitalización permite probar con distintos elementos y sus características, como la modificación de su tamaño, la rotación, entre otros. A partir de figuras básicas, se utilizan herramientas apropiadas de diseño digital, aplicando colores según el mensaje determinado, con tipografías definidas e imágenes que generen una composición armoniosa teniendo en cuenta el objetivo deseado.
        .tarjeta-avatar-b.mb-5
          img.number(src='@/assets/curso/tema2-imagen34.svg' alt='AvatarTop')
          .tarjeta.color-gris.py-3.ps-5.pe-4
            p.mb-0.ps-2
              strong Diagramación:
              br
              | Se encarga de la organización de los elementos que se incluyen dentro de un espacio, sobre todo en el diseño editorial.


    p.mb-0 Hasta aquí hemos visto una aproximación a la fundamentación al diseño. Recuerda que cada día hay nueva información que actualiza lo que se ha expuesto aquí. Recurre constantemente a fuentes de información confiables para que esté enterado de las tendencias.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
