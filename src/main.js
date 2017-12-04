import './style.scss'

// Import Vue.use components
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";

// Import 3rd Party Libaries
import moment from 'moment-timezone'

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

import {
    addClass,
    removeClass
} from "./util/helpers";

Vue.directive('tooltip', {
    bind(el, bindings) {
        let span = document.createElement('SPAN')
        let text = document.createTextNode(`Seats Avaliable: ${bindings.value.seats}`)
        span.appendChild(text)
        addClass(span, 'tooltip')
        el.appendChild(span)
        let div = el.getElementsByTagName('DIV')[0]
        div.addEventListener('mouseover', mouseOverHandler)
        div.addEventListener('mouseout', mouseOutHandler)
        div.addEventListener('touchstart', mouseOverHandler)
        div.addEventListener('touchsend', mouseOutHandler)
    },
    unbind(el) {
        let div = el.getElementsByTagName('DIV')[0]
        div.removeEventListener('mouseover', mouseOverHandler)
        div.removeEventListener('mouseout', mouseOutHandler)
        div.removeEventListener('touchstart', mouseOverHandler)
        div.removeEventListener('touchsend', mouseOutHandler)
    }
})

let mouseOverHandler = function (e) {
    let span = e.target.parentNode.getElementsByTagName('SPAN')[0]
    addClass(span, 'tooltip-show')
}

let mouseOutHandler = function (e) {
    let span = e.target.parentNode.getElementsByTagName('SPAN')[0]
    removeClass(span, 'tooltip-show')
}