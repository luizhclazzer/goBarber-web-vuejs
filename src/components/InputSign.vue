<template>
  <div class="input-container">
    <input
      class="input-sign"
      ref="input"
      v-bind:type="type"
      v-bind:placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'InputSign',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  background: #232129;
  border-radius: 10px;
  border: 2px solid #212329;
  padding: 16px;
  /* width: 100%; */
  align-items: center;
  display: flex;
  color: #666360;

  & + div {
    margin-top: 8px;
  }
}

.input-sign {
  flex: 1;
  background: transparent;
  border: 0;
  color: #f4ede8;

  &::placeholder {
    color: #666360;
  }
}
</style>
