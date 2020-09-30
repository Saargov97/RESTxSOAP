<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({name: 'root'})">WebService Tester</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="navigateTo({name: 'rest-listagem'})">Lista</v-btn>
    <v-btn @click="navigateTo({name: 'rest-create'})">Cadastra</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setIsUserLoggedIn', false)
      this.$router.push('root')
    }
  }
}
</script>
<style scoped>
.home{
  cursor: pointer;
}
.home:hover{
  color: rgb(93, 190, 228);
}
</style>
