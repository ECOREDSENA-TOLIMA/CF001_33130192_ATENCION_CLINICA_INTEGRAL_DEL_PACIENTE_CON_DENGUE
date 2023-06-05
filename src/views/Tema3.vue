<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistema de vigilancia en salud pública: Protocolos y lineamiento de Vigilancia en Salud Pública

    .row.align-items-center.mb-5      
      .col
        p(data-aos="fade-up") En primer lugar, es importante contextualizar que el sistema de vigilancia en salud pública se crea y reglamenta en el 
          b Decreto 3518 de 2006, 
          | posteriormente unificado en el título 8 del 
          b Decreto 780 de 2016, 
          | único reglamentario del sector salud, cuyo objetivo es el de tener acceso a la información de forma sistemática y oportuna sobre la dinámica de los eventos de interés en salud pública con el fin de orientar la toma de decisiones, es decir la política en salud pública para la prevención y control de las enfermedades y factores de riesgo en salud. Dicho sistema de vigilancia es dirigido por el Ministerio de Salud y Protección Social y el desarrollo de las acciones que garantizan su operación en las áreas de su competencia corresponden al Instituto Nacional de Salud.

    .row.justify-content-center.color-adicional-1(data-aos="fade-right")
      .col-lg-10
        p.my-5(data-aos="fade-up") El sistema de vigilancia utiliza unos procesos que incluyen la recolección y organización de datos, su análisis, interpretación y difusión de información generada, cuyo proceso está definido en los protocolos de vigilancia en salud pública. Adicional a esto, se establece que todos los integrantes del sistema que generen información de salud pública deben realizar la notificación de eventos definidos en los lineamientos de salud pública, en los tiempos, sistemas y canales establecidos para tal fin.
        .titulo-sexto.color-acento-contenido.mb-1
          p.mb-0 #[b Figura 5] 
            i Portada de los lineamientos de Vigilancia en Salud Pública, Colombia, 2019-2022.

        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img.pt-5(src="@/assets/curso/tema3/1.png" data-aos="zoom-in-up" alt= "Portada de los lineamientos de Vigilancia en Salud Pública, Colombia, 2019-2022. En la figura se representa la portada del documento Lineamientos Nacionales para la Vigilancia 2022.  Anualmente es establecen unos lineamientos de vigilancia en salud pública en los cuales se definen las líneas de acción obligatorias para la vigilancia basada en notificación rutinaria de casos predefinidos, incluyendo la detección, valoración y modificación del riesgo de los eventos de interés en salud pública en el territorio colombiano.")
        figure.movil.mt-0  
          .row.justify-content-center.d-lg-none.d-md-none  
            img.pb-5(src="@/assets/curso/tema3/3.png" data-aos="zoom-in-up" alt= "Portada de los lineamientos de Vigilancia en Salud Pública, Colombia, 2019-2022. En la figura se representa la portada del documento Lineamientos Nacionales para la Vigilancia 2022.  Anualmente es establecen unos lineamientos de vigilancia en salud pública en los cuales se definen las líneas de acción obligatorias para la vigilancia basada en notificación rutinaria de casos predefinidos, incluyendo la detección, valoración y modificación del riesgo de los eventos de interés en salud pública en el territorio colombiano.")
                      
        .col
          .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #F6F6F6;")
            p.py-3.px-5(data-aos="fade-up") Nota. Instituto Nacional de Salud, Colombia, (s.f.).
                  
        .cajon.color-acento-contenido.p-4.mt-0.col-lg-12.m-auto.pb-1(style="background-color:#F2FBE6;")
          p.mb-0.py-3(data-aos="fade-up") Dado a lo anterior, es importante ver el papel del profesional clínico en el reporte de eventos de interés en salud pública, pues este reporte permite analizar datos y posteriormente definir acciones, dentro de este ámbito, con el objetivo de reducir los casos de morbilidad y mortalidad
        Separador.mt-0

    .row.align-items-center.my-5.col-lg-10.m-auto        
      .col-auto
        figure
          img(src='@/assets/curso/tema3/2.png').m-auto(data-aos="fade-right")
      .col
        p(data-aos="fade-up") Un claro ejemplo corresponde al registro de casos de dengue grave, cuya notificación de caso debe ser inmediata, ya que este tipo de situaciones demandan una respuesta oportuna de los programas de prevención y control de las ETV con el objeto de identificar las causas que llevaron a que un caso llegara a una fase clínicamente avanzada, también con el fin de buscar otros posibles casos, identificar incremento de casos en el área de riesgo, así como implementar las medidas de inspección de criaderos de mosquito Aedes aegypti; realizar el reordenamiento del entorno, generar las acciones de prevención y control con la comunidad y en caso de ser necesario (brotes) realizar las acciones de control químico.
      



</template>

<script>
export default {
  name: 'Tema3',
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
