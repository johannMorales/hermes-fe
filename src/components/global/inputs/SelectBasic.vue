<template>
  <div class="ant-select ant-select-enabled">
    <div class="ant-select-selection ant-select-selection--single">
      <div class="ant-select-selection__rendered">
        <div
          class="ant-select-selection-selected-value"
          title="Lucy"
          style="display: block; opacity: 1;"
        >
          Lucy
        </div>
      </div>
      <ion-icon
        class="ant-select-arrow"
        name="ios-arrow-down"
        @click.native="showDropdown = true"
      ></ion-icon>
    </div>
    <SelectOptions />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: true
    };
  }
};
</script>

<style lang="scss" scoped>
.ant-select {
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.5;
  list-style: none;
  position: relative;
  display: inline-block;
  outline: 0;
}

.ant-select-selection {
  display: block;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-top-width: 1.02px;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
}

.ant-select-selection__rendered {
  position: relative;
  display: block;
  margin-right: 11px;
  margin-left: 11px;
  line-height: 30px;
}

.ant-select-arrow {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 50%;
  right: 11px;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  line-height: 1;
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}
</style>
