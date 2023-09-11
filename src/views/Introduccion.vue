<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p Los procesos y procedimientos de selección y adquisición de medicamentos y dispositivos médicos son parte vital del funcionamiento de un servicio farmacéutico, por lo cual es necesario que estos se lleven a cabo cumpliendo en todo momento con los protocolos de calidad establecidos por la normatividad legal vigente. Lo que permite que esto sea posible, es la implementación de un sistema de gestión de la calidad que verifique y controle, constantemente, la forma de operación de dichos procesos y garantizar la perfección en la calidad de los mismos.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      p En este componente formativo, se abordan diferentes temas relacionados con la verificación y control de los procesos y procedimientos de selección y adquisición de medicamentos y dispositivos médicos en un servicio farmacéutico, para que los aprendices reconozcan la importancia y necesidad de la implementación del sistema de gestión de calidad.





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
