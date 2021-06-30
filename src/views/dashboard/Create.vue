<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0 fill-height" align="center">
      <v-col cols="12" lg="8" class="my-16 mx-auto">
        <v-card tile :min-height="$vuetify.breakpoint.height * 0.4" width="100%" class="pa-8">
          <v-card-title class="display-2 text-uppercase text-center">
            <span class="mx-auto mt-10">Создать</span>
          </v-card-title>
          <v-card-text>
            <validation-observer ref="login" v-slot="{ passes }">
              <v-form @submit.prevent="passes(submit)">
                <validation-provider name="Текст плитки" rules="required|max:256" v-slot="{ errors }">
                  <v-textarea outlined rows="4" label="Текст плитки"
                              v-model="form.name"
                              counter
                              :error-messages="errors"
                              placeholder="Введите текст плитки"
                              type="email" class="mt-5 mb-5"></v-textarea>
                </validation-provider>
                <div class="ma-0 pa-0 d-flex justify-center">
                  <v-btn type="submit" color="secondary">
                    Сохранить
                  </v-btn>
                </div>
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Create",
  data () {
    return {
      form: {
        name: null
      }
    }
  },
  methods: {
    submit () {
      this.$http.post('/auth/tiles', this.form)
          .then(() => {
            this.$router.push({ name: 'dashboard' })
          })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
