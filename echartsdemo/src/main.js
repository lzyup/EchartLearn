import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import histogram from 'components/echarts1.vue'
import linechart from 'components/echarts2.vue'
import completechart from 'components/echarts3.vue'
Vue.use(VueRouter);
const routes = [{
    path: '/',
    component: histogram
},
{
    path: '/histogram',
    component: histogram
},
{
    path: '/linechart',
    component: linechart
},
{
    path: '/completeechart',
    component: completechart
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
