import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { 
    title:'电影',
    color:'pink',
    photoList:[]
  },
  mutations: {
    change(state,arg){
      state.title = arg.title;
      state.color = arg.color;
        },
        addPhotoList(state,list){
          // console.log(list,'08276345678764567');
          state.photoList = list;
        } 
  },
  actions: {

  },
});
