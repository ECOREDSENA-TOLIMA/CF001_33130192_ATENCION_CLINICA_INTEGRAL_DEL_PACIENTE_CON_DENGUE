<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 ¿Qué es el dengue?

    p.mt-5(data-aos="fade-up") El dengue es una enfermedad viral aguda que es transmitida por la picadura del mosquito hembra de la especie Aedes Aegypti, está puede afectar a cualquier persona; sin embargo, existe un riesgo mayor de complicaciones en personas mayores de 65 años o con comorbilidades. 
    
    p.mt-5(data-aos="fade-up") Se reconoce un espectro de manifestaciones de la enfermedad que va desde procesos asintomáticos hasta cuadros severos que pueden llevar a la muerte. 
    
    p.mt-5(data-aos="fade-up") Para profundizar en el concepto del dengue se debe revisar con atención el siguiente material:

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
            img(src="@/assets/curso/tema1/1.png" data-aos="zoom-in-up")

          .tarjeta.color-adicional-2.p-3(x="46%" y="20%" numero="1")
            p.mb-0 #[b Concepto:] Es un virus RNA (Ácido Ribonucleico) que pertenece al género Flavivirus, de la familia Flaviviridae que, a la vez, pertenece al grupo de los Arbovirus, que quiere decir virus transmitidos por artrópodos; así como el virus Chikungunya, Zika o la encefalitis.

          .tarjeta.color-adicional-2.p-3(x="33%" y="50%" numero="2")
            p.mb-0 #[b Flaviviridae:] Es una familia de virus que se propagan principalmente por vectores artrópodos, la etimología del nombre de esta familia proviene del latín Flavus, que significa amarillo. Los flavivirus son virus pequeños (40 - 60 nm).

          .tarjeta.color-adicional-2.p-3(x="50%" y="50%" numero="3")
            p.mb-0 #[b Flavivirus:] Virus transmitidos por artrópodos, principalmente por especies de mosquitos de los géneros Aedes y Culex que se detectan principalmente en zonas tropicales y subtropicales.

          .tarjeta.color-adicional-2.p-3(x="66.5%" y="50%" numero="4")
            p.mb-0 #[b Virus dengue:] Enfermedad viral aguda que puede afectar especialmente niños y adultos mayores, los síntomas son fiebre alta, sarpullido y dolor en los músculos y las articulaciones. En los casos más graves puede haber hemorragia profusa y un shock, que pueden llevar a la muerte.

          .tarjeta.color-adicional-2.p-3(x="83.5%" y="43%" numero="5")
            p.mb-0 #[b Serotipos:] Existen 4 serotipos de este virus: DENV-1, DENV-2, DENV-3 y DENV-4. Cada infección por un serotipo produce inmunidad permanente contra este. La infección sucesiva con dos o más serotipos diferentes incrementa el riesgo de la enfermedad lo que se debe al fenómeno denominado “amplificación de la infección dependiente de anticuerpos”.
          
          .tarjeta.color-adicional-2.p-3(x="46%" y="90%" numero="6")
            p.mb-0 #[b En Colombia:] Existe evidencia de la circulación de los cuatro serotipos del virus y la proporción de serotipos circulantes por direcciones territoriales de salud, es decir, departamentos y distritos se constituye como uno de los indicadores de vigilancia en salud pública para medir el riesgo de transmisión, presentación de brotes y complicación de casos.

    Separador.mt-5

    .cont_1_1.pt-5.pb-5.mt-5(style="position:relative;")
      .titulo-segundo(style="position:relative")
        h2#t_1_1 1.1  Forma de transmisión

    p(data-aos="fade-up" style="position:relative") El vector que transmite la enfermedad es un mosquito hembra de la familia 
      b Culicidae
      |, género Aedes, que tiene dos especies: 
      b Aedes aegypti 
      | y 
      b Aedes albopictuscomo
      |; así se muestra en la siguiente figura 1:

    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        figure
          img.pb-5(src="@/assets/curso/tema1/2.png" data-aos="zoom-in-up")

    p(data-aos="fade-up" style="position:relative") El mosquito pasa por cuatro estados evolutivos, tres acuáticos que van de huevo a larva, de larva a pupa y una fase aérea cuando el mosquito es adulto. Este mosquito tiene una vida media de 4 a 6 semanas, donde la hembra adulta puede poner alrededor de 400 a 700 huevos en su vida. El tiempo del ciclo dependerá de las condiciones ambientales y se entiende que en condiciones óptimas varía entre 7 y 14 días aproximadamente. 
    p.mt-5(data-aos="fade-up" style="position:relative") En la siguiente infografía se presenta el ciclo de vida del Aedes, se debe revisar con atención el siguiente contenido.

    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        figure
          img(src="@/assets/curso/tema1/3.png" data-aos="zoom-in-up")      
          img(src="@/assets/curso/tema1/4.png" data-aos="zoom-in-up")      

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        p.py-5(data-aos="fade-up" style="position:relative") Revisando el siguiente material se podrá conocer los criaderos más comunes de 
          b Aedes aegypti
    
    SlyderF.mb-5.text-center(columnas="col-lg-4 col-xl-4")
      .tarjeta.bg-8.text-center.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/5.png' alt='1')
      .tarjeta.bg-8.text-center.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/6.png' alt='2')
      .tarjeta.bg-8.text-center.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/7.png' alt='3')
      .tarjeta.bg-8.text-center.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/8.png' alt='4')
      .tarjeta.bg-8.text-center.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/9.png' alt='5')
      .tarjeta.bg-8.text-center.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/10.png' alt='6')
      .tarjeta.bg-8.text-center.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/11.png' alt='7')
      .tarjeta.bg-8.text-center.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/12.png' alt='8')

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        h4.m-4(data-aos="fade").text-center 
          b Algunos concejos para combatirlo:

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        figure
          img(src="@/assets/curso/tema1/17.png" data-aos="zoom-in-up")

          p.mt-4(data-aos="fade-up" style="position:relative") De acuerdo con la literatura, el vector asociado a la transmisión del dengue es el Aedes aegypti que en Colombia ha sido reportado por parte de la vigilancia entomológica por debajo de los 2.200 metros de altura sobre el nivel del mar (m s. n. m.) en cerca de 846 municipios de los 32 departamentos de Colombia, con una mayor densidad en la región Central y Caribe
    
    .row.align-items-center.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema1/mosquito1.svg').m-auto(data-aos="fade-right")
      .col
        p.mb-0(data-aos="fade-left" style="color: #4462FE") 
          b Ciclo de transmisión

      p.mt-5(data-aos="fade-up" style="position:relative") El proceso de infección del dengue se da cuando un mosquito hembra pica a una persona infectada e ingiere la sangre con el virus, por lo que el mosquito se infecta después de un periodo de incubación que puede estar entre 8 y 12 días (incubación extrínseca). Posteriormente, el mosquito hembra infectado pica a un humano no infectado y le transmite el virus, incubándose por un periodo aproximado de 5 a 7 días (incubación intrínseca), liberando grandes cantidades de virus (viremia) que permanece por un periodo máximo estimado de siete días en el humano.
      p.mt-3(data-aos="fade-up" style="position:relative") Para profundizar en el ciclo de transmisión del dengue se debe revisar con atención el siguiente material:
      
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-10
          figure
            img(src="@/assets/curso/tema1/18.png" data-aos="zoom-in-up")      
            img(src="@/assets/curso/tema1/19.png" data-aos="zoom-in-up")
        
      Separador.mt-3

      .cont_1_2.pb-5(style="position:relative;")
      .titulo-segundo(style="position:relative")
        h2#t_1_2 1.2  Epidemiología
      p.mt-1(data-aos="fade-up" style="position:relative") Según la Organización Mundial de la Salud (OMS), 2013, pueden presentarse hasta 390 millones de infecciones por dengue de forma anual, de los cuales cerca de 96 millones presentan manifestaciones clínicas. Se tiene un estimado de 3900 millones de personas de 128 países en riesgo de infección, dado a las condiciones que favorecen su transmisión
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-10
          figure
            img(src="@/assets/curso/tema1/20.png" data-aos="zoom-in-up")

      .row.align-items-center.mb-5
        .col-auto
          figure
            img.pt-3(src='@/assets/curso/tema1/21.png').m-auto(data-aos="fade-right")
            .row.justify-content-center(data-aos="fade-right")
              .col-lg-10
                p.mt-4.pb-2(data-aos="fade-up" style="position:relative") En Colombia, el Dengue es una enfermedad endémica con presentación de casos durante todo el año y un comportamiento con ciclos de interepidémicos cada tres años, con una magnitud cercana a 58.000 casos y 76 muertes promedio en años endémicos (2011, 2012, 2014, 2015, 2017 y 2018); mientras en los años epidémicos es de cerca de 127.000 casos de dengue y 174 muertes promedio anual en los años epidémicos (2010, 2013, 2016 y 2019), las anteriores cifras se pueden verificar en la siguiente figura 3:

        .titulo-sexto.color-acento-contenido.mb-1
          p.mb-0 #[b Figura 3] Casos notificados de dengue en Colombia 2008 a 2021.  
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-10
          figure
            img(src="@/assets/curso/tema1/22.png" data-aos="zoom-in-up")
            figcaption.bg-gray.pb-2 
              p.mb-0 Nota. SISPRO, Ministerio de Salud y Protección Social. Sistema de información de Vigilancia epidemiológica, Instituto Nacional de Salud (s.f.).
          .col-lg-12.pt-3  
            .tarjeta.bg.color-secundario.p-3.mb-4(data-aos="fade-down")
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-3.px-md-4
                  img.px-md-1(src="@/assets/curso/tema1/23.png")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-3 Colombia tiene 824 municipios en los cuales se reporta transmisión de casos, 62 están categorizados como de muy alta transmisión y 78 de alta transmisión, correspondientes a las áreas con mayor concentración de casos y persistencia en el tiempo. Estas son las áreas priorizadas para realizar el plan intensificado de acciones de promoción, prevención y control de dengue, en la siguiente figura se puede observar dicha estratificación
                      .row.justify-content-around.align-items-center
                        .col-3.mb-3.mb-sm-0
                          a.boton.color-acento-botones.lnk(@click="modal1 = true")
                            span Ver Imagen
                            i.fas.fa-search
                            .indicador--click(v-if="mostrarIndicador")
            ModalA(:abrir-modal.sync="modal1")                
              .col-lg-12.p-0.m-0
                figure                    
                  img.px-md-0(src="@/assets/curso/tema2/6.png")

        p.mt-1(data-aos="fade-up" style="position:relative") La presentación y persistencia de dengue en el territorio nacional es el resultado de la interacción de causas generadas por una serie de determinantes de la salud (los macro y micro determinantes), se puede conocerlos a continuación:
            
          .col-lg-12.pt-3  
            .tarjeta.p-3.mb-4(data-aos="fade-down")
              .row.justify-content-around.align-items-center
                .col-1.col-sm-10.col-lg-10.px-md-4
                  .row.mb-3
                    .col-md-6.mb-6.mb-lg-0.px-3                      
                        .tarjeta.color-adicional-1.tarj-hover.min-height                                                                            
                          .crd.crd--avatarHorizontal.crd--first.py-5
                            .row.align-items-center
                              .col-auto
                                figure
                                  img.icono-medio(src="@/assets/curso/tema1/per.svg", alt="alt").img100
                              .col
                                h3.mb-2.mx-3 Macro-determinantes  
                                p.caja-mm Se encuentran las condiciones geográficas como la ubicación (altitud), la variabilidad climática, los socioeconómicos (la urbanización no planificada, las condiciones y calidad de vida de la población), los culturales, (los que inciden en aspectos conductuales), los socioeconómicos (el bajo desarrollo económico, la falta de gestión y respuesta local e institucional).


                    .col-md-6.mb-6.mb-lg-0.px-3                      
                        .tarjeta.color-adicional-1.tarj-hover.min-height                                                                          
                          .crd.crd--avatarHorizontal.crd--first.py-5
                            .row.align-items-center
                              .col-auto
                                figure
                                  img.icono-medio(src="@/assets/curso/tema1/mos.svg", alt="alt").img100
                              .col
                                h3.mb-2.mx-3 Micro-determinantes 
                                p.caja-mm Están influenciados por las características del virus, por ejemplo, la circulación de los 4 serotipos que favorece presentación de brotes y formas graves, el huésped que representa esa población vulnerable, las condiciones inmunológicas que pueden favorecer el desarrollo de la enfermedad casos, entre otros.
        
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-10
          p.py-3(data-aos="fade-up" style="position:relative") Para conocer los principales determinantes en salud para el dengue en Colombia se debe observar la información que se presenta en la siguiente infografía:
        .row.justify-content-center(data-aos="fade-right")
          .col-lg-10
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/24.png', alt='Tipos de residuos según cuatro criterios principales')

              .tarjeta.color-adicional-2.p-3(x="12%" y="32%" numero="+")
                p.mb-0 #[b Clasificación de los residuos según grado de peligrosidad:] Se clasifican en residuos peligrosos y no peligrosos esto quiere decir según el grado de peligrosidad al medio ambiente o a la salud humana.

              .tarjeta.color-adicional-2.p-3(x="12%" y="59%" numero="+")
                p.mb-0 #[b Clasificación de los residuos según su origen:] Esto quiere decir si son de origen doméstico proveniente de los hogares, origen comercial si son propias del comercio, industrial si son del sector industrial, de escombros y residuos de construcción del sector de construcción, residuos sanitarios si son de centros y establecimientos sanitarios, residuos mineros si son de minas, residuos agrícolas si son del sector agrícola

              .tarjeta.color-adicional-2.p-3(x="12%" y="87%" numero="+")
                p.mb-0 #[b Clasificación de los residuos según su aprovechamiento:] Se clasifican en aprovechables y no aprovechables, esto depende de cada caso en particular del residuo que se esté tratando y su estado (calidad del residuo).

              .tarjeta.color-adicional-2.p-3(x="89%" y="31%" numero="+")
                p.mb-0 #[b Clasificación de los residuos según su biodegradabilidad:] Quiere decir si es orgánico o inorgánico.

              .tarjeta.color-adicional-2.p-3(x="89%" y="58%" numero="+")
                p.mb-0 #[b Clasificación según su composición:] Clasificación según tipos de materiales o componentes químicos de lo que esté hecho.
              
              .tarjeta.color-adicional-2.p-3(x="89%" y="86%" numero="+")
                p.mb-0 #[b Clasificación según su composición:] Clasificación según tipos de materiales o componentes químicos de lo que esté hecho.


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
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
