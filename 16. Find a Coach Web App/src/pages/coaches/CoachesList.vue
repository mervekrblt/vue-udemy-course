<template>
  <section>Filter</section>
  <section>
    <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button to="/register" link>Register</base-button>
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
    </base-card>
  </section>
  
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem';
export default {
  components: {
    CoachItem
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
