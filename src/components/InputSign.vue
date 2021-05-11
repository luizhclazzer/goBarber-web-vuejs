<template>
  <div
    class="input-container"
    :class="[
      {
        'has-icon': suffixIcon,
        'is-error': status === 'error',
        'is-info': status === 'info',
        'is-success': status === 'success',
        'is-warning': status === 'warning',
      },
    ]"
  >
    <input
      class="input-sign"
      ref="input"
      v-bind:type="type"
      v-bind:value="value"
      v-bind:placeholder="placeholder"
      v-on:input="$emit('input', $event.target.value)"
      :readonly="readonly"
      @blur="handleBlur"
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
    value: {
      type: [String, Number],
      default: '',
    },
    readonly: Boolean,
    status: String,
    suffixIcon: String,
  },
  methods: {
    handleBlur(e) {
      this.$emit('blur', e);
    },
  },
};
</script>

<style lang="scss" scoped>
$--color-error-500: #c53030;
$--color-info-500: #0095ff;
$--color-success-500: #00e096;
$--color-warning-500: #ffaa00;

.input-container {
  background: #232129;
  border-radius: 10px;
  border: 2px solid #212329;
  padding: 16px;
  /* width: 100%; */
  align-items: center;
  display: flex;
  color: #666360;

  &.is-error {
    border-color: $--color-error-500;
  }

  &.is-info {
    border-color: $--color-info-500;
  }

  &.is-success {
    border-color: $--color-success-500;
  }

  &.is-warning {
    border-color: $--color-warning-500;
  }

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
