import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';

Vue.use(VueRouter);

const authenticatedRoute = (to, from, next) => {
  return store.getters.isAuthenticated ? next() : next('/signin');
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: authenticatedRoute,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
