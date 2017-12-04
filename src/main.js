import './style.scss'

// Import Vue.use components
import Vue from 'vue'
import VueResource from 'vue-resource'

// Import 3rd Party Libaries
import moment from 'moment-timezone'

// Import Components
import Overview from "./components/Overview.vue";

// Define bus for global props passing... VueX?
const bus = new Vue();

// Vue.use...
Vue.use(VueResource)

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