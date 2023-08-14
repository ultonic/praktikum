<template>
  <div class="typical-form">
    <h2 class="title">Login</h2>
    <form @submit.prevent="auth" class="form">
      <label class="form-label">Email:</label>
      <input type="email" v-model="email" class="form-input" required />

      <label class="form-label">Password:</label>
      <input type="password" v-model="password" class="form-input" required />

      <button type="submit" class="submit-button">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['login']),
    async auth() {
      try {
        const response = await this.$http.post('/api/login', {
          email: this.email,
          password: this.password,
        });

        this.login()
        
        this.$store.commit('setUser', response.data.user);

        this.$router.push('/');
      } catch (error) {
        console.error('Error logging in:', error.response.data);
      }
    },
  },
};
</script>