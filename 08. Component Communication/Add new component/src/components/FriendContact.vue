<script>
export default {
  // props: [
  //   'name',
  //   'phone',
  //   'email',
  //   'isFavorite'
  // ],
  emit: ['toggle-favorite', 'del-item'],

  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
    },
  },

  data() {
    return {
      detailsAreVisible: false,
      // FOR MUTATE PROP
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    addFavorite() {
      // CANNOT MUTATE PROPS
      // if(this.isFavorite === '1') {
      //   this.isFavorite = 0
      // }

      // if(this.friendFavorite === '1') {
      //   this.friendFavorite = '0'
      // } else {
      //   this.friendFavorite = '1'
      // }

      //this.friendFavorite = !this.friendFavorite;

      this.$emit('toogle-favorite', this.id)
    },

    deleteItem() {
      this.$emit('del-item', this.id)
    }
  }
};
</script>

<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }} </h2>

    <button @click="addFavorite">Add Favorite</button>

    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>

    <button @click="deleteItem">Delete</button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>
