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
    }
})