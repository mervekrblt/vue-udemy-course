<template>
  <coach-filter @change-filter="setFilters"></coach-filter>

  <section>
    <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button to="/register" link v-if="!isCoach">Register</base-button>
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
import CoachFilter from '../../components/coaches/CoachFilter'
export default {
  components: {
    CoachItem,
    CoachFilter
  },
  computed: {
    isCoach() {
      console.log(this.$store.getters['coaches/isCoach'])
      return this.$store.getters['coaches/isCoach']
    },

    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {

        if(this.activeFilters.frontend && coach.areas.includes('frontend')){
          return true
        }
        if(this.activeFilters.backend && coach.areas.includes('backend')){
          return true
        }
        if(this.activeFilters.career && coach.areas.includes('career')){
          return true
        }
        return false
      })
    },

    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },

  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },

  created() {
    this.loadCoaches()
  },

  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    },

    //fetching coaches action
    loadCoaches() {
      return this.$store.dispatch('coaches/loadedCoaches')
    }
  }
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
