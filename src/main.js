import './style.scss'

// Import Vue.use components
import Vue from 'vue'
import VueResource from 'vue-resource'

// Import 3rd Party Libaries
import moment from 'moment-timezone'

// Import Components
import MovieList from "./components/MovieList.vue";
import MovieFilter from "./components/MovieFilter.vue";

// Define bus for global props passing... VueX?
const bus = new Vue();

// Vue.use...
Vue.use(VueResource)

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

moment.tz.setDefault("UTC")

new Vue({
    el: '#app',
    components: {
        MovieList,
        MovieFilter
    },
    methods: {
        checkFilter(catagory, name, state) {
            if (state) {
                this[catagory].push(name)
            } else {
                let index = this[catagory].indexOf(name)
                if (index > -1) {
                    this[catagory].splice(index, 1)
                }
            }
        }
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
            this.$bus.$on('check-filter', this.checkFilter)
    }
})