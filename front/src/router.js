import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/Main/MainPage.vue';
import RegistrationForm from './components/RegistrationForm/RegistrationForm.vue';
import LoginForm from './components/Login/LoginForm.vue';
import RepoPage from './components/Pages/RepoPage.vue';
import FeedbackFrom from './components/Pages/FeedbackForm.vue';
import store from './store';

const routes = [
  { path: '/', component: MainPage },
  { path: '/register', component: RegistrationForm },
  { path: '/login', component: LoginForm },
  {
    path: '/repo',
    component: RepoPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/feedback',
    component: FeedbackFrom,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters['isAuthenticated']) {
    next('/'); 
  } else {
    next();
  }
});


export default router;
