import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie.vue';
import Music from './views/Music.vue';
import Book from './views/Book.vue';
import Image from './views/Image.vue';
import PhotoDetail from './views/PhotoDetail.vue'
import MovieDetail from './views/MovieDetail.vue';
import Up from './views/Up.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie,
    },
    {
      path: '/movie/moviedetail',
      name: 'moviedetail',
      component: MovieDetail,
    },
    {
      path:'/music',
      name:'music',
      component:Music,
    },{
        path:'/music/up',
        name:'up',
        component:Up,
    }
    ,{
      path:'/book',
      name:'book',
      component:Book
    },
    ,{
      path:'/image',
      name:'image',
      component:Image,
     
    },{
      path:'/image/photo-detail',
      name:'photo-detail',
      component:PhotoDetail
    }
  ],
});
