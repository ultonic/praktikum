<template>
  <div class="typical-form">
    <h2 class="title">Registration Form</h2>
    <form @submit.prevent="register" class="form">
      <label class="form-label">Name:</label>
      <input type="text" v-model="name" class="form-input" required />

      <label class="form-label">Email:</label>
      <input type="email" v-model="email" class="form-input" required />

      <label class="form-label">Password:</label>
      <input type="password" v-model="password" class="form-input" required />

      <button type="submit" class="submit-button">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { BACKEND_ENTRY_POINT } from '@/constants';

export default {
  name: 'RegistrationForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['login']),
    async register() {
      try {
        const response = await this.$http.post(`${BACKEND_ENTRY_POINT}/api/register`, {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        console.log(response.data)
        // since there is no email confirmation, let's login users right after the registration
        this.login()
        
        this.$store.commit('setUser', response.data.user);

        this.$router.push('/');
      } catch (error) {
        console.error('Error registering:', error.response.data);
      }
    },
  },
};
</script>
