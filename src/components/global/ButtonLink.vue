<template>
  <Button :type="type" :size="size" @click="$router.push(to)">
    <slot />
  </Button>
</template>

<script>
import Button from "./Button";

export default {
  components: {
    Button
  },
  props: {
    to: {
      type: String,
      default: "/"
    },
    type: {
      type: String,
      default: "link"
    },
    size: {
      type: String,
      default: "md"
    }
  }
};
</script>

<style></style>
