<script>
export default {
    data () {
        return {
            name: '',
            phone: '',
            email: '',
        }
    },

    emits: ['add-contact'],

    methods: {
        submitData () {
            const data = {
                name: this.name,
                phone: this.phone,
                email: this.email
            }
            //console.log(data)
            this.$emit('add-contact', data)
        }
    }
}
</script>


<template>
<form @submit.prevent="submitData">
    <div>
        <label>Name</label>
        <input type="text" v-model="name">
    </div>

    <div>
        <label>Phone</label>
        <input type="tel" v-model="phone">
    </div>

    <div>
        <label>Email</label>
        <input type="text" v-model="email">
    </div>

    <div>
        <button>Submit</button>
    </div>
</form>
</template>


<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>