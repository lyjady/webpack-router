import Vue from 'vue/dist/vue';
import app from './App.vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./js/router.js";

const vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: router
});