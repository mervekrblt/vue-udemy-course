const app = Vue.createApp({
    data() {
        return {
        }
    },
    methods: {
        getName() {
            console.dir(this.$refs.name.innerHTML)
        },
        getId() {
            console.log(this.$refs.id.innerHTML)
        }
    },
})

app.mount('#sec')