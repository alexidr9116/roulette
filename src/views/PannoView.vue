<template>
  
    <Panno></Panno>
  
</template>

<script>

import request from "@/utils/request";
import Panno from "@/components/Panno.vue";
import { mapState } from 'vuex';
export default {
  name: "PannoView",
  components: { Panno },
  data() {
    return {
      ws: null,
      isConnected: false,
    }
  },
  computed: mapState(['roundStatus', 'selected']),

  watch: {
    roundStatus(status, old) {
      console.log(status, old)
      if (status === "started") {
        this.getUserBalance();

        // this.getLastBet();
      }

      if (status === 'wait') {
        this.uploadBets();
      }

    }
  },
  mounted() {
    this.initWebsocket();
    // this.getHotCoolNumbers();
    setTimeout(() => {
      if (this.isConnected) {
        const ping = { "type": "ping" };
        this.ws.send(JSON.stringify(ping));
      }

    }, 30000);
  },
  methods: {
    uploadBets() {

      if (this.isConnected) {
        for (const selected of this.$store.state.selected) {
          if (selected.refer.startsWith('o')) {
            continue;
          }
          const bet = {
            seqplay: '40158451',
            bet_code: selected.refer,
            bet_amount: selected.value
          }
          console.log(bet)
          this.ws.send(JSON.stringify(bet));
        }
      }
    },
    initWebsocket() {
      const vm = this;
      if (this.ws == null) {
        this.ws = new WebSocket("wss://api.asian888.club:2348?token=" + this.getUserToken());
        this.ws.onopen = function () {
          // vm.isLogin = true;
          vm.isConnected = true;

        };
        this.ws.onmessage = function (evt) {
          // oUl.innerHTML += "<li>" + evt.data + "</li>";

          let data = JSON.parse(evt.data)
          console.log(data, " is received from ws")

          // get game number;

          if (data.type === 'game') {
            if (data.status === 'go') {
              // start round
              this.$store.commit("setRoundStatus", "started");

            }
            if (data.status === 'stop') {
              // no betting
              this.$store.commit("setRoundStatus", "wait");
            }
            if (data.status === 'end') {
              // end
              // this.$store.commit("setRoundStatus", "end");
            }
            if (data.status === 'result') {
              let num = data.number
              if (num.slice(0, 1) == 0) {
                num = num.slice(1, 2)
              }
              this.$store.commit("setWinNumber", parseInt(num));
              this.$store.commit("setRoundStatus", "end");
              // vm.updataNum(num)
            }
          }
        };
        this.ws.onclose = function () {
          // oUl.innerHTML += "<li>客户端已断开连接</li>";
          vm.isConnected = false;
          console.log('web socket is closed', this.ws)
        };
        this.ws.onerror = function (evt) {
          vm.isConnected = false;
          // oUl.innerHTML += "<li>" + evt.data + "</li>";
          console.log(evt.data, " is ws error")
        };

      }

    },
    getAxoisTokenHeader() {
      const headers = {
        'Content-Type': 'application/json',
        'token': this.getUserToken()
      }
      return headers;
    },
    getUserToken() {
      let token = this.$store.state.token;
      if (token == '')
        token = localStorage.getItem('userToken');
      // console.log(token)
      return token;
    },
    
    async getUserBalance() {
      try {
        const response = await request.post('/api/member/getAmount', {}, { headers: this.getAxoisTokenHeader() });
        // const response = await request.post('/member/getAmount', {}, { headers: this.getAxoisTokenHeader() });
        this.$store.commit("setBalance", response.data.result.amount);
        // console.log(response)
      }
      catch (err) {
        console.log(err)
      }
    },
    async getHotCoolNumbers() {
      try {
        const response = await request.post('/api/game/codeRank');
        // const response = await request.post('/game/codeRank');
        this.$store.commit("setHotCoolNumbers", response.data.result);
        // console.log(response)
      }
      catch (err) {
        console.log(err)
      }
    }
  }

};
</script>

<style scoped>
</style>
