<template>
  <input></input>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import './styles';
input {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  color: rgba(0,0,0,0.65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all .3s;

  &:hover {
    border-color: $color-primary-5;
  }

  &:focus {
    outline: 0;
    border-color: $color-primary-5;
    box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
  }
}

</style>
