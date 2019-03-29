import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import histogram from 'components/echarts1.vue'
Vue.use(VueRouter);
const routes = [{
    path: '/',
    component: App
},
{
    path: '/histogram',
    component: histogram
}
]
const router = new VueRouter({
    linkActiveClass: 'active',
    routes
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
