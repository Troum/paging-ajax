<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-row class="d-flex align-center ma-0 pa-0 my-16">
      <v-col cols="12" class="d-flex align-center ma-0 pa-0">
        <v-row class="d-flex align-center ma-0 pa-0">
          <template v-if="tiles.length > 0">
            <v-col cols="11" sm="8" md="7" class="tiles__container mx-auto">
            <template v-for="tile in tiles">
              <tile-component :name="tile.name" :key="tile.name"></tile-component>
            </template>
            </v-col>
            <template v-if="pending">
              <v-col cols="10" class="mx-auto text-center">
                <v-progress-circular color="secondary"
                                     indeterminate></v-progress-circular>
              </v-col>
            </template>
            <v-col cols="10" class="mx-auto text-center">
              <v-btn @click="showMore" text>Показать еще</v-btn>
            </v-col>
          </template>
          <template v-else>
            <v-col cols="10" class="mx-auto text-center">
              <span class="display-2">Плиток пока нет</span>
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        tiles: [],
        page: 1,
        pending: false
      }
    },
    beforeMount() {
      this.getTiles()
    },
    methods: {
      async getTiles () {
        await this.$http.get(`/tiles`)
            .then(response => {
              this.tiles = response.data.tiles.data
            })
            .finally(() => {
              this.loading = false
            })
      },
      showMore () {
        this.pending = true
        setTimeout(() => {
          this.page++
          this.$http
              .get(this.url)
              .then(response => {
                response.data.tiles.data.forEach(item => this.tiles.push(item))
                this.pending = false
              })
        }, 500)
      }
    },
    computed: {
      url () {
        return `/tiles?page=${this.page}`
      },
      height () {
        return this.$vuetify.breakpoint.height
      }
    }
  }
</script>
<style scoped lang="scss">
.tiles__container {
  display: grid;
  grid-template-columns: repeat(2, calc(100% / 2));
  grid-auto-rows: min-content;
}
</style>
