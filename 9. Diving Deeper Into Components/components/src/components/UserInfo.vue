<template>
  <base-card>

    <template #header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>

    <template #default>
      <p>{{ infoText }}</p>
      <p>{{ phone }}</p>
    </template>

    
  </base-card>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role', 'phone'],
};
</script>
