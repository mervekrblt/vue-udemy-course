<template>
  <section>Filter</section>

  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coach in filteredCoaches" :key="coach.id">
        <coach-item
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :key="coach.id"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
        ></coach-item>
      </li>
    </ul>
    <h1 v-else>Has no data</h1>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem';
export default {
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },

    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>