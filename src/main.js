import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/main.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.directive('document-click',{
  bind(el,binding,vnode){
    document.addEventListener('click',binding.value,false);
  },
  inserted(){

  },
  updata(){

  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



