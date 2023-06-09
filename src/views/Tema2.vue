<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Dengue en el marco de la política nacional de salud

    .row.align-items-center.mb-5      
      .col
        p(data-aos="fade-up") Es importante mencionar el marco legal internacional, a partir del cual se coordina y armoniza la política nacional, en atención a las directrices dispuestas por la Organización Mundial de la Salud (OMS), 2019, con el reglamento Sanitario Internacional 2005, la Agenda 2030 para el Desarrollo Sostenible y los 17 Objetivos de Desarrollo Sostenible (ODS), donde el ODS 3 sobre la salud y el bienestar hace un llamado a los países para que refuercen su capacidad en materia de alerta temprana, reducción y gestión de riesgos para la salud nacional y mundial. Seguidamente la OPS establece la agenda de salud sostenible 2018-2030 que incluye dentro de sus objetivos “reducir la carga de las enfermedades transmisibles y eliminar las enfermedades desatendidas”, con metas que incluyen, entre otras: “Controlar la transmisión del dengue, el chikungunya, el zika y la fiebre amarilla con un enfoque integrado e intersectorial”. 
        | Para profundizar respecto a la política nacional en el manejo de dengue se debe revisar con atención el siguiente video:
      .col-auto
        figure
          img(src='@/assets/curso/tema2/mosquito2.svg').m-auto(data-aos="fade-right")
          
        figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DrNDokBlZGE" title="Video dengue" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   
    Separador.mt-5

    .cont_2_1.pt-5.pb-5.mt-0(style="position:relative;")
      .titulo-segundo.color-secundario(style="position:relative")
        h2#t_2_1 2.1 Plan decenal de salud pública

    p(data-aos="fade-up" style="position:relative") El Plan Decenal de Salud Pública 2012-2021 fue el instrumento de política adoptado a través de la Resolución 1841 de 2013 del Ministerio de Salud y Protección Social que definió el marco estratégico para la salud pública en Colombia e incorporó los enfoques de derechos, de ciclo de vida, de género, étnico, poblacional y el modelo de determinantes sociales de la salud para el logro de sus tres objetivos estratégicos:
        
    .row.py-3.justify-content-center(data-aos="fade-right")
      .col-lg-10        
        .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #E2E7FE; border-radius: 15px")
          .row
            .col-sm-12.col-lg-3
              img.mx-3(src='@/assets/curso/tema2/1.svg', style="width:200px")
            .col-sm-12.col-lg-9
              ul(style="color:black").lista-ul--color.pt-4                
                li
                  |● Avanzar hacia la garantia del goce efectivo del derecho a la salud.
                li 
                  |● Mejorar las condiciones de vida y salud de la población. 
                li 
                  |● Lograr cero tolerancia frente a la morbilidad. 
      

    p.my-3(data-aos="fade-up" style="position:relative") Según el Ministerio de Salud y Protección Social (2013), dicho Plan contemplaba dentro de la dimensión de vida saludable y enfermedades transmisibles el componente de condiciones y situaciones endemo-epidémicas, definido como:
    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 “Conjunto de intervenciones sectoriales y transectoriales dirigidas a afectar los determinantes sociales y a prevenir, controlar o minimizar los riesgos que propician la aparición de eventos que se caracterizan por presentar endemias focalizadas, escenarios variables de transmisión y patrones con comportamientos seculares, temporales, estacionales y cíclicos en poblaciones de riesgo”, incluyendo dentro de sus objetivos “Contribuir a la reducción de la carga de las Enfermedades Transmitidas por Vectores (Malaria, Dengue, Leishmaniasis, Enfermedad de Chagas), producto de su discapacidad, morbilidad y mortalidad, que afecta a la población colombiana, a través de la implementación, monitoreo, evaluación y seguimiento de la estrategia de gestión integral para las ETV” (p.7).
        p.mb-4 Posicionando el dengue como prioridad en salud pública dentro de la política nacional del decenio, con una meta direccionada a la reducción de la letalidad por dengue.

        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/libro.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white.mb-1 Se debe revisar en el siguiente anexo los nuevos criterios del "Plan Decenal de Salud Pública 2022-2031":
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/plan_decenal.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        Separador

    #t_2_2
    .titulo-segundo.color-secundario
      h2(data-aos="fade-right") 2.2 Estrategia de gestión de las ETV (enfermedades transmitidas por vectores)
    p.mb-4(data-aos="fade-left") La Estrategia de Gestión Integral de las Enfermedades Transmitidas por Vectores (EGI ETV), corresponde al modelo de gestión para lograr la reducción de la carga económica y social producto de las ETV en poblaciones a riesgo y a partir de esta, se definieron los planes estratégicos para la operación de los programas de las 37 direcciones territoriales del país (32 departamentos y 6 distritos), del PDSP 2022-2031. 
    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img.pb-5(src="@/assets/curso/tema2/3.svg" data-aos="zoom-in-up" alt=" PLISA Plataforma de Información en Salud para las Américas (s.f.).")
        figure.movil.mt-0  
          .row.justify-content-center.d-lg-none.d-md-none  
            img.pb-5(src="@/assets/curso/tema2/3.1.svg" data-aos="zoom-in-up" alt=" PLISA Plataforma de Información en Salud para las Américas (s.f.).")
      
        p.mb-5 La gerencia del programa dispone de la inteligencia epidemiológica para realizar la gestión del conocimiento. Las acciones a desarrollar se enmarcan en lo comunitario, entorno hogar, educativo, laboral, institucional, basados en estrategias de promoción de la salud, prevención de transmisión, gestión y atención de contingencias y atención integral de pacientes. 
        p.mb-5 Dicha estrategia ha sido adoptada y adaptada en cada uno de los territorios del país en el marco de los equipos funcionales nacionales y los diferentes espacios intersectoriales, en el desarrollo del programa nacional de las ETV y los subprogramas, que para este caso corresponde al subprograma de arbovirosis (dengue, chikunguña y zika) a través de los planes estratégicos de cada cuatrienio.
        
        .bloque-texto-a__texto.caja_escalada_hover.py-5(style="background-color: #E2E7FE; border-radius: 15px")
          .row
            .col-md-4
              figure.m-4.px-3
                img(src='@/assets/curso/tema2/4.svg', alt='')
            .col-md-8
              p.pt-3.pb-3(data-aos="fade-up") #[strong El actual plan estratégico de arbovirosis 2019 - 2022 incluye seis lineas estratégicas que son: ]
              ul.lista-ul--color
                li
                  i(style="color: #4462FE").fas.fa-circle.fa-xs
                  | Posicionamiento político y administrativo sostenido.
                li
                  i(style="color: #4462FE").fas.fa-circle.fa-xs
                  | Creación de entornos saludables a través de acciones, prevención y control de arbovirosis.
                li
                  i(style="color: #4462FE").fas.fa-circle.fa-xs
                  | Sistema de vigilancia integral de las arbovirosis para la toma de decisiones.
                li
                  i(style="color: #4462FE").fas.fa-circle.fa-xs
                  | Manejo clínico integral de casos de arbovirosis.
                li
                  i(style="color: #4462FE").fas.fa-circle.fa-xs
                  | Detección y atención oportuna de brotes. 
                li
                  i(style="color: #4462FE").fas.fa-circle.fa-xs
                  | Capacidad técnica, operativa y liderazgo técnico del subprograma.               
            
        
        
        .cajon.color-acento-contenido.p-4.mt-0.col-lg-10.m-auto(style="background-color:#F2FBE6;")
          p.mb-0(data-aos="fade-up") Estos objetivos de control como su nombre lo indica, representa aquello que se busca obtener con la aplicación de los controles de seguridad, de tal manera que, en un ejercicio de aplicación, su adopción corresponde a las necesidades y problemas que la organización quiere abordar. 

      Separador.mt-5

    #t_2_3
      .titulo-segundo.color-secundario
        h2(data-aos="fade-right") 2.3 Rutas integrales de atención en salud

      p Las RIAS son las herramientas de implementación de la Línea en Salud Pública del modelo operativo actual en salud.
      p.mb-5 De acuerdo con lo presentado a continuación, se debe revisar e identificar el manejo de las rutas integrales de salud para las ETV:

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
      .tarjeta.tarjeta--azul1
        .p-4.p-lg-5
          SlyderA(tipo="b")
            .row.align-items-center.m-1
              .col-lg-5.mb-4.mb-lg-0
                h4 Resolución 3280 de 2018 
                p Mediante la ruta de promoción y mantenimiento de la salud (Resolución 3280 de 2018), se organizan las atenciones en ordenadores según el tipo de intervención en momentos de curso de vida (primera infancia, infancia, niñez, adolescencia, juventud, adultez y vejez) y entornos (hogar, comunitario, educativo institucional y laboral), en donde el programa aporta al resultado de impacto de personas sin mortalidad evitable y al resultado intermedio de personas que habitan en entornos saludables, medido por el indicador de proporción de focos de ETV controlados con acciones integrales de prevención y control.
              .col-lg-7
                figure
                  img(src='@/assets/curso/tema2/7.png', style="width:650px").m-auto

            .row.align-items-center.m-1
              .col-lg-5.mb-4.mb-lg-0
                h4 Prevención y control de vectores
                p Esta Ruta incluye dentro de las intervenciones colectivas la prevención y control de vectores, definidos como:  #[i “Conjunto de procedimientos para la planificación, organización, implementación, monitoreo y evaluación de actividades para la intervención regular y contingencial de factores de riesgo ambientales y comportamentales orientadas a prevenir o minimizar la propagación de vectores y reducir el contacto entre patógenos y el ser humano”]
              .col-lg-7
                figure
                  img(src='@/assets/curso/tema2/8.png', style="width:650px").m-auto
                  
            .row.align-items-center.m-1
              .col-lg-5.mb-4.mb-lg-0
                h4 Plan Decenal de Salud 2022-2031
                p Establece en el eje estratégico No 4 denominado “Gestión de Riesgos en Salud Pública”, la “Implementación de modelos para la gestión integral de riesgos en salud pública”, lo cual permite avanzar en la ruta de intervenciones para el grupo de riesgo de enfermedades infecciosas transmitidas por vectores, conforme lo estableció la Resolución 3202 de 2016, el cual deber ser implementada y conocida por los diferentes actores del sistema.
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
