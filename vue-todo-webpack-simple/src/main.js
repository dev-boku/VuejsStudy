import Vue from 'vue'
import App from './App.vue'
import './css/index.css'
import './css/base.css'
import './js/base.js'
import { store } from './store';

new Vue({
  el: '#app',
  store,
  created () {
    store.dispatch('loadInputTodo');
  },
  render: h => h(App)
})
