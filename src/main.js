import './style.scss'
import Vue from 'vue'

import genres from './util/genres'

import MovieList from "./components/MovieList.vue";
import MovieFilter from "./components/MovieFilter.vue";

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
        time: []
    }
})