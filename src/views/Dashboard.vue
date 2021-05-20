<template>
  <div class="container">
    <Header />
    <div class="card shadow mb-4">
      <div class="card-body">
        <h1 class="text-secondary text-center mb-5">Olá!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
