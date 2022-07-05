import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hovered:[],   
    selected:[],
    coin:0.5,
    started:false,
  },
  getters: {},
  mutations: {
    setHovered(state, hovers){
      state.hovered = hovers;
    },
    setSelectedCoin(state,coin){
      console.log(coin)
      state.coin = coin;
    },
    setSelected(state,selected){
      state.selected = selected;
      console.log(selected);
    },
    setStartedBetting(state,started){
      state.started = started;
    }
  },
  actions: {},
  modules: {},
});
