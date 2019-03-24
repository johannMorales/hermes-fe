<template>
  <Page>
    <template v-slot:header>
      <h1>Cotizaciones de Stickers</h1>
      <ButtonLink to="/productos"> Volver </ButtonLink>
    </template>
    <template v-slot:body>
      <Card class="container">
        <Table :columns="columns" key-name="id" :data="data" />
      </Card>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: "Cotización",
          data: "code"
        },
        {
          name: "Cliente",
          data: "code"
        },
        {
          name: "Fecha",
          data: "code"
        },
        {
          name: "Cantidad",
          data: "code"
        },
        {
          name: "Precio Unitairio",
          data: "code"
        },
        {
          name: "Precio Total",
          data: "code"
        }
      ],
      data: [
        { id: 1, code: "a" },
        { id: 2, code: "b" },
        { id: 3, code: "c" },
        { id: 4, code: "d" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
</style>
