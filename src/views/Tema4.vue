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
        .tarjeta.tarjeta-slide.arriba.color-adicional-1(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
                h3.text-center Año 2010
                p Se dio un proceso estructurado para la generación de guías y protocolos de manejo clínico de casos de las -ETV- en el país, el cual fue liderado por Dirección General de Salud Pública del entonces Ministerio de Protección Social, hoy Ministerio de Salud y Protección Social, con posterior reglamentación a través de la Resolución 2257 de junio de 2011, por la cual se adoptaron las “Guías de Atención Clínica Integral de dengue, malaria, leishmaniasis y Chagas”.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-adicional-1(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor            
            .tarjeta-slide__contenido.p-4.p-xl-5
                h3.text-center Año 2020
                p Dada la situación epidémica de dengue del país desde marzo de 2019, se emitieron, a través de oficio masivo dirigido a las secretarías de Salud departamental y Distrital, lineamientos para el manejo clínico de dengue, teniendo en cuenta la actualización en la evidencia disponible con base en la: “Guía para la atención de enfermos en la región de las Américas” del año 2015 y dada la necesidad de dar algunas claridades frente al manejo de los casos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/2.png')})`}")
                
      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-adicional-1(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor          
            .tarjeta-slide__contenido.p-4.p-xl-5
                h3.text-center Actualmente
                p El país se encuentra realizando el proceso de adopción de las Directrices de diagnóstico y tratamiento de dengue, chikungunya y zika de la OPS 2021 para Colombia. Para este contexto, es importante definir que el componente a profundizar corresponde al de atención integral de pacientes, el cual establece la gestión para garantizar la detección, el manejo oportuno y con calidad de los pacientes afectados por las ETV según las competencias establecidas por el Sistema General de Seguridad Social en Salud y su integración para lograr el abordaje de este evento de interés en salud pública, priorizado por el Gobierno nacional.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/3.png')})`}")
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
