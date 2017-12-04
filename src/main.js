import './style.scss'
import Vue from 'vue'
import VueResource from 'vue-resource'

import MovieList from "./components/MovieList.vue";
import MovieFilter from "./components/MovieFilter.vue";

Vue.use(VueResource)

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
        genre: [],
        time: [],
        movies: []
    },
    created() {
        // GET /api
        this.$http.get('/api')
            .then(res => {
                this.movies = res.data
            })
    }
})