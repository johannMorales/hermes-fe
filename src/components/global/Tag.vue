<template>
  <div :class="`type-${type} size-${size}`"><slot /></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "md"
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  display: inline-block;
  color: white;
  transition: all 0.25s;
  user-select: none;
}

.type {
  &-primary {
    background-color: $color-primary-6;
    &:hover {
      background-color: $color-primary-5;
    }
  }
  &-danger {
    background-color: $color-danger-6;
    &:hover {
      background-color: $color-danger-5;
    }
  }
  &-success {
    background-color: $color-success-6;
    &:hover {
      background-color: $color-success-5;
    }
  }
}

.size {
  &-md {
    font-size: 12px;
    border-radius: 5px;
    padding: 2px 8px;
  }
}
</style>
