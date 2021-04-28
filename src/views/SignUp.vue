<template>
  <div class="container">
    <div class="background" />
    <div class="content">
      <div class="animationContainer">
        <img src="../assets/logo.svg" alt="logo" />
        <form onsubmit="myFunction()">
          <h1>Faça seu cadastro</h1>
          <div class="inputContainer">
            <Input name="name" type="text" placeholder="Nome" />
          </div>
          <div class="inputContainer">
            <Input name="email" type="email" placeholder="E-mail" />
          </div>
          <div class="inputContainer">
            <Input name="password" type="password" placeholder="Senha" />
          </div>
          <Button type="submit">Cadastrar</Button>
        </form>

        <router-link to="/" class="text-dark">
          <font-awesome-icon icon="sign-in-alt" /> Voltar para logon
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
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

.inputContainer {
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

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
}

.background {
  flex: 1;
  background: no-repeat center;
  background-image: url('../assets/sign-up-background.png');
  background-size: cover;
}

button {
  background: #ff9000;
  color: #312e38;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 550;
  margin-top: 16px;
  /* transition: background-color 0.2s; */
}
</style>
