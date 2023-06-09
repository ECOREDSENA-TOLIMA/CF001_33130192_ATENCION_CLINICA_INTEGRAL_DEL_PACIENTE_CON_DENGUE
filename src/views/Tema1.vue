<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 ¿Qué es el dengue?

    p.mt-5(data-aos="fade-up") El dengue es una enfermedad viral aguda que es transmitida por la picadura del mosquito hembra de la especie Aedes Aegypti, esta puede afectar a cualquier persona; sin embargo, existe un riesgo mayor de complicaciones en personas mayores de 65 años o con comorbilidades. 
    
    p.mt-2(data-aos="fade-up") Se reconoce un espectro de manifestaciones de la enfermedad que va desde procesos asintomáticos hasta cuadros severos que pueden llevar a la muerte. 
    
    p.mb-5(data-aos="fade-up") Para profundizar en el concepto del dengue se debe revisar con atención el siguiente material:

    figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-0
            template(v-slot:imagen)
              figure
              img(src="@/assets/curso/tema1/1.png" data-aos="zoom-in-up"  alt="Enfermedad viral aguda que puede afectar especialmente niños y adultos mayores, los síntomas son fiebre alta, sarpullido y dolor en los músculos y las articulaciones. En los casos más graves puede haber hemorragia profusa y un shock, que pueden llevar a la muerte.")

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

    figure.movil
      .row.justify-content-center.d-lg-none.d-md-none
        .col-auto
          a.anexo(href="/downloads/info_dengue.pdf" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              b #[ Anexo.] 
              | Profundizar en el concepto del dengue.
      Separador.mt-2

    .cont_1_1(style="position:relative;")
      .titulo-segundo.color-secundario(style="position:relative")
        h2#t_1_1 1.1  Forma de transmisión

    p.mb-5(data-aos="fade-up" style="position:relative") El vector que transmite la enfermedad es un mosquito hembra de la familia 
      b #[i Culicidae]
      |, género Aedes, que tiene dos especies: 
      b #[i Aedes aegypti] 
      | y 
      b #[i Aedes albopictuscomo]
      |; así se muestra en la siguiente figura 1:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-a__texto.pt-5.caja_escalada_hover(style="background-color: #E2E7FE; border-radius: 15px")
          .row.justify-content-center(data-aos="fade-right")
            .col-sm-12.col-lg-8
              .row.justify-content-center(data-aos="fade-right")
                .col-sm-12.col-lg-12
                  .titulo-sexto.mb-5
                    p.mb-0 #[b Figura 1] 
                      i Taxonomía del vector.  

          .row.justify-content-center(data-aos="fade-right")
            .col-lg-8
              figure
                img(src='@/assets/curso/tema1/2.svg', alt='"Taxonomía del vector". En la figura se representa la familia Culiciadae, del género Aedes, y las especies Ae aegypti y Ae albopictus')

          .row.justify-content-center.my-5(data-aos="fade-right")
            .col-sm-12.col-lg-10
              p(data-aos="fade-up" style="position:relative") Solo las hembras del vector se alimentan de sangre (hematófagas), ya que con esta brindan el aporte de nutrientes a los huevos que producen, con preferencia por los mamíferos, entre estos, los humanos, lo que quiere decir que son antropofílicas, puede aclararse a continuación:
        
          .row.justify-content-center(data-aos="fade-right")
            .col-lg-10
              figure
                img.pb-5(src="@/assets/curso/tema1/2.1.png" data-aos="zoom-in-up" alt="Antropofílicas. Se dice del organismo especialmente adaptado para parasitar o infectar al hombre.")

    p(data-aos="fade-up" style="position:relative") El mosquito pasa por cuatro estados evolutivos, tres acuáticos que van de huevo a larva, de larva a pupa y una fase aérea cuando el mosquito es adulto. Este mosquito tiene una vida media de 4 a 6 semanas, donde la hembra adulta puede poner alrededor de 400 a 700 huevos en su vida. El tiempo del ciclo dependerá de las condiciones ambientales y se entiende que en condiciones óptimas varía entre 7 y 14 días aproximadamente. 
    p.m-5(data-aos="fade-up" style="position:relative") En la siguiente infografía se presenta el ciclo de vida del Aedes, se debe revisar con atención el siguiente contenido.

    figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-0
            template(v-slot:imagen)
              figure
              img(src="@/assets/curso/tema1/3.png" data-aos="zoom-in-up" alt="Ciclo de vida del Aedes. En la infografía se representa el ciclo: 1. Huevos, 2. Larva, 3. Crisálida, 4. Adulto. | Huevos: Los mosquitos hembra depositan sus huevos en cualquier receptáculo que contenga agua. | Larva: Cuando los huevos se encuentran en un entorno acuoso, se produce el proceso de incubación, el cual puede durar desde unos cuantos días hasta meses. | Crisálida: Las larvas viven en el agua. Se convierten en crisálidas en tan solo 5 días.  |  Adulto: Las crisálidas viven en el agua. Demoran entre 2 a 3 días en convertirse en mosquitos adultos con capacidad de volar.")

            .tarjeta.color-adicional-2.p-3(x="73%" y="50%" numero="1")
              p.mb-0 #[b Huevos:] Los mosquitos hembra depositan sus huevos en cualquier receptáculo que contenga agua.

            .tarjeta.color-adicional-2.p-3(x="43%" y="80%" numero="2")
              p.mb-0 #[b Larva:] Cuando los huevos se encuentran en un entorno acuoso, se produce el proceso de incubación, el cual puede durar desde unos cuantos días hasta meses.

            .tarjeta.color-adicional-2.p-3(x="10%" y="50%" numero="3")
              p.mb-0 #[b Crisálida:] Las larvas viven en el agua. Se convierten en crisálidas en tan solo 5 días.

            .tarjeta.color-adicional-2.p-3(x="43%" y="20%" numero="4")
              p.mb-0 #[b Adulto:] Las crisálidas viven en el agua. Demoran entre 2 a 3 días en convertirse en mosquitos adultos con capacidad de volar.

    figure.movil.mt-0
      .row.justify-content-center.d-lg-none.d-md-none
        .col-auto
          a.anexo(href="/downloads/info_ciclo.pdf" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              b #[ Anexo.] 
              | Ciclo de vida del Aedes.
          Separador.mt-2

    figure
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-10
          .bloque-texto-a__texto.pt-3.caja_escalada_hover(style="background-color: #F2FBE6; border-radius: 15px")
            .row(style="padding-left:105px; padding-right:105px")
              .col-sm-12.col-lg-5
                figure
                  img.m-0(src="@/assets/curso/tema1/4.png" data-aos="zoom-in-up") 
              .col-sm-12.col-lg-7
                p.mt-3(data-aos="fade-up") El 
                  b #[i Aedes aegypti ] 
                  | también ha sido identificado como vector de otras enfermedades como Chikungunya, Zika y la fiebre del Nilo Occidental.

                p(data-aos="fade-up") Este mosquito se encuentra sobre todo en áreas urbanas y crece en cualquier lugar donde se pueda acumular agua limpia. Por lo general la hembra grávida busca recipientes ubicados en zonas frescas y sombreadas para depositar los huevos, por esto, los sitios de cría son principalmente artificiales en áreas comunitarias: cementerios, terrenos baldíos, entre otros; así como domésticos: neumáticos, floreros, botellas, bebederos de agua, tanques de agua o contenedores de cualquier tipo de recipiente en desuso.
              
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        p.pt-5(data-aos="fade-up" style="position:relative") Revisando el siguiente material se podrá conocer los criaderos más comunes de 
          b #[i Aedes aegypti]
    
    SlyderF.mb-5.text-center(columnas="col-lg-4 col-xl-4")

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E2E7FE")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/5.png', alt='Baldes')

          p.text-center Baldes

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E8E3F0")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/6.png', alt='Macetas')

          p.text-center Macetas
          
      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E2E7FE")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/7.png', alt='Botellas rotas')

          p.text-center Botellas rotas

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E8E3F0")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/8.png', alt='Residuos')

          p.text-center Residuos

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E2E7FE")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/9.png', alt='Tanques')

          p.text-center Tanques

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E8E3F0")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/10.png', alt='Juguetes')

          p.text-center Juguetes

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E2E7FE")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/11.png', alt='Canales para agua lluvia')

          p.text-center Canales para agua lluvia

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E8E3F0")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/12.png', alt='Bebederos')

          p.text-center Bebederos
          
      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E2E7FE")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/13.png', alt='Tinajas de barro')

          p.text-center Tinajas de barro

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E8E3F0")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/14.png', alt='Tanques elevados')

          p.text-center Tanques elevados

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E2E7FE")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/15.png', alt='Agujeros en las copas de los arboles')

          p.text-center Agujeros en las copas de los arboles

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E8E3F0")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/16.png', alt='Charcos')

          p.text-center Charcos

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E2E7FE")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/25.png', alt='Neumáticos')

          p.text-center Neumáticos 

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E8E3F0")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/26.png', alt='Latas vacías')

          p.text-center Latas vacías 

      .tarjeta.bg-8.text-center.p-4
        .tarjeta--boton.p-4(style="background-color: #E2E7FE")
          .row.justify-content-center.mb-0
            .col-12
              figure
                img(src='@/assets/curso/tema1/27.png', alt='Botas de plástico')

          p.text-center Botas de plástico               


    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        h4.m-4(data-aos="fade").text-center 
          b Algunos consejos para combatirlo:
        .row.mb-3

          .col-sm-12.col-md-6.col-lg-3
            .tarjeta.color-secundario.p-4
              .row.justify-content-center.mb-3
                ul
                  li
                    i.fa-xs.fas.fa-circle(style="color: #ADE65F")
                    |  Renovar el agua de recipientes cada 3 días.
          
          .col-sm-12.col-md-6.col-lg-3
            .tarjeta.color-secundario.p-4
              .row.justify-content-center.mb-0
                ul
                  li
                    i.fa-xs.fas.fa-circle(style="color: #ADE65F")
                    |  Lavar muy bien con agua y jabón las paredes internas.

          .col-sm-12.col-md-6.col-lg-3
            .tarjeta.color-secundario.p-4
              .row.justify-content-center.mb-3
                ul
                  li
                    i.fa-xs.fas.fa-circle(style="color: #ADE65F")
                    |  Instalas mosquiteros en puertas y ventanas.

          .col-sm-12.col-md-6.col-lg-3
            .tarjeta.color-secundario.p-4
              .row.justify-content-center.mb-3
                ul
                  li
                    i.fa-xs.fas.fa-circle(style="color: #ADE65F")
                    |  Hacer uso de repelentes.

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
          figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
            .row.justify-content-center(data-aos="fade-right")
              img(src="@/assets/curso/tema1/18.svg" data-aos="zoom-in-up" alt=" iclo de transmisión del dengue. En la infografía se representa que el ciclo de transmisión del dengue inicia con un mosquito que pica a una persona con dengue, por lo que el mosquito se infecta y pica a otra persona sana enfermandola, tambien se observa en la inforgrafía que después de un periodo de incubación que puede estar entre 8 y 12 días (incubación extrínseca). Posteriormente, el mosquito hembra infectado pica a un humano no infectado y le transmite el virus, incubándose por un periodo aproximado de 5 a 7 días (incubación intrínseca). ")
          figure.movil.mt-0
            .row.justify-content-center.d-lg-none.d-md-none        
              img(src="@/assets/curso/tema1/19.svg" data-aos="zoom-in-up")
        
      Separador.mt-3-mb-0

      .cont_1_2.pb-0(style="position:relative;")
      .titulo-segundo.color-secundario(style="position:relative")
        h2#t_1_2 1.2  Epidemiología
      p.mt-1(data-aos="fade-up" style="position:relative") Según la Organización Mundial de la Salud (OMS), 2013, pueden presentarse hasta 390 millones de infecciones por dengue de forma anual, de los cuales cerca de 96 millones presentan manifestaciones clínicas. Se tiene un estimado de 3900 millones de personas de 128 países en riesgo de infección, dado a las condiciones que favorecen su transmisión
        
        .row.justify-content-center.mb-5(data-aos="fade-right")
          .col-lg-12          
            .row 
              .col-md-10.offset-md-1
                .bloque-texto-g.color-primario.p-4
                  .bloque-texto-g__img(
                    :style="{'background-image': `url(${require('@/assets/curso/tema1/20.png')})`}"
                  )
                  .bloque-texto-g__texto.p-4.my-4
                    p.pt-1.pb-3(data-aos="fade-up") La clave es la identificación temprana y la comprensión de los problemas clínicos durante las diferentes fases de la enfermedad, lo que da lugar a un enfoque racional del abordaje de casos y una buena respuesta clínica.
                      br

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-12
          .bloque-texto-a__texto.pt-5.caja_escalada_hover(style="background-color: #E8E3F0")
            
            .row.justify-content-center.my-2(data-aos="fade-right")
              .col-sm-12.col-lg-10
                p(data-aos="fade-up" style="position:relative") Según la organización Panamericana de la Salud (OPS), para la región de las Américas, se estiman 500 millones de personas en riesgo de transmisión, con un incremento exponencial en la incidencia durante la última década, pasando de 1.5 millones de casos acumulados en la década del 80 a cerca de 16 millones de casos de 2010 a 2019 y una presentación de brotes en los años 2010, 2013, 2016, 2019 y parte de 2020, siendo el año 2019 el de mayor magnitud con cerca 3,19 millones de casos seguido del año 2016 con 2,69 millones de casos, los cuales se pueden vislumbrar en la siguiente figura:
          
            .row.justify-content-center(data-aos="fade-right")
              .col-sm-12.col-lg-10
                .col-sm-12.col-lg-12
                  .titulo-sexto.mb-5
                    p.mb-0 #[b Figura 2] 
                      i Casos de dengue en la región de las Américas 1980 a 2022.       

            
            .row.justify-content-center(data-aos="fade-right")
              .col-lg-10
                figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
                  img.pb-5(src="@/assets/curso/tema1/21.svg" data-aos="zoom-in-up" alt="Casos de dengue en la región de las Américas 1980 a 2022. En la gráfica se relaciona los casos de dengue en la región de Las Americas, con un total de 1.633.205 casos, confirmados 759.378 casos, Graves 1.979 casos, y muertos 622. Igualmente se observa aumento en los años 2010, 2013, 2015, 2016, 2019 y 2020.")
                figure.movil.mt-0  
                  .row.justify-content-center.d-lg-none.d-md-none  
                    img.pb-5(src="@/assets/curso/tema1/21.1.svg" data-aos="zoom-in-up" alt= "Casos de dengue en la región de las Américas 1980 a 2022. En la gráfica se relaciona los casos de dengue en la región de Las Americas, con un total de 1.633.205 casos, confirmados 759.378 casos, Graves 1.979 casos, y muertos 622. Igualmente se observa aumento en los años 2010, 2013, 2015, 2016, 2019 y 2020.")
              
              .col-md-10.offset-0.mb-4.mb-md-4
                .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #F6F6F6;")
                  p.px-3.pt-1.pb-1(data-aos="fade-up") Nota. PLISA Plataforma de Información en Salud para las Américas (s.f.).
                       
        .row.justify-content-center.mb-0(data-aos="fade-right")
          .col-lg-12    
            .row.justify-content-center(data-aos="fade-right")
              .col-lg-10
              .col-md-10.offset-0.mb-4.mb-md-4
                .row.align-items-center.mb-0
                  .col-auto         
                    p.mt-4.pb-0(data-aos="fade-up" style="position:relative") En Colombia, el Dengue es una enfermedad endémica con presentación de casos durante todo el año y un comportamiento con ciclos de interepidémicos cada tres años, con una magnitud cercana a 58.000 casos y 76 muertes promedio en años endémicos (2011, 2012, 2014, 2015, 2017 y 2018); mientras en los años epidémicos es de cerca de 127.000 casos de dengue y 174 muertes promedio anual en los años epidémicos (2010, 2013, 2016 y 2019), las anteriores cifras se pueden verificar en la siguiente figura 3:

          .titulo-sexto.mb-0
            p.mb-0 #[b Figura 3] 
              i Casos notificados de dengue en Colombia 2008 a 2021.  
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-10
          figure.mb-5
            img(src="@/assets/curso/tema1/22.svg" data-aos="zoom-in-up" alt="Casos notificados de dengue en Colombia 2008 a 2021. En la figura se representa los casos comparados desde el 2012 a 2021, con un aumento en los años 2013, 2016, 2019 y 2020.")
            figcaption.bg-gray.pb-2 
              p.mb- Nota. SISPRO, Ministerio de Salud y Protección Social. Sistema de información de Vigilancia epidemiológica, Instituto Nacional de Salud (s.f.).
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
                  img.px-md-0(src="@/assets/curso/tema2/6.png" alt="Estratificación de riesgo de dengue, Colombia, año 2020. En la figura se representa el mapa de Colombia identificando las regiones con muy alta transmisión como La Guajira, Cesar, Magdalena, Bolivar, Cordoba, Antioquia, Norte de Santander, Santander, Tolima, Risaralda, Valle del Cauca, Huila, Casanare, Meta, Guaviare, Caqueta, Putumayo y Nariño. También se observan los departamentos con alta transmisión, mediana transmisión, baja transmisión, sin transmisión con vector, sin transmisión sin vector y sin riesgo")

        p.mt-1(data-aos="fade-up" style="position:relative") La presentación y persistencia de dengue en el territorio nacional es el resultado de la interacción de causas generadas por una serie de determinantes de la salud (los macro y micro determinantes), se puede conocerlos a continuación:
            


      .row.justify-content-left.mb-5
        .col-sm-12.col-lg-6.mt-2
          .tarjeta--boton.color-secundario.p-4.min-height 
            .crd.crd--avatarHorizontal.crd--first.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/tema1/per.svg", alt="alt").img250
                .col
                  h3.mb-2.mx-3 Macro-determinantes  
                  p.caja-mm Se encuentran las condiciones geográficas como la ubicación (altitud), la variabilidad climática, los socioeconómicos (la urbanización no planificada, las condiciones y calidad de vida de la población), los culturales, (los que inciden en aspectos conductuales), los socioeconómicos (el bajo desarrollo económico, la falta de gestión y respuesta local e institucional).

        .col-sm-12.col-lg-6.mt-2
          .tarjeta--boton.color-secundario.p-4.min-height 
            .crd.crd--avatarHorizontal.crd--first.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/tema1/mos.svg", alt="alt").img250
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
                figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
                  img(src='@/assets/curso/tema1/24.png', alt='"Principales determinantes en salud para dengue en Colombia". En la infografía se representa los Macro-determinantes como: Sociales económicos, estilos de vida, factores ambientales, igualmente los Micro-determinantes como: factores de huésped, factores de agente infeccioso, factores de vector.')

              .tarjeta.color-adicional-2.p-3(x="12%" y="32%" numero="+")
                p.mb-0 #[b Sociales económicos:] 
                  p.m-0(style="position:relative") ● Nivel educativo.
                  p.m-0(style="position:relative") ● Ingreso per cápita. 
                  p.m-0(style="position:relative") ● Nivel socioeconómico.
                  p.m-0(style="position:relative") ● Prestación de servicios de salud.
                  p.m-0(style="position:relative") ● Crecimiento poblacional.
                  p.m-0(style="position:relative") ● Procesos de migración.
                  p.m-0(style="position:relative") ● Capacidad de respuesta territorial.

              .tarjeta.color-adicional-2.p-3(x="12%" y="59%" numero="+")
                p.mb-0 #[b Estilos de vida:] 
                  p.m-0(style="position:relative") ● Autocuidado.
                  p.m-0(style="position:relative") ● Costumbres.
                  p.m-0(style="position:relative") ● Conocimiento de la enfermedad.
                  p.m-0(style="position:relative") ● Prácticas inadecuadas de almacenamiento de agua.

              .tarjeta.color-adicional-2.p-3(x="12%" y="87%" numero="+")
                p.mb-0 #[b Factores ambientales:]
                  p.m-0(style="position:relative") ● Área geográfica y clima.
                  p.m-0(style="position:relative") ● Vivienda.
                  p.m-0(style="position:relative") ● Existencia y continuidad del servicio de acueducto.
                  p.m-0(style="position:relative") ● Disposición de residuos sólidos.

              .tarjeta.color-adicional-2.p-3(x="89%" y="31%" numero="+")
                      p.mb-0 #[b Factores de huésped:] 
                        p.m-0(style="position:relative") ● Edad.
                        p.m-0(style="position:relative") ● Estado inmunitario.
                        p.m-0(style="position:relative") ● Condiciones de salud específicas.

              .tarjeta.color-adicional-2.p-3(x="89%" y="58%" numero="+")
                p.mb-0 #[b Factores del agente infeccioso:]
                  p.m-0(style="position:relative") ● Serotipos del virus.
              
              .tarjeta.color-adicional-2.p-3(x="89%" y="86%" numero="+")
                p.mb-0 #[b Factores del vector:] 
                  p.m-0(style="position:relative") ● Abundancia y focos de proliferación.
                  p.m-0(style="position:relative") ● Preferencia y disponibilidad de huéspedes.
                  p.m-0(style="position:relative") ● Susceptibilidad a la infección.
                  p.m-0(style="position:relative") ● Frecuencia de alimentación.
                  p.m-0(style="position:relative") ● Densidad de hembra.

            figure.movil
              .row.justify-content-center.d-lg-none.d-md-none
                .col-auto
                  a.anexo(href="/downloads/info_principales.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      b #[ Anexo.] 
                      | Principales determinantes en salud para dengue en Colombia.
              Separador.mt-2
      
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
