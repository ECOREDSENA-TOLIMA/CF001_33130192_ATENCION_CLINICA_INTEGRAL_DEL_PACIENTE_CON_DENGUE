(function(e){function a(a){for(var i,o,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&u.push(t[o][0]),t[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],i=!0,o=1;o<n.length;o++){var c=n[o];0!==t[c]&&(i=!1)}i&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"9a24509f","chunk-0206bfa0":"bdfa0da0","chunk-0c047e41":"474edd9a","chunk-13a6037e":"7ea7543c","chunk-18f95272":"ee032482","chunk-25b302c8":"e427670a","chunk-26fc7596":"720ef9f6","chunk-2c06842c":"b9b456f8","chunk-2d0c5615":"c543438f","chunk-2d0e96ec":"eed16829","chunk-2d208d90":"5ddc8300","chunk-2d21d0e2":"e7a7ad5b","chunk-2d22c123":"ca3f9538","chunk-2d2747e2":"a7741052","chunk-2e80bb9a":"35b29020","chunk-319206de":"3116e31a","chunk-32334cb6":"6b65de30","chunk-36769079":"38ad62db","chunk-3c57cd7b":"0db60a85","chunk-4cdd78c0":"9f8c50b3","chunk-4f2d402a":"60e0792c","chunk-515a8379":"d85d498e","chunk-53ccb27e":"3ccc2a28","chunk-55d286b8":"0643df9e","chunk-59974754":"e3f22076","chunk-60cbc06b":"f9ca922d","chunk-659152b8":"55d991fc","chunk-6e1e538a":"10759ab3","chunk-766a929b":"78773ed6","chunk-c796899c":"43246c04","chunk-e8a7823a":"5faeabdd","chunk-f2df7d2c":"6a36155c","chunk-fde47172":"39362287",comple:"17b45c2f",creditos:"d31fec14",glosario:"cb1bfc6d",intro:"a4604f16",referencias:"6aa11c68",sintesis:"c04f20c6",tema1:"a74ead1e",tema2:"7d2e99ab",tema3:"00d2bf61",tema4:"e4266e09"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"f139f2e7","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"bc787e50","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"0f3eeccf","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"a1f05c6e",creditos:"a5a91a6a",glosario:"98debcd3",intro:"31d6cfe0",referencias:"f1b2d66a",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",t=s.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===i||l===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===i||l===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete o[e],m.parentNode.removeChild(m),n(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var i=t[e];if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(a,n){i=t[e]=[a,n]}));a.push(i[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"01fe":function(e,a,n){e.exports=n.p+"img/banner_principal_0.6bbbcca0.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),d=Object(s["a"])(c,o,t,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var g=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=g,h=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Marco normativo y conceptual",descripcionCurso:"En este componente formativo se abordarán los conceptos básicos relacionados con el dengue desde su definición como enfermedad, pasando a la epidemiología en Colombia y las políticas públicas vigentes para contribuir en la reducción de la morbilidad y mortalidad por esta causa, este es un contexto general para los profesionales que llevan a cabo el abordaje clínico de los casos y para la comprensión del dengue como evento de interés en salud pública priorizado dentro del gobierno nacional.",imagenBannerPrincipal:n("fceb"),fondoBannerPrincipal:n("01fe"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"¿Qué es el dengue?",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Forma de transmisión",hash:"t_1_1"},{numero:"1.2",titulo:"Epidemiología",hash:"t_1_2"}]},{nombreRuta:"tema2",numero:"2",titulo:"Dengue en el marco de la política nacional de salud",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Plan decenal de salud pública",hash:"t_2_1"},{numero:"2.2",titulo:"Estrategia de gestión de las ETV (enfermedades transmitidas por vectores)",hash:"t_2_2"},{numero:"2.3",titulo:"Rutas integrales de atención en salud",hash:"t_2_3"}]},{nombreRuta:"tema3",numero:"3",titulo:"Sistema de vigilancia en salud pública: Protocolos y lineamiento de vigilancia en salud pública",desarrolloContenidos:!0},{nombreRuta:"tema4",numero:"4",titulo:"Guías y lineamientos de manejo clínico",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar pdf",download:"downloads/CFA_1_33130192.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"¿Qué es el dengue?",referencia:"Ministerio de Salud y Protección Social. (2022). Dengue.",tipo:"Página web",link:"https://www.minsalud.gov.co/salud/publica/PET/Paginas/dengue.aspx"},{tema:"¿Qué es el dengue?",referencia:"Organización Panamericana de la Salud. (2022). Dengue.",tipo:"Página web",link:"https://www.paho.org/es/temas/dengue"},{tema:"Epidemiología",referencia:"Instituto Nacional de Salud (2022). Acceso a información epidemiológica nacional.",tipo:"Página web",link:"https://www.ins.gov.co/buscador-eventos/Paginas/Vista-Boletin-Epidemilogico.aspx"},{tema:"Estrategia de Gestión Integral de las ETV- EGI ETV",referencia:"Instituto Nacional de Salud (2022). Gestión para la vigilancia entomológica y control de transmisión de dengue. Documento técnico.",tipo:"Documento",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/gestion-vigilancia-entomologica-dengue.pdf"},{tema:"Plan Decenal de Salud Pública: Dimensión de vida saludable y enfermedades transmisibles.",referencia:"Ministerio de Salud y Protección Social. Plan Decenal de Salud Pública. PDSP 2012-2021. La salud en Colombia la construyes tú.",tipo:"Documento",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/PDSP.pdf"},{tema:"Plan Decenal de Salud Pública: Dimensión de vida saludable y enfermedades transmisibles.",referencia:"Resolución Número 1035 DE 2022. [Ministerio de Salud y Protección Social]. Por el cual se adopta el Plan Decenal de Salud Pública 2022-2031 con sus capítulos diferenciales: indígena para los pueblos y comunidades indígenas de Colombia, población víctima de conflicto armado, el Pueblo Rrom y la población negra, afrocolombiana, raizal y palenquera. 14 de junio de 2022.",tipo:"Documento",link:"https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%c3%b3n%20No.%201035%20de%202022.pdf"},{tema:"Estrategia de Gestión Integral de las ETV- EGI ETV",referencia:"Ministerio de Salud y Protección Social. (2017). Lineamiento táctico y operativo de la estrategia de gestión integrada para las enfermedades transmitidas por vectores (EGI-ETV) a nivel territorial.",tipo:"Documento",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/PAI/Lineamiento-Tatico-operativo-egi-Etv.pdf"},{tema:"Estrategia de Gestión Integral de las ETV- EGI ETV",referencia:"Organización Panamericana de la Salud Ministerio de Salud y Protección Social. (2016). Plan estratégico del subprograma de dengue chikunguña 2014- 2021 en el marco de la EGI ETV y articulado al plan nacional mesoamericano de dengue – chikunguña.",tipo:"Documento",link:"http://www.proyectomesoamerica.org:8088/smsp/phocadownload/Institucional/PlanesNacionales/PNDengue/COL%20PN%20Dengue.pdf"},{tema:"Rutas integrales de atención",referencia:"Ministerio de Salud y Protección Social (2016). Ruta de atención de dengue.",tipo:"Documento",link:"https://www.minsalud.gov.co/Documents/NOTICIAS%20OFICINA%20COMUNICACIONES/Salud/dengue/Ruta%20Dengue.pdf"}],glosario:[{termino:"Atención en salud",significado:"Servicios recibidos por los individuos o las poblaciones para promover, mantener y garantizar el bienestar y la salud."},{termino:"Arbovirosis",significado:"Su nombre proviene del inglés “Arthropod-Borne Virus”, que significa “virus transmitidos por artrópodos”."},{termino:"Artrópodo",significado:"Se refiere a animales multicelulares con simetría bilateral cuyo cuerpo está formado por tres regiones, cabeza, tórax y abdomen, con segmentos modificados en cada región, con forma y función específicas y recubiertas por una capa dura compuesta de quitina y que funciona como esqueleto externo, patas articuladas y crecimiento discontinuo por medio de mudas (Ministerio de la Protección Social, Instituto Nacional de Salud, Organización Panamericana de la Salud, 2011)."},{termino:"Dengue",significado:"Enfermedad viral, de carácter endémico-epidémico, transmitida por mosquitos del género Aedes, principalmente por Aedes aegypti en la región de las Américas, que constituye hoy la arbovirosis más importante a nivel mundial en términos de morbilidad, mortalidad e impacto económico. El virus puede causar fiebre, dolores de cabeza, sarpullidos y dolor por todo el cuerpo. La mayoría de los casos de fiebre del dengue son leves y desaparecen por sí solos en aproximadamente una semana."},{termino:"Derecho",significado:"Es el conjunto de normas que establecen las bases de convivencia social y cuyo fin es dotar a todos los miembros de la sociedad de los mínimos de seguridad, certeza, igualdad, libertad y justicia"},{termino:"Enfermedades Transmitidas por Vectores",significado:"Se refiere a los padecimientos en los que el agente causal o infeccioso requiere la participación de un artrópodo como hospedero o transmisor para completar su ciclo de vida y para mantener su población en hospederos vertebrados susceptibles (Ministerio de la Protección Social, Instituto Nacional de Salud, Organización Panamericana de la Salud, 2011)."},{termino:"Epidemiología",significado:"El estudio de la distribución y los determinantes de estados o eventos (en particular de enfermedades) relacionados con la salud y la aplicación de esos estudios al control de enfermedades y otros problemas de salud."},{termino:"Eventos en salud",significado:"Conjunto de sucesos o circunstancias que pueden modificar o incidir en la situación de salud de una comunidad (enfermedad, factores protectores, discapacidad, muerte, factores de riesgo y otros determinantes)."},{termino:"Gestión en Salud Pública",significado:"Es un proceso dinámico, integral, sistemático y participativo bajo el liderazgo y conducción de la autoridad sanitaria, el cual está orientado a que las políticas, planes, programas y proyectos de salud pública se realicen de manera efectiva, coordinada y organizada, entre los diferentes actores del SGSSS (Minsalud, Colombia)."},{termino:"Inter epidémico",significado:"Periodo comprendido entre dos epidemias."},{termino:"Política Pública",significado:"Directrices que fija el estado sobre un asunto de interés común."},{termino:"Salud Pública",significado:"Constituida por el conjunto de políticas que buscan garantizar de una manera integrada, la salud de la población por medio de acciones de salubridad dirigidas tanto de manera individual como colectiva, ya que sus resultados se constituyen en indicadores de las condiciones de vida, bienestar y desarrollo del país. Dichas acciones se realizarán bajo la rectoría del estado y deberán promover la participación responsable de todos los sectores de la comunidad. (República de Colombia, 2007)"},{termino:"Normatividad",significado:"Un conjunto de reglas que tienen como finalidad regular y asegurar las cantidades y características en la producción o servicio de los bienes de consumo entre personas físicas y/o jurídicas."},{termino:"Morbilidad",significado:"Se refiere a la presentación de una enfermedad o síntoma de una enfermedad, o a la proporción de enfermedad en una población (Diccionario NCI, Instituto Nacional de Cáncer, Estados Unidos de América)."},{termino:"Mortalidad",significado:"Tasa de muertes producidas en una población durante un tiempo dado, en general o por una causa determinada (RAE)."},{termino:"Vectores: (Insectos vectores)",significado:"Se definen como aquellos que pueden transmitir enfermedades infecciosas entre personas, o de animales a personas. Muchos de esos vectores son insectos hematófagos que ingieren los microorganismos patógenos junto con la sangre de un portador infectado (persona o animal), y posteriormente los inoculan a un nuevo portador al ingerir su sangre. Se debe tener en cuenta que no todos los insectos hematófagos son vectores de patógenos infecciosos (OMS, 2019) (https://www.who.int/es/news-room/fact-sheets/detail/vector-borne-diseases)."}],referencias:[{referencia:"Organización Mundial de la Salud. (2022). Dengue y dengue grave.",link:"https://www.who.int/es/news-room/fact-sheets/detail/dengue-and-severe-dengue"},{referencia:"Ministerio de Salud y Protección Social. (2022): Sitio dengue.",link:"https://www.minsalud.gov.co/salud/publica/PET/Paginas/dengue.aspx"},{referencia:"Ministerio de Salud y Protección Social (2017). Plan Decenal de Salud Pública 2012-2021.",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/PDSP.pdf"},{referencia:"Ministerio de Salud y Protección Social. (2021). Resolución 1035 de 2022 por el cual se adopta el Plan Decenal de Salud Pública 2022-2031.",link:"https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%c3%b3n%20No.%201035%20de%202022.pdf"},{referencia:"Ministerio de Salud y Protección Social. (2017). Lineamiento táctico y operativo de la Estrategia de Gestión integrada para las enfermedades transmitidas por vectores (EGI ETV) a nivel territorial.",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/PAI/Lineamiento-Tatico-operativo-egi-Etv.pdf"},{referencia:"Organización Panamericana de la Salud, Ministerio de la Protección Social de Colombia, Instituto Nacional de Salud de Colombia. (S.F). Gestión para la vigilancia entomológica y control de la transmisión de dengue.",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/gestion-vigilancia-entomologica-dengue.pdf"},{referencia:"Organización Mundial de la Salud. (2021). Poner fin a la desatención para alcanzar los objetivos de desarrollo sostenible: hoja de ruta sobre enfermedades tropicales desatendidas 2021-2030. Organización Mundial de la Salud",link:"https://www.paho.org/es/documentos/poner-fin-desatencion-para-alcanzar-objetivos-desarrollo-sostenible-hoja-ruta-sobre"},{referencia:"Ministerio de Salud y ´Protección Social. (2022). Lineamiento para la gestión y operación de los programas de Enfermedades Transmitidas por Vectores y Zoonosis y otras consideraciones para la ejecución de transferencias nacionales de funcionamiento. Bogotá.",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ET/lineamiento-transferencias-etv-resolucion-451-de-2022.pdf"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Líder del equipo",centro:"Dirección General"},{nombre:"Norma Constanza Morales",cargo:"Responsable de línea de producción",centro:"Regional Tolima Centro de Comercio y Servicios"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Ángela Rocío Sánchez Ruiz ",cargo:"Experto Temático",centro:"Regional Distrito Capital Centro de Electricidad, Electrónica y Telecomunicaciones. "},{nombre:"Miroslava González H. ",cargo:"Diseñador y Evaluador instruccional ",centro:"Regional Distrito Capital Centro de Gestión Industrial "},{nombre:"Juan Gilberto Giraldo Córtes",cargo:"Diseñador Instruccional",centro:"Regional Tolima Centro de Comercio y Servicios"},{nombre:"Humberto Arias Díaz",cargo:"Diseñador Instruccional",centro:"Regional Tolima Centro de Comercio y Servicios"},{nombre:"María Inés Machado López",cargo:"Metodologa",centro:"Regional Tolima Centro de Comercio y Servicios"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Cristian Mauricio Otálora Clavijo",cargo:"Desarrollador Fullstack",centro:"Regional Tolima Centro de Comercio y Servicios"},{nombre:"Davison Gaitán Escobar",cargo:"Actividad Didáctica",centro:"Regional Tolima Centro de Comercio y Servicios"},{nombre:"Oleg Litvin",cargo:"Animador y Producción audiovisual",centro:"Regional Tolima Centro de Comercio y Servicios"},{nombre:"Oscar Iván Uribe",cargo:"Diseñador web",centro:"Regional Tolima Centro de Comercio y Servicios"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Jorge Bustos Gómez",cargo:"Validación y vinculación en plataforma LMS",centro:"Regional Tolima Centro de Comercio y Servicios"},{nombre:" Gilberto Naranjo Farfán",cargo:"Validación de contenidos accesibles",centro:"Regional Tolima Centro de Comercio y Servicios"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});i["a"].prototype.$config=v;var k=n("9224");i["a"].prototype.$package=k,new i["a"]({router:b,store:h["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.d2a11c34.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.dc3e9990.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.3de43ad0.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},fceb:function(e,a,n){e.exports=n.p+"img/banner-mujer.d45e900e.png"}});
//# sourceMappingURL=app.56f63a6f.js.map