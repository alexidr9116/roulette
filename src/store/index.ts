import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hovered:[],   
    selected:[],
    coin:0.5,
    started:false,
    showGroupBet:false,
    balance:0,
    roundBalance:0,
    maxBet:5,
    betAction:'add',
  },
  getters: {},
  mutations: {
    setBetAction(state,action){
      state.betAction = action;
    },
    setMaxBet(state,max){
      state.maxBet = max;
    },
    setHovered(state, hovers){
      state.hovered = hovers;
    },
    setShowGroupBet(state,show){
      state.showGroupBet = show;
    },
    setBalance(state,balance){
      state.balance = balance;
      state.roundBalance = balance;
    },
    setSelectedCoin(state,coin){
      state.coin = coin;
    },
    setSelected(state,selected){
      state.selected = selected;
      const _betted = selected.reduce((prev:Number,current:any)=>(prev+current.value),0);
      state.roundBalance = state.balance-_betted;

    },
    setStartedBetting(state,started){
      state.started = started;
    }
  },
  actions: {},
  modules: {},
});
