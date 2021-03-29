<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">E-mail</label>
        <input type="text" id="email" v-model.trim="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="text" id="password" v-model.trim="password" />
      </div>

      <p v-if="!fromIsValid">Enter valid email and password</p>

      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type="button" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsvalid: true,
      mode: 'login',
    };
  },

  computed: {
      submitButtonCaption() {
          if(this.mode === 'login') {
              return 'Login'
          } else {
              return 'Signup'
          }
      },

      switchModeButtonCaption() {
          if(this.mode === 'login') {
              return 'Signup instead'
          } else {
              return 'Login instead'
          }
      }
  },

  methods: {
    submitForm() {
      this.formIsvalid = true;
      if (
        this.email === '' ||
        this.password.length < 6 ||
        !this.email.includes('@')
      ) {
        this.formIsvalid = false;
        return;
      }
    },

    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  },
};
</script>
