<template>
  <Page>
    <template v-slot:header>
      <h1>Productos</h1>
      <ButtonLink size="lg" type="primary"> Nuevo </ButtonLink>
    </template>
    <template v-slot:body>
      <Card> <Table /> </Card>
    </template>
  </Page>
</template>

<script>
export default {};
</script>

<style></style>
