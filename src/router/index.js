import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import Category from '../views/Category';
import AboutCompany from '../views/AboutCompany';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/about-company',
    name: 'AboutCompany',
    component: AboutCompany,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
