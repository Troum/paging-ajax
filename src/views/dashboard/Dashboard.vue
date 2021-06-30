<template>
  <v-row class="ma-0 pa-0">
    <v-col cols="12" class="ma-0 pa-0">
      <v-container fluid class="ma-0">
        <v-row class="ma-0 pa-0">
          <v-col class="ma-0 pa-lg-0 pr-lg-1 fill-height" cols="12" lg="3">
            <v-card :min-height="height">
              <v-card-text class="pa-0">
                <v-list
                    dense
                    nav
                    tile
                    class="py-0"
                >
                  <v-list-item two-line class="px-2 pt-5">
                    <v-list-item-avatar color="secondary">
                      <v-icon>mdi-account-circle</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{ user.name }}</v-list-item-title>
                      <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider/>
                </v-list>
              </v-card-text>
              <v-card-actions style="position: absolute; bottom: 0">
                <v-btn @click="logout" text color="accent">выйти</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="ma-0 pa-lg-0 pl-lg-1 fill-height" cols="12" lg="9">
            <transition mode="out-in"
                        enter-active-class="transition-ease-in-out"
                        leave-active-class="transition-ease-in-out">
              <router-view/>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable no-prototype-builtins */
export default {
  name: "Dashboard",
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$http.get(`/auth/logout`)
          .then(() => {
            this.$store.dispatch('setToken', null)
                .then(() => {
                  this.$store.dispatch('setUser', {})
                      .then(() => {
                        this.$router.push({ name: 'login' })
                      })
                })
          })
    }
  },
  computed: {
    height () {
      return this.$vuetify.breakpoint.mobile ?
          this.$vuetify.breakpoint.height * 0.5 :
          this.$vuetify.breakpoint.height * 0.9
    },
    user () {
      return this.$store.getters.GET_USER
    }
  }
}
</script>

<style scoped>

</style>
