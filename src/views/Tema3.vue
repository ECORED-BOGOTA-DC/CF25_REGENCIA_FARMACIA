<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Planes de mejora

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-left") Estos son los mecanismos para vigilar y perfeccionar el rendimiento de los procesos en general del servicio farmacéutico, por lo cual es necesario instaurar objetivos y detectar oportunidades de mejora partiendo de los resultados obtenidos en las auditorías internas o autoevaluaciones.

      p(data-aos="fade-left") Dentro de la mejora continua de la calidad de los procesos existen dos acciones a tomar:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-4
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/img1.svg', alt='imagen decorativa')
            
          h3.text-center.texto-blanco Acción preventiva

          p.text-center.texto-blanco Son todas las acciones que se toman para prevenir una falla en el desarrollo del proceso. 
          
          p.text-center.texto-blanco En el caso de los procesos de selección y adquisición, estas medidas son: los comités que se llevan a cabo mes a mes, la idoneidad del recurso humano que conforma cada comité, la rigurosidad de la elaboración inicial del listado básico de medicamentos y dispositivos médicos, la adherencia del comité de compras al listado básico, la capacitación continua al personal, entre otras.

        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/img2.svg', alt='imagen decorativa')
            
          h3.text-center.texto-blanco Acción correctiva
          p.text-center.texto-blanco Son aquellas que se realizan para erradicar las causas de la falla y evitar que vuelvan a ocurrir.

          p.text-center.texto-blanco En cuanto a los procesos de selección y adquisición, algunas de las medidas correctivas son: la disponibilidad del personal que conforma los comités para reuniones extraordinarias, la sujeción del personal a las decisiones tomadas de forma inmediata, nuevas negociaciones con nuevos proveedores, entre otras.
    




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
