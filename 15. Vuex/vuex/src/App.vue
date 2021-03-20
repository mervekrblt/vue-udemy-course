<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addOne">Add</button>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex'

export default {
  components: {
    BaseContainer,
    UserAuth,
  },

  methods: {
    addOne(){
      this.$store.state.counter +=1
    }
  },

  computed: {
    ...mapGetters(['userIsAuthenticated'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>