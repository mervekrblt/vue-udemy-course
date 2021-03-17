<template>
    <the-header title="Remember Me"></the-header>
    <ul>
      <stored-resources :resources="storedResources"></stored-resources>
    </ul>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import StoredResources from './components/learning-resources/StoredResources.vue'


export default {

    components: {
        StoredResources,
        TheHeader
    },

    data() {
        return {
            storedResources: [
                {
                    id: 'offical guide',
                    title: 'Official Guide',
                    description: 'vue.js',
                    link: 'https://vuejs.org/',
                },
                {
                    id: 'offical guide',
                    title: 'google',
                    description: 'google',
                    link: 'https://google.com/',
                },
            ]
        }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>