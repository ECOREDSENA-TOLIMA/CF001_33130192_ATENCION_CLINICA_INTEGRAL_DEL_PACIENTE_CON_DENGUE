<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-up") Se da la bienvenida a este componente formativo denominado 
      b(style="color: #4462FE") “Marco normativo y conceptual” 
      | para comenzar el recorrido por el mismo, revise la información que se presenta a continuación:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/" title="Video dengue" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
