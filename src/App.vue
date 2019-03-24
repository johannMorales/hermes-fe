<template>
  <div class="base">
    <div id="app">
      <router-view class="router" />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  grid-area: content;
  background-color: $color-grey-2;
  border-left: 1px solid $color-grey-3;
  border-right: 1px solid $color-grey-3;

  height: 100%;
  min-height: 100%;

  .router {
    height: 100%;
    min-height: 100%;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.base {
  height: 100%;
  min-height: 100%;

  @include respond(xl) {
    display: grid;
    background-color: #ffffff;
    grid-template-areas: ". content .";
    grid-template-columns: 1fr 5fr 1fr;
  }
}
</style>
