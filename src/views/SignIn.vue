<template>
  <div class="container">
    <div class="content">
      <div class="animationContainer">
        <img src="../assets/logo.svg" alt="logo" />
        <form @submit.prevent="onSubmit">
          <h1>Faça seu logon</h1>
          <InputSign
            name="email"
            type="email"
            placeholder="E-mail"
            v-model="email"
            :class="{ 'is-error': $v.email.$error }"
            suffixIcon="envelope"
          />
          <div class="error" v-if="$v.email.$dirty && !$v.email.required">
            Insira seu e-mail
          </div>
          <InputSign
            name="password"
            type="password"
            placeholder="Senha"
            v-model="password"
            :class="{ 'is-error': $v.password.$error }"
            suffixIcon="lock"
          />
          <div class="error" v-if="$v.password.$dirty && !$v.password.required">
            Insira sua senha
          </div>
          <ButtonSign type="submit">Entrar</ButtonSign>
          <router-link to="/signup">Esqueci minha senha</router-link>
        </form>

        <router-link to="/signup">
          <font-awesome-icon icon="sign-in-alt" /> Criar Conta
        </router-link>
      </div>
    </div>
    <div class="background" />
  </div>
</template>

<script>
import ButtonSign from '@/components/ButtonSign.vue';
import InputSign from '@/components/InputSign.vue';
import Toast from '@/components/js/toast-notification-alert.js';
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  components: {
    ButtonSign,
    InputSign,
  },
  validations: {
    email: {
      required,
    },
    password: {
      required,
    },
  },
  methods: {
    async onSubmit() {
      let credentials = {
        email: this.email,
        password: this.password,
      };

      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR';
        } else {
          await this.$store.dispatch('login', credentials);
          this.$router.push('/');
        }
      } catch (e) {
        Toast.fire({
          icon: 'error',
          title: 'Erro na autenticação',
          text: 'Por favor, cheque suas credenciais',
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

      &:hover {
        opacity: 0.8;
      }
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

    &:hover {
      opacity: 0.8;
    }
  }
}

.background {
  flex: 1;
  background: no-repeat center;
  background-image: url('../assets/sign-in-background.png');
  background-size: cover;
}

.error {
  display: flex;
  color: #c73a3a;
  font-size: small;

  & + div {
    margin-top: 8px;
  }
}
</style>
