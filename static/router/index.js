import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/web/Index.vue';
import Contact from '../components/web/Contact.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/contact', component: Contact },
  ],
})