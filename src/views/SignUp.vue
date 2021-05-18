<template>
  <div class="container">
    <div class="background" />
    <div class="content">
      <div class="animationContainer">
        <img src="../assets/logo.svg" alt="logo" />
        <form @submit.prevent="onSubmit">
          <h1>Faça seu cadastro</h1>
          <InputSign
            name="name"
            type="text"
            placeholder="Nome"
            v-model="name"
            :class="{ 'is-error': $v.name.$error }"
            suffixIcon="user"
          />
          <div class="error" v-if="$v.name.$dirty && !$v.name.required">
            Insira seu nome
          </div>
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
          <div
            class="error"
            v-if="$v.password.$dirty && !$v.password.minLength"
          >
            Mínimo de 6 dígitos
          </div>
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
import Toast from '@/components/js/toast-notification-alert.js';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  components: {
    ButtonSign,
    InputSign,
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    async onSubmit() {
      let user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR';
        } else {
          await this.$store.dispatch('signup', user);

          Toast.fire({
            icon: 'success',
            title: 'Cadastro realizado',
            text: 'Você já pode fazer o logon no GoBarber!',
          });

          this.$router.push('/');
        }
      } catch (e) {
        Toast.fire({
          icon: 'error',
          title: 'Erro no cadastro',
          text: 'Ocorreu um erro ao fazer cadastro. Tente novamente.',
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

.error {
  display: flex;
  color: #c73a3a;
  font-size: small;

  & + div {
    margin-top: 8px;
  }
}
</style>
