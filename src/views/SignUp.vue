<template>
  <div class="container">
    <div class="background" />
    <div class="content">
      <div class="animationContainer">
        <img src="../assets/logo.svg" alt="logo" />
        <form onsubmit="myFunction()">
          <h1>Faça seu cadastro</h1>
          <InputSign name="name" type="text" placeholder="Nome" />
          <InputSign name="email" type="email" placeholder="E-mail" />
          <InputSign name="password" type="password" placeholder="Senha" />
          <ButtonSign type="submit">Cadastrar</ButtonSign>
        </form>

        <router-link to="/" class="text-dark">
          <font-awesome-icon icon="arrow-left" /> Voltar para Logon
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonSign from '@/components/ButtonSign.vue';
import InputSign from '@/components/InputSign.vue';

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  components: {
    ButtonSign,
    InputSign,
  },
  methods: {
    async onSubmit() {
      let credentials = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch('login', credentials);
        this.$router.push('/');
      } catch (e) {
        return this.$swal.fire({
          icon: 'error',
          title: 'Falha no login',
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: stretch;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
}

.animationContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #f4ede8;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }
  }
}

.background {
  flex: 1;
  background: no-repeat center;
  background-image: url('../assets/sign-up-background.png');
  background-size: cover;
}
</style>
