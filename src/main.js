import './style.scss'

// Import Vue.use components
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router"
import Tooltip from "./util/Tooltip"

// Import 3rd Party Libaries
import moment from 'moment-timezone'

// Define bus for global props passing... VueX?
const bus = new Vue();

// Vue.use...
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Tooltip)

// Import routes
import routes from "./util/routes";

// Init VueRouter
const router = new VueRouter({
    routes
})

// Import bus functions
import {
    checkFilter,
    setDay
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
    data: {
        moment,
        genre: [],
        time: [],
        movies: [],
        day: moment(),
        bus
    },
    created() {
        // GET /api
        this.$http.get('/api').then(res => {
                this.movies = res.data
            }),
            this.$bus.$on('check-filter', checkFilter.bind(this)),
            this.$bus.$on('set-day', setDay.bind(this))
    }
})