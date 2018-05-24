import Profile from './components/Profile.vue'

require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('profile', Profile);

const app = new Vue({
    el: '#app'
});
