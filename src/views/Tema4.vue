<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Guías y lineamientos de manejo clínico
    p.my-5 A continuación, se debe revisar con atención los lineamientos que se han dado en los últimos años respecto al manejo clínico de casos de ETV:  
    .row(style="min-height: 535px")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              figure
                img(src="@/assets/curso/tema4/4.png") 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/2.png')})`}")
            .tarjeta-slide__contenido
              figure
                img(src="@/assets/curso/tema4/5.png") 
      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/3.png')})`}")
            .tarjeta-slide__contenido
              figure
                img(src="@/assets/curso/tema4/6.png") 
      
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
