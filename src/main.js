import Vue from 'vue'
import App from './App.vue'
import './quasar'

import VueRouter from 'vue-router';
import { routes } from './routes.js';

import store from './store/store';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vueproject-stockapplication.firebaseio.com/';

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
})

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app')
