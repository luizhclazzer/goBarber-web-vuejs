<template>
  <div class="container">
    <div class="headerContent">
      <img src="../assets/logo.svg" alt="logo" />

      <button @click="logout" type="button">
        <font-awesome-icon icon="power-off" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['user', 'isAuthenticated']),
  },
  methods: {
    ...mapActions(['logout']),
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 32px 0;
  background: #28262e;
}

.headerContent {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 19px;
      height: 19px;
    }
  }
}
</style>
