<template>
  <Page>
    <template v-slot:header>
      <h1>Cotizaciones</h1>
      <ButtonLink type="primary" size="lg" to="cotizaciones/nueva">
        Nueva
      </ButtonLink>
    </template>
    <template v-slot:body>
      <Card class="container">
        <Table hoverable />
      </Card>
    </template>
  </Page>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
</style>
