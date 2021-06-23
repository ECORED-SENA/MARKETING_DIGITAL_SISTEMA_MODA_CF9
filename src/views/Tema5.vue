<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Herramientas de edición de piezas gráficas y comunicacionales

    figure.mb-4
      img(src="@/assets/curso/tema5-imagen1.png", alt="")

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-0
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-4 Para la generación de piezas gráficas y comunicaciones existe una gran variedad de herramientas que permiten llevar a cabo tanto su construcción como edición. Es importante identificar cuáles son las que más se ajustan a las necesidades del producto audiovisual y sobre todo de la persona que las trabajará, puesto que existen en el mercado softwares libres o pagados, algunos más complejos que otros, teniendo en cuenta el producto a desarrollar. Esto supone una exploración adecuada de acuerdo con la facilidad de trabajo.
              br
              br
              | Con la intención de que puedas identificar algunas herramientas que podrás utilizar en sus momentos de creatividad y creación de contenido, le sugerimos revisar el texto “Importancia del contenido visual y herramientas de edición” (2016). Será una lectura de más o menos 10 minutos.
              br
              br
              | Recuerda que en diferentes sitios existen video tutoriales que le enseñaran a utilizar algunas herramientas de edición de contenido digital ¿qué espera para ir a buscarlas?
            a.anexo.mb-5.mb-lg-0(href="https://mandarinabrand.com/blog/contenido-visual-herramientas/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p
                  strong Importancia del contenido visual y herramientas de edición.
        .col-lg-4.mb-0.mb-lg-0
          figure
            img(src='@/assets/curso/tema5-imagen2.svg', alt='')

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
