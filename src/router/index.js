import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import Dashboard from '../views/Dashboard.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter);

const authenticatedRoute = (to, from, next) => {
  return store.getters.isAuthenticated ? next() : next('/signin');
};

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: authenticatedRoute,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
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
