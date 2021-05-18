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
    <font-awesome-icon class="input-icon" :icon="suffixIcon" />

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
    border-color: #c53030;
  }

  &.is-info {
    border-color: #0095ff;
  }

  &.is-success {
    border-color: #00e096;
  }

  &.is-warning {
    border-color: #ffaa00;
  }

  & + div {
    margin-top: 8px;
  }

  &.has-icon {
    & > input {
      padding-left: 12px;
    }
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
