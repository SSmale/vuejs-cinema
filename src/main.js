import './style.scss'

// Import Vue.use components
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";

// Import 3rd Party Libaries
import moment from 'moment-timezone'

// Import Components
import Overview from "./components/Overview.vue";

// Define bus for global props passing... VueX?
const bus = new Vue();

// Vue.use...
Vue.use(VueResource)
Vue.use(VueRouter)

// Import routes
import routes from "./util/routes";

// Init VueRouter
const router = new VueRouter({
    routes
})

// Import bus functions
import {
    checkFilter
} from './util/bus'

// Adding objects to the global namespace
Object.defineProperty(Vue.prototype, '$moment', {
    get() {
        return this.$root.moment
    }
})
Object.defineProperty(Vue.prototype, '$bus', {
    get() {
        return this.$root.bus
    }
})

// Init moment timezone
moment.tz.setDefault("UTC")

new Vue({
    el: '#app',
    router,
    components: {
        Overview
    },
    data: {
        moment,
        genre: [],
        time: [],
        movies: [],
        date: moment(),
        bus
    },
    created() {
        // GET /api
        this.$http.get('/api').then(res => {
                this.movies = res.data
            }),
            this.$bus.$on('check-filter', checkFilter.bind(this))
    }
})