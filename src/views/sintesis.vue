<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Uno de los problemas más complejos que afecta el área de la salud es el manejo de una de las enfermedades más contagiosas y peligrosas en el país es el dengue, por ende, resulta fundamental conocer los elementos necesarios para su control además de las políticas públicas en salud que se han establecido para combatirlo. 
    p.pb-5 En este orden de ideas, el objetivo de este componente formativo es dar a conocer todos los elementos necesarios y enfrentar dicha enfermedad que para el país ha significado una problemática que ha afectado a gran parte de la población colombiana. Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
