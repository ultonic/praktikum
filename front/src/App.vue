<template>
  <div id="app">
    <NavigationMenu />
    <router-view />
  </div>
</template>

<script>
import NavigationMenu from './components/Common/NavigationMenu.vue';

export default {
  name: 'App',
  components: {
    NavigationMenu,
  },
};
</script>

<style>
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .typical-form {
    font-family: 'Trebuchet MS', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .form {
    width: 350px;
    padding: 50px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f8f8f8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-label {
    font-size: 16px;
    margin-bottom: 6px;
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s ease;
  }
  
  .form-input:focus {
    border-color: #007bff;
  }
  
  .submit-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
</style>
