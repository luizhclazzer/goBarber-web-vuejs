<template>
  <div class="container" v-if="isAuthenticated">
    <div class="headerContent">
      <img src="../assets/logo.svg" alt="logo" />
      <div class="profile">
        <div class="info">
          <span>Bem-vindo(a), </span>
          <router-link to="/profile">
            {{ user.name }}
          </router-link>
        </div>
      </div>
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

.profile {
  display: flex;
  align-items: center;
  margin-left: 80px;
}

.info {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  line-height: 24px;
  font-weight: bold;

  span {
    color: #f4ede8;
  }

  a {
    text-decoration: none;
    color: #ff9000;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
