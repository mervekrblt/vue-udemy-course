<template>
  <section>
    <base-card>
      <header>
        <h2>Requests</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item
          v-for="req in receivedRequest"
          :key="req.id"
          :message="req.message"
          :email="req.userEmail"
        ></request-item>
      </ul>
      <h3 v-else>No requests</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  components: { RequestItem },
  computed: {
    receivedRequest() {
      console.log('req', this.$store.getters['requests/requests']);
      return this.$store.getters['requests/requests'];
    },

    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },

  created() {
    this.loadRequests()
  },

  methods: {
    async loadRequests() {
      await this.$store.dispatch('requests/fetchRequests')
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}
</style>
