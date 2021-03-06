import Vue from 'vue';
import App from './App';
import vuetify from './plugins/vuetify'


new Vue({
    el: '#app',
    vuetify,
    render: (h) => h(App)
});
