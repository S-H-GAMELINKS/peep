import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/web/Index.vue';
import Contact from '../components/web/Contact.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/peep/', component: Index },
    { path: '/peep/contact', component: Contact },
  ],
})