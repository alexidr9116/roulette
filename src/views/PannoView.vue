<template>
  <div class="panno overflow-y-auto h-full">
    <Panno></Panno>
  </div>
</template>

<script>

import request from "@/utils/request";
import Panno from "@/components/Panno.vue";
import { mapState } from 'vuex';
export default {
  name: "PannoView",
  components: { Panno },
  computed: mapState(['roundStatus']),
  watch: {
    roundStatus(status, old) {
      console.log(status, old)
      if (old == "end") {
        this.getUserBalance();
        // this.getLastBet();
        
      }
      console.log(status, old)
    }
  },
  mounted(){
    this.getHotCoolNumbers();
  },
  methods: {

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
      console.log(token)
      return token;
    },
    async getLastBet() {
      try {
        const response = await request.post('/api/member/getLastBet', {}, { headers: this.getAxoisTokenHeader() });
          this.$store.commit("setLastBetInfo", response.data.result);
        console.log(response)
      }
      catch (err) {
        console.log(err)
      }
    },
    async getUserBalance() {
      try {
        const response = await request.post('/api/member/getAmount', {}, { headers: this.getAxoisTokenHeader() });
        this.$store.commit("setBalance", response.data.result.amount);
        console.log(response)
      }
      catch (err) {
        console.log(err)
      }
    },
    async getHotCoolNumbers(){
      try {
        const response = await request.post('/api/game/codeRank');
        this.$store.commit("setHotCoolNumbers", response.data.result);
        console.log(response)
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
