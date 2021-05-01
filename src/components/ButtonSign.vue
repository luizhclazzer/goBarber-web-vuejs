<template>
  <button class="button-sign">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonSign',
};
</script>

<style scoped>
.button-sign {
  background: #ff9000;
  color: #312e38;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 550;
  margin-top: 16px;
}

.button-sign:hover {
  background: #ff9100e1;
}
</style>
