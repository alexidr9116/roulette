import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hovered:[],
    selected:[],

  },
  getters: {},
  mutations: {
    setHovered(state, hovers){
      state.hovered = hovers;
    },
    setSelected(state,selected){
      state.selected = selected;
      console.log(selected);
    }
  },
  actions: {},
  modules: {},
});
