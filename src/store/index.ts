import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hovered:[],   
    selected:[],
    coin:0.5,
    roundStatus:'end',
    showGroupBet:true,
    
    balance:0,
    haveBalance:0,
    roundBalance:0,
    maxBet:5,
    betAction:'add',
    winNumber:20,
    token:'',
    hotCoolNumbers:null,  // {hot:[], cool:[]}
    lastBetInfo:null, // array [{bet_code:'PL1',bet_amount:'100.00'}]
  },
  getters: {},
  mutations: {
    setLastBetInfo(state,info){
      state.lastBetInfo = info;
    },
    setHotCoolNumbers(state,numbers){
      state.hotCoolNumbers = numbers;
    },
    setUserToken(state,token){
      state.token = token;
    },
    setWinNumber(state,number){
      state.winNumber = number;
    },
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
      state.haveBalance = balance;
      
    },
    setSelectedCoin(state,coin){
      state.coin = coin;
    },
    setSelected(state,selected){
      state.selected = selected;
      const _betted = selected.reduce((prev:Number,current:any)=>(prev+current.value),0);
      state.roundBalance = _betted;
      state.haveBalance = state.balance-_betted;
    },
    setRoundStatus(state,status){
      state.roundStatus = status;
    }
  },
  actions: {},
  modules: {},
});
