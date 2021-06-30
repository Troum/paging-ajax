<template>
  <v-row class="ma-0 pa-0 fill-height" align="center">
    <v-col cols="12" lg="4" class="my-16 mx-auto">
      <v-card tile :min-height="$vuetify.breakpoint.height * 0.4" width="100%" class="pa-8">
        <v-card-title class="display-1 text-uppercase text-center">
          <span class="mx-auto mt-10">Зарегистрироваться</span>
        </v-card-title>
        <v-card-text>
          <validation-observer ref="login" v-slot="{ passes }">
            <v-form @submit.prevent="passes(submit)">
              <validation-provider name="Имя и фамилия" rules="required" v-slot="{ errors }">
                <v-text-field label="Ваше имя и фамилия"
                              v-model="form.name"
                              :error-messages="errors"
                              placeholder="Введите своё имя и фамилию"
                              type="text" class="mt-5 mb-5"></v-text-field>
              </validation-provider>
              <validation-provider name="E-mail" rules="required|email" v-slot="{ errors }">
                <v-text-field label="Логин"
                              v-model="form.username"
                              :error-messages="errors"
                              placeholder="Введите свой логин (e-mail)"
                              type="email" class="mt-5 mb-5"></v-text-field>
              </validation-provider>
              <validation-provider rules="required|confirmed:confirmation" name="Пароль" v-slot="{ errors }">
                <v-text-field
                    label="Придумайте пароль"
                    :error-messages="errors"
                    placeholder="Create your password"
                    type="password" class="mb-5"
                    v-model="form.password"></v-text-field>
              </validation-provider>
              <validation-provider rules="required" vid="confirmation" name="Подтверждение пароля" v-slot="{ errors }">
                <v-text-field
                    label="Подтверждение пароля"
                    :error-messages="errors"
                    placeholder="Подтвердите свой пароль"
                    type="password" class="mb-5"
                    v-model="form.password_confirmation"></v-text-field>
              </validation-provider>
              <div class="ma-0 pa-0 d-flex justify-center">
                <v-btn type="submit" color="secondary">
                  зарегистрироваться
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
        name: null,
        username: null,
        password: null
      }
    }
  },
  methods: {
    submit () {
      this.$http.post(`/register`, this.form)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
