<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Dengue en el marco de la Política nacional de Salud

    .row.align-items-center.mb-5      
      .col
        p(data-aos="fade-up") Es importante mencionar el marco legal internacional, a partir del cual se coordina y armoniza la política nacional, en atención a las directrices dispuestas por la Organización Mundial de la Salud (OMS), 2019, con el reglamento Sanitario Internacional 2005, la Agenda 2030 para el Desarrollo Sostenible y los 17 Objetivos de Desarrollo Sostenible (ODS), donde el ODS 3 sobre la salud y el bienestar hace un llamado a los países para que refuercen su capacidad en materia de alerta temprana, reducción y gestión de riesgos para la salud nacional y mundial. Seguidamente la OPS establece la agenda de salud sostenible 2018-2030 que incluye dentro de sus objetivos “reducir la carga de las enfermedades transmisibles y eliminar las enfermedades desatendidas”, con metas que incluyen, entre otras: “Controlar la transmisión del dengue, el chikungunya, el zika y la fiebre amarilla con un enfoque integrado e intersectorial”. 
        | Para profundizar respecto a la política nacional en el manejo de dengue se debe revisar con atención el siguiente video:
      .col-auto
        figure
          img(src='@/assets/curso/tema2/mosquito2.svg').m-auto(data-aos="fade-right")
          
        figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/" title="Video dengue" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   
    Separador.mt-5

    .cont_2_1.pt-5.pb-5.mt-0(style="position:relative;")
      .titulo-segundo(style="position:relative")
        h2#t_2_1 2.1 Plan Decenal de Salud Pública

    p(data-aos="fade-up" style="position:relative") El Plan Decenal de Salud Pública 2012-2021 fue el instrumento de política adoptado a través de la Resolución 1841 de 2013 del Ministerio de Salud y Protección Social que definió el marco estratégico para la salud pública en Colombia e incorporó los enfoques de derechos, de ciclo de vida, de género, étnico, poblacional y el modelo de determinantes sociales de la salud para el logro de sus tres objetivos estratégicos:
        
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        figure
          img.pb-5(src="@/assets/curso/tema2/1.png" data-aos="zoom-in-up")

    p(data-aos="fade-up" style="position:relative") Según el Ministerio de Salud y Protección Social (2013), dicho Plan contemplaba dentro de la dimensión de vida saludable y enfermedades transmisibles el componente de condiciones y situaciones endemo-epidémicas, definido como:
    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 “conjunto de intervenciones sectoriales y transectoriales dirigidas a afectar los determinantes sociales y a prevenir, controlar o minimizar los riesgos que propician la aparición de eventos que se caracterizan por presentar endemias focalizadas, escenarios variables de transmisión y patrones con comportamientos seculares, temporales, estacionales y cíclicos en poblaciones de riesgo”, incluyendo dentro de sus objetivos “Contribuir a la reducción de la carga de las Enfermedades Transmitidas por Vectores (Malaria, Dengue, Leishmaniasis, Enfermedad de Chagas), producto de su discapacidad, morbilidad y mortalidad, que afecta a la población colombiana, a través de la implementación, monitoreo, evaluación y seguimiento de la estrategia de gestión integral para las ETV” (p.7).
        p.mb-4 Posicionando el dengue como prioridad en salud pública dentro de la política nacional del decenio, con una meta direccionada a la reducción de la letalidad por dengue.

        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/libro.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.text-white.mb-1 Lineamientos normativos para interpretación, traducción y discapacidad
                  p.text-small.text-white Denominación y normativa.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/plan_decenal.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        Separador

    #t_2_2
    .titulo-segundo.color-secundario
      h2(data-aos="fade-right") 2.2 Estrategia de Gestión Integral de las ETV (Enfermedades Transmitidas por Vectores)
    p.mb-4(data-aos="fade-left") La Estrategia de Gestión Integral de las Enfermedades Transmitidas por Vectores (EGI ETV), corresponde al modelo de gestión para lograr la reducción de la carga económica y social producto de las ETV en poblaciones a riesgo y a partir de esta, se definieron los planes estratégicos para la operación de los programas de las 37 direcciones territoriales del país (32 departamentos y 6 distritos), del PDSP 2022-2031. 
    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        figure
          img.pb-5(src="@/assets/curso/tema2/3.png" data-aos="zoom-in-up")
        p.mb-5 Dicha estrategia ha sido adoptada y adaptada en cada uno de los territorios del país en el marco de los equipos funcionales nacionales y los diferentes espacios intersectoriales, en el desarrollo del programa nacional de las ETV y los subprogramas, que para este caso corresponde al subprograma de arbovirosis (dengue, chikunguña y zika) a través de los planes estratégicos de cada cuatrienio
        figure
          img.pb-0.my-0(src="@/assets/curso/tema2/4.png" data-aos="zoom-in-up")
          .cajon.color-secundario.p-4.mt-0.col-lg-10.m-auto(style="background-color:#F2FBE6;")
            p.mb-0(data-aos="fade-up") Estos objetivos de control como su nombre lo indica, representa aquello que se busca obtener con la aplicación de los controles de seguridad, de tal manera que, en un ejercicio de aplicación, su adopción corresponde a las necesidades y problemas que la organización quiere abordar.

    Separador.mt-5

    #t_2_3
    .titulo-segundo.color-secundario
      h2(data-aos="fade-right") 2.3 Rutas Integrales de Atención en Salud

      p A continuación, puede conocer algunas herramientas que permiten la accesibilidad:

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
      .tarjeta.tarjeta--azul1
        .p-4.p-lg-5
          SlyderA(tipo="b")
            .row.align-items-center.m-1
              .col-lg-5.mb-4.mb-lg-0
                h4 SMIL
                p Desarrollado por W3C. Son presentaciones multimedia compuestas por elementos sonoros, videos, imágenes y textos almacenados separadamente y luego presentados simultáneamente cuando se ejecuta la presentación. Se pueden activar subtítulos y descripciones auditivas.
              .col-lg-7
                figure
                  img(src='@/assets/curso/tema2/7.png', style="width:650px").m-auto

            .row.align-items-center.m-1
              .col-lg-5.mb-4.mb-lg-0
                h4 SAMI
                p #[i Synchronized Accesible Media Interchange] es una especificación de Microsoft que incorpora los subtítulos al dispositivo Windows Media Player. Se emplea para describir presentaciones multimedia, es decir, presentaciones en las que se puede combinar texto (con formato), imágenes, audio y video. SMIL es un lenguaje de marcado basado en XML.
              .col-lg-7
                figure
                  img(src='@/assets/curso/tema2/8.png', style="width:650px").m-auto
                  
            .row.align-items-center.m-1
              .col-lg-5.mb-4.mb-lg-0
                h4 Dragon Naturally Speaking
                p Aplicación de reconocimiento de voz para generar subtítulos sin tener que exportar texto de un editor. Es un programa de reconocimiento de voz disponible en varios idiomas, Con él se puede redactar documentos, escribir correos electrónicos, navegar por Internet o usar Windows, todo con muy alta precisión.
              .col-lg-7
                figure
                  img(src='@/assets/curso/tema2/9.png', style="width:650px").m-auto
            



</template>

<script>
export default {
  name: 'Tema2',
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
