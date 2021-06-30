<template>
  <v-container fluid class="ma-0 pa-0 align-self-start">
    <v-row class="ma-0 pa-0">
      <v-col cols="12" class="ma-0 pa-0">
        <v-card width="100%">
          <v-card-text class="pa-0">
            <v-data-table
                multi-sort
                :headers="headers"
                :items="availableTiles"
                :loading="loading"
            >
              <template v-slot:top>
                <v-toolbar flat color="white">
                  <v-spacer></v-spacer>
                  <v-btn @click="goTo('dashboard.create')" tile color="primary">
                    <v-icon>mdi-plus</v-icon>
                    <span class="ml-2">Создать новый</span>
                  </v-btn>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon
                    small
                    @click="deleteItem(item.id)"
                >
                  mdi-delete
                </v-icon>
                <v-icon
                    small
                    @click="editItem(item.id)"
                >
                  mdi-pencil
                </v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Participants',
  data () {
    return {
      tiles: [],
      loading: false,
      headers: [
        { text: 'Название', value: 'name', sortable: true },
        { text: 'Действия', value: 'actions', sortable: false, align: 'center' }
      ]
    }
  },
  beforeMount() {
    this.getTiles()
  },
  mounted () {
    this.loading = 'primary'
  },
  methods: {
    async getTiles () {
      await this.$http.get(`/tiles`, {
        headers: {
          'X-Dashboard': true
        }
      })
          .then(response => {
            this.tiles = response.data.tiles
          })
          .finally(() => {
            this.loading = false
          })
    },
    deleteItem(id) {
      this.$http.delete(`/auth/tiles/${id}`)
          .then(response => {
            this.tiles = response.data.tiles
          })
          .finally(() => {
            this.loading = false
          })
    },
    editItem(id) {
      this.$router.push({ name: 'dashboard.update', params: { id: id } })
    },
    goTo(name) {
      this.$router.push({ name: name })
    }
  },
  computed: {
    user () {
      return this.$store.getters.GET_USER
    },
    availableTiles () {
      return this.tiles
    }
  }
}
</script>

<style scoped>

</style>
