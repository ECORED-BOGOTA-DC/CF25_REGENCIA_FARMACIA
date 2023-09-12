<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Los procesos de selección y adquisición de medicamentos y dispositivos médicos deben cumplir con protocolos de calidad establecidos legalmente. La implementación de un sistema de gestión de calidad garantiza la perfección en la operación de estos procesos. El componente formativo aborda la importancia de este sistema para los aprendices.

    p.mb-5 Por lo anterior, es importante reconocer la importancia de las acciones de mejora en selección y adquisición que implican elegir proveedores según políticas y normativas, implementar mejoras basadas en hallazgos y utilizar un sistema integrado de gestión de calidad. Los estándares de calidad y los planes de mejora son fundamentales. Sabiendo esto y para una breve revisión de los temas vistos, puede observar el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="Esquema gráfico que resume lo abordado en el componente formativo, indicando lo relacionado con las acciones de mejora del procesos de selección y adquisición, las cuales son:<br>Sistema Integrado de Gestión (SIG): protocolo diario para actividades y procedimientos.<br>Estándares de calidad en los procesos de selección y adquisición de medicamentos y dispositivos médicos.<br>Planes de mejora: vigilan y perfeccionan el rendimiento de los procesos del servicio farmacéutico.")
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
