<script>
import NewFriend from './components/NewFriend.vue';
export default {
  components: { NewFriend },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: true
        },
      ],
    };
  },

  methods: {
    toggleFavStatus(firendId){
      //console.log(firendId)
      const identFriend = this.friends.find(friend => friend.id === firendId)
      identFriend.isFavorite = !identFriend.isFavorite
    },

    addContact(data) {
      const newFriend = {
        id: new Date().toISOString(),
        name: data.name,
        phone: data.phone,
        email: data.email,
        isFavorite: false
      }

      //console.log(newFriend)

      this.friends.push(newFriend)
    },

    delItem(friendId) {
      this.friends = this.friends.filter(friend => friend.id !== friendId)
      //console.log(deleted)
      
    }
  }
};
</script>

<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>

    <new-friend @add-contact="addContact"></new-friend>

    <ul>
      <friend-contact
        v-for="friend in friends"
        :id="friend.id"
        :key= "friend.id"
        :name= "friend.name"
        :phone= "friend.phone"
        :email= "friend.email"
        :is-favorite= "friend.isFavorite"
        @toogle-favorite="toggleFavStatus"
        @del-item="delItem"
      ></friend-contact>

      <friend-contact
        id= "julie"
        name= "Julie Jones"
        phone= "0987 654421 21"
        email= "julie@localhost.com"
        :is-favorite= "false"
      ></friend-contact>

    </ul>
  </section>
</template>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>