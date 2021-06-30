<template>
  <v-row class="ma-0 pa-0 fill-height" align="center">
    <v-col cols="12" lg="3" class="my-16 mx-auto">
      <v-card tile :min-height="$vuetify.breakpoint.height * 0.4" width="100%" class="pa-8">
        <v-card-title class="display-2 text-uppercase text-center">
          <span class="mx-auto mt-10">Войти</span>
        </v-card-title>
        <v-card-text>
          <validation-observer ref="login" v-slot="{ passes }">
            <v-form @submit.prevent="passes(submit)">
              <validation-provider name="Логин" rules="required|email" v-slot="{ errors }">
                <v-text-field label="Логин"
                              v-model="form.username"
                              :error-messages="errors"
                              placeholder="Введите свой логин (e-mail)"
                              type="email" class="mt-5 mb-5"></v-text-field>
              </validation-provider>
              <validation-provider name="Пароль" rules="required" v-slot="{ errors }">
                <v-text-field
                    label="Пароль"
                    v-model="form.password"
                    :error-messages="errors"
                    placeholder="Введите свой пароль"
                    type="password" class="mb-5"></v-text-field>
              </validation-provider>
              <div class="ma-0 pa-0 d-flex justify-center">
                <v-btn type="submit" color="secondary">
                  войти
                </v-btn>
              </div>
            </v-form>
          </validation-observer>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      form: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    submit () {
      this.$http.post('/login', this.form)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
