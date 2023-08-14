<template>
  <div class="navigation-menu">
    <router-link to="/" class="menu-link" :class="{ 'active': isActive('/') }">Home</router-link>
    <router-link v-if="!isAuthenticated" to="/register" class="menu-link" :class="{ 'active': isActive('/register') }">Registration</router-link>
    <router-link v-if="!isAuthenticated" to="/login" class="menu-link" :class="{ 'active': isActive('/login') }">Login</router-link>
    <router-link v-if="isAuthenticated" to="/repo" class="menu-link" :class="{ 'active': isActive('/repo') }">Repo</router-link>
    <router-link v-if="isAuthenticated" to="/feedback" class="menu-link" :class="{ 'active': isActive('/feedback') }">Feedback</router-link>
    <button v-if="isAuthenticated" @click="logout" class="menu-button">Logout</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NavigationMenu',
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
.navigation-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #343a40; 
  padding: 10px;
  font-family: 'Trebuchet MS', sans-serif; 
}

.menu-link {
  text-decoration: none;
  color: #f8f9fa; 
  margin-bottom: 10px;
  font-weight: bold;
  transition: color 0.3s;
}

.menu-link:hover, .active {
  color: #007bff; 
}

.menu-button {
  border: none;
  background-color: white;
  color: gray; 
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s;
}

.menu-button:hover {
  color: #007bff; 
}
</style>
