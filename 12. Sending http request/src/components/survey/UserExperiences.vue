<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="!isloading">Loading...</p>
      <p v-if="results.length <= 0">No Data. Please add some survey</p>
      <ul v-if="isloading && results && results.length >0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },

  data() {
    return {
      results: [],
      isloading: false,
    }
  },

  methods: {
    loadExperiences() {
      this.isloading = true

      fetch('https://vue-http-demo-69881-default-rtdb.firebaseio.com/surveys.json')
            .then(response => {
                return response.json()
              }
            )
            .then(data => {
              this.isloading = true

              const comingResults = []
              for(const id in data) {
                comingResults.push({

                  // use same naming bsed on binding
                  id: id,
                  name: data[id].name,
                  rating: data[id].rating
                })

                this.results = comingResults
                console.log(this.results)
              }
            })
    }
  },

  mounted() {
    this.loadExperiences()
  }
};
</script>

<style scoped>
section {
  border: 2px green solid;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>