<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  height: inherit;
  width: inherit;
  display: block;
  background-color: white;
  padding: 20px;

  @include respond(sm) {
    padding: 10px;
  }

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>
