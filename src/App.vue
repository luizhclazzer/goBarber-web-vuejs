<template>
  <div id="app">
    <div class="authenticated-view" v-if="isAuthenticated">
      <router-view />
    </div>

    <div v-if="!isAuthenticated">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  created() {
    this.$store.dispatch('restoreSession');
  },
};
</script>

<style lang="scss">
@import './styles/global';
</style>
