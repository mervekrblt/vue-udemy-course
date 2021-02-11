<script>
export default {
    data() {
        return {
            isVisible: false,
            friend: {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        }
        }
    },

    methods: {
        toggleDetails() {
            this.isVisible = !this.isVisible
        }
    },
}
</script>

<template>

<li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>

    <ul v-if="isVisible">
        <li> {{ friend.phone }} </li>
        <li> {{ friend.email }} </li>
    </ul>
</li>
</template>