import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import LoginComponent from './pages/Login/LoginComponent.vue'; 
import HomeComponent from './pages/Home/HomeComponent.vue'; 
import ClientsComponent from './pages/Clients/ClientsComponent.vue'; 
import ProductsComponent from './pages/Products/ProductsComponent.vue'; 


Vue.config.productionTip = false;
Vue.use(VueRouter);

axios.defaults.baseURL = 'http://localhost:8000/api';

const routes = [
  { path: '/', name: 'login', component: LoginComponent },
  { path: '/home', name: 'home', component: HomeComponent },
  { path: '/clients', name: 'clients', component: ClientsComponent },
  { path: '/products', name: 'products', component: ProductsComponent },
]

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
