<template>
    <v-card tile elevation="2" class="mx-1 my-1">
      <v-card-text class="d-flex align-center pa-16">
        {{ name }}
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: "TileComponent",
  props: {
    name: String
  }
}
</script>

<style scoped>

</style>
