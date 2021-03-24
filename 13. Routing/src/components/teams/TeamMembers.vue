<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  components: {
    UserItem
  },
  data() {
    return {
      members: [],
    };
  },

  created() {
    // console.log(this.$router, this.$route, this.$route.params)

    // Url deki teams/... ...yerine yazılanı bulmak için
    const teamId = this.$route.params.teamId
    // yazılan id yi teams içinde aramak
    const selectedTeam = this.teams.find(team => team.id === teamId)
    // selectedTeam içindeli memberları bulmak
    const members = selectedTeam.members
    console.log(members)

    const selectedMembers = []

    for( const member of members) {
      const selectedMember = this.users.find(user => user.id === member)
      selectedMembers.push(selectedMember)
    }

    this.members = selectedMembers
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>