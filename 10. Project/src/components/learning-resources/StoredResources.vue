<template>
  <ul>
    <learning-resources 
    v-for="res in resources" 
    :key="res.id" 
    :res='res'
    ></learning-resources> 
  </ul>
  
</template>

<script>
import LearningResources from './LearningResorces.vue'
export default {
    inject: ['resources'],
    components: {
        LearningResources
    },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>