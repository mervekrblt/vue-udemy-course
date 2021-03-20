<template>
  <button @click="login" v-if="!userIsAuthenticated">Login</button>
  <button @click="logout" v-if="userIsAuthenticated">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions(['login', 'logout']),
  },

  computed: {
    ...mapGetters(['userIsAuthenticated'])
  }
}
</script>

<style scoped>

</style>