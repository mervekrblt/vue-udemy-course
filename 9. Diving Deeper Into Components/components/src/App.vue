<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      v-for="user in activeUser"
      :key="user.name"
      :full-name="user.name"
      :info-text="user.description"
      :role="user.role"
      :phone="user.phone"
    ></user-info>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeUser: [
        {
          name: 'Maximilian Schwarzmüller',
          phone: 123,
          description: 'Site owner and admin',
          role: 'admin',
        },
        {
          name: 'Merve Karabulut',
          phone: 123,
          description: 'Site owner and admin',
          role: 'admin',
        }
      ],
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>