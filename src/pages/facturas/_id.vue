<template>
  <Page>
    <template v-slot:header>
      <div>
        <h1>Nueva Factura</h1>
      </div>
      <div>
        <Button type="link" size="lg"> Volver </Button>
        <Button type="primary" size="lg"> Guardar </Button>
      </div>
    </template>
    <template v-slot:body>
      <section class="body__head">
        <Card class="input-container">
          <div class="input-row">
            <div class="input-row__item">
              <SelectBasic />
            </div>
            <div class="input-row__item">
              <Input />
            </div>
            <div class="input-row__item">
              <Input />
            </div>
          </div>
          <div class="input-row">
            <div class="input-row__item">
              <Input />
            </div>
            <div class="input-row__item">
              <Input />
            </div>
            <div class="input-row__item">
              <Input />
            </div>
          </div>
        </Card>
      </section>
      <section class="body__table">
        <Card class="card">
          <Table :columns="columns" :data="data">
            <template v-slot:product>
              <Input />
              <Input />
            </template>
            <template v-slot:quantity>
              <Input />
              <Input />
            </template>
            <template v-slot:unit-price>
              <Input />
            </template>
          </Table>
          <Button type="dashed" block> Agregar Item </Button>
        </Card>
      </section>
    </template>
  </Page>
</template>

<script>
const columns = [
  {
    name: "Producto",
    slot: "product"
  },
  {
    name: "Cantidad",
    slot: "quantity"
  },
  {
    name: "Precio Unitario",
    slot: "unit-price"
  },
  {
    name: "Precio Total",
    data: "producto"
  },
  {
    isActions: true
  }
];

export default {
  data() {
    return {
      columns,
      data: [{}, {}]
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  padding: 15px 10px;
}

.body {
  &__table {
    height: 100%;
  }
}
.input-row {
  display: flex;
  justify-content: space-evenly;

  @include respond(md) {
    display: block;
  }
  &__item {
    flex-grow: 1;
    flex-basis: 0;
    padding: 10px;
  }
}
</style>
