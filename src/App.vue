<template>
  <v-app id="app">
    <alert-component/>
    <v-app-bar
      app
      fixed
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <span @click="goTo('main')" style="cursor: pointer" class="font-weight-bold text-h5">PagingAjax</span>
      </div>

      <v-spacer></v-spacer>
      <template v-if="!authorized">
        <v-btn
            @click="goTo('login')"
            text
        >
          <span class="mr-2">Войти</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      <v-btn
          @click="goTo('register')"
          text
      >
        <span class="mr-2">Регистрация</span>
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
      </template>
    </v-app-bar>
    <v-main app>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {
    goTo (name) {
      this.$router.push({ name: name })
    }
  },
  computed: {
    authorized () {
      return !!this.$store.getters.GET_TOKEN
    }
  }
};
</script>
