import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "animate.css";
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 滚动动画 wow.js
import {
  WOW
} from 'wowjs'
Vue.prototype.$wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 150, // default
  mobile: true, // default
  live: false,

  // live为true时，控制台会提示：MutationObserver is not supported by your browser. & WOW.js cannot detect dom mutations, please call .sync() after loading new content.

  callback: function (box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')