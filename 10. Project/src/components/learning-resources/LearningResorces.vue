<template>
  <li>
    <base-card>
          <header>
              <h3> {{ res.title }}</h3>
              <base-button mode="flat" @click="removeResource(res.id)"> Delete </base-button>
          </header>
      

      <p> {{ res.description }}</p>

      <nav>
          <a :href="res.link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue'
export default {
  components: { BaseCard },
  //inject: ['resources']
  props: ['res'],
  inject: ['removeResource']
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>