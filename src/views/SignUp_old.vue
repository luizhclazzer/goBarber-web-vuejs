<template>
  <div class="sign-in vh-100">
    <div class="container-fluid">
      <div class="row justify-content-center t-5 position-relative">
        <div class="col-md-3">
          <div class="card shadow">
            <div class="card-body">
              <form @submit.prevent="onSubmit">
                <div class="input">
                  <label for="email">Nome Completo</label>
                  <input class="form-control" type="text" v-model="fullName" />
                </div>

                <div class="input my-3">
                  <label for="password">E-mail</label>
                  <input class="form-control" type="email" v-model="email" />
                </div>

                <div class="input my-3">
                  <label for="password">Senha</label>
                  <input
                    class="form-control"
                    type="password"
                    id="password"
                    v-model="password"
                  />
                </div>

                <div class="input my-3">
                  <label for="password">Confirma a senha aí</label>
                  <input
                    class="form-control"
                    type="password"
                    id="password"
                    v-model="passwordCheck"
                  />
                </div>

                <div class="text-center mt-4">
                  <button class="btn btn-primary px-4" type="submit">
                    Criar conta!
                  </button>
                </div>

                <div class="text-center py-3">
                  <router-link to="/signin" class="text-dark"
                    >Fazer login</router-link
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      name: null,
      password: null,
      passwordCheck: null,
    };
  },

  methods: {
    async onSubmit() {
      if (this.password !== this.passwordCheck) {
        return this.$swal.fire({
          icon: 'warning',
          title: 'As senhas não são iguais. Tenta aí novamente.',
        });
      }

      let user = {
        name: this.fullName,
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch('signup', user);
        this.$router.push('/');
      } catch (e) {
        return this.$swal.fire({
          icon: 'error',
          title: 'Falha na criação da conta :(',
        });
      }
    },
  },
};
</script>
