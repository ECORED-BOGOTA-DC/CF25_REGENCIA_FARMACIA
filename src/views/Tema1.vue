<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistema Integrado de Gestión (SIG)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-up") Un SIG es un instrumento que instaura el protocolo que se debe seguir todos los días al realizar una actividad o procedimiento, con el propósito de:

        ul.lista-ul--color.mb-3
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color: #7E5EE3")
            | Aprovechar al máximo cada uno de los recursos disponibles.       
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color: #7E5EE3")
            | Mejorar la institución.   
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color: #7E5EE3")
            | Minimizar costos.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color: #7E5EE3")
            | Aumentar el rendimiento en general  de una organización.   

        p(data-aos="fade-up") Dentro de una organización, cada dependencia puede tener su propio sistema de gestión, aunque, por mantenimiento y manejo, lo mejor es unir en un mismo sistema las dependencias que por similitud lo permitan. De este modo se tienen:

        ul.lista-ul--color.mb-3
          li(data-aos="fade-up") 
            i.fas.fa-atom(style="color: #7E5EE3")
            | Sistema de gestión de la calidad.
          li(data-aos="fade-up") 
            i.fas.fa-atom(style="color: #7E5EE3")
            | Sistema de gestión de seguridad.
          li(data-aos="fade-up") 
            i.fas.fa-atom(style="color: #7E5EE3")
            | Salud en el trabajo, entre otros. 

      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='imagen decorativa')


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      p A nivel farmacéutico, el sistema que rige es el Sistema de Gestión de la Calidad (SGC), el cual está documentado normativamente por la Resolución 1403 de 2007 - capítulo IV – Sistemas de gestión de la calidad (p. 9). También es importante tener presente que, cuando se trabaja con el SIG, la gestión de este, se realiza por medio de procesos y procedimientos, por lo cual todo establecimiento y servicio farmacéutico debe documentar los procesos generales y los especiales que realice.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="flip-down")
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 La selección y adquisición de medicamentos y dispositivos médicos son dos de los procesos generales según la Resolución 1403 del 2007.

      p(data-aos="fade-left") Además, el SIG tiene varias ventajas, como son:

      ul.lista-ul--color.mb-3
        li(data-aos="fade-up") 
          i.fas.fa-atom(style="color: #7E5EE3")
          | Cada una de las actividades maximizan su rendimiento de forma consecutiva.
        li(data-aos="fade-up") 
          i.fas.fa-atom(style="color: #7E5EE3")
          | Minimiza la cantidad de manuales de gestión, el esfuerzo y la dedicación
        li(data-aos="fade-up") 
          i.fas.fa-atom(style="color: #7E5EE3")
          | Se evita la duplicidad de procedimientos e instructivos a seguir.
        li(data-aos="fade-up") 
          i.fas.fa-atom(style="color: #7E5EE3")
          | Hay mucho más control de la información, entre otras. 






</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
