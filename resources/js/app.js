/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('Menu', require('./components/Menu').default);


import App from "./pages/App";

// Pages
import PageIndex from "./pages/PageIndex";
import PageAbout from "./pages/PageAbout";
import PageAboutContacts from "./pages/PageAboutContacts";
import PageAboutCompany from "./pages/PageAboutCompany";
import PageAboutPeople from "./pages/PageAboutPeople";
import PageProjects from "./pages/PageProjects";

//BaseComponents
Vue.component('BaseCard', require('./components/base/BaseCard').default);
Vue.component('BaseScroll', require('./components/base/BaseScroll').default);
Vue.component('BaseAccordion', require('./components/base/BaseAccordion').default);
Vue.component('BaseAccordionItem', require('./components/base/BaseAccordionItem').default);




// Vuex
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        currentLanguage: null,
    },
    mutations: {
        setCurrentLanguage (state, language) {
            state.currentLanguage = language;
        }
    },
});


// Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/ru'
        },
        {
            path: '/:lang',
            component: PageIndex,
        },
        {
            path: '/:lang/about',
            name: 'about',
            component: PageAbout,
            children: [
                {
                    path: 'company',
                    name: 'about-company',
                    component: PageAboutCompany,
                },
                {
                    path: 'contacts',
                    name: 'about-contacts',
                    component: PageAboutContacts
                },
                {
                    path: 'people',
                    name: 'about-people',
                    component: PageAboutPeople
                },
            ],
        },
        {
            path: '/:lang/projects',
            name: 'projects',
            component: PageProjects,
        },
        {
            path: '/:lang/ideas',
            name: 'ideas',
            component: PageProjects,
        },
        {
            path: '/:lang/creation',
            name: 'creation',
            component: PageProjects,
        },
        {
            path: '/:lang/news',
            name: 'news',
            component: PageProjects,
        },
        {
            // not found
            path: '/:lang/*',
            component: PageIndex,
        },
    ]
});




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data: {

    },
    components: {
        App,
    },
    watch: {
        $route(to, from) {
            this.checkPath();
        }
    },
    methods: {
        checkPath() {
            store.commit('setCurrentLanguage', this.$route.params.lang)
        },
    },
    mounted() {
        this.checkPath();
    },
    store,
    router
});
