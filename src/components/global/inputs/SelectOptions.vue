<template>
  <div class="options">
    <template v-for="index in 5">
      <div :key="index" class="option" @click="log(index)">
        Hola mundo!
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    },
    keyName: {
      type: String
    }
  },
  methods: {
    log(index) {
      console.log(`Pressed ${index}`);
      this.$emit("select", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.options {
  position: absolute;
  width: 100%;
  z-index: 1;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.option {
  padding: 8px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: $color-primary-1;
  }

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}
</style>
