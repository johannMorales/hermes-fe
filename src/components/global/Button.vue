<template>
  <button
    :class="[`type-${type} size-${size}`, block ? 'block' : '']"
    @click.prevent="$emit('click')"
  >
    <slot />
  </button>
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
    },
    block: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
}

button:focus {
  outline: 0;
}

button {
  color: white;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
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
  &-link {
    color: $color-primary-5;
    &:hover {
      text-decoration: underline;
    }
  }
  &-dashed {
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
    border-style: dashed;
    &:hover {
      border-color: $color-primary-5;
      color: $color-primary-5;
    }
  }
}

.size {
  &-md {
    border-radius: 5px;
    padding: 0.5rem;
  }
  &-lg {
    border-radius: 5px;
    padding: 0.75rem;
  }
}

.block {
  width: 100%;
}
</style>
