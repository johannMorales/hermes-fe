<template>
  <div class="page">
    <div class="page__header">
      <slot name="header" />
    </div>
    <div class="page__body">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-areas:
    "header"
    "body";

  grid-template-rows: auto 1fr;

  &__header {
    grid-area: header;

    padding: 20px;

    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include respond(sm) {
      display: block;
      text-align: center;
      padding: 10px;
    }
  }

  &__body {
    grid-area: body;
    padding: 20px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @include respond(md) {
      padding: 0px;
    }
  }
}
</style>
