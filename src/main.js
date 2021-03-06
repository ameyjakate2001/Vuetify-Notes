import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'


import Dashboard from './components/Dashboard.vue'
import project from './components/project.vue'
import team from './components/team.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const Router = new VueRouter({
  routes:[
    {
      path:'/',component: Dashboard
    },
    {
      path:'/projects',component:project
    },
    {
      path:'/team',
      name:'team',
      component:team
    }
  ],
  mode:'history'
})

new Vue({
  vuetify,
  render: h => h(App),
  router:Router
}).$mount('#app')
