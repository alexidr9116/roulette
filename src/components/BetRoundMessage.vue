<template>
  <div id="info-panel" class="animated" :class="fadeLeft">
    <!----><!---->
    <h2 v-if="isShowCounterDesktop">BETS OPEN</h2>
    <h3 v-if="isShowWheel">{{ numberObj[num].color }} / {{ numberObj[num].type }}</h3>
    <p v-if="isShowWheel">{{ numberObj[num].text1 }}</p>
    <p v-if="isShowWheel">{{ numberObj[num].text2 }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fadeLeft: "",
      numberObj: {
        0: {
          color: "Green",
          type: "Zero",
          text1: "1° Dozen",
          text2: "2° Column",
        },
        32: {
          color: "Red",
          type: "Even",
          text1: "3° Dozen",
          text2: "2° Column",
        },
        15: {
          color: "Black",
          type: "Odd",
          text1: "2° Dozen",
          text2: "3° Column",
        },
        19: {
          color: "Red",
          type: "Odd",
          text1: "2° Dozen",
          text2: "1° Column",
        },
        4: {
          color: "Black",
          type: "Even",
          text1: "1° Dozen",
          text2: "1° Column",
        },
        21: {
          color: "Red",
          type: "Odd",
          text1: "2° Dozen",
          text2: "3° Column",
        },
        2: {
          color: "Black",
          type: "Even",
          text1: "1° Dozen",
          text2: "2° Column",
        },
        25: {
          color: "Red",
          type: "Odd",
          text1: "3° Dozen",
          text2: "1° Column",
        },
        17: {
          color: "Black",
          type: "Odd",
          text1: "2° Dozen",
          text2: "2° Column",
        },
        34: {
          color: "Red",
          type: "Even",
          text1: "3° Dozen",
          text2: "1° Column",
        },
        6: {
          color: "Black",
          type: "Even",
          text1: "1° Dozen",
          text2: "3° Column",
        },
        27: {
          color: "Red",
          type: "Odd",
          text1: "3° Dozen",
          text2: "3° Column",
        },
        13: {
          color: "Black",
          type: "Odd",
          text1: "2° Dozen",
          text2: "1° Column",
        },
        36: {
          color: "Red",
          type: "Even",
          text1: "3° Dozen",
          text2: "3° Column",
        },
        11: {
          color: "Black",
          type: "Odd",
          text1: "1° Dozen",
          text2: "2° Column",
        },
        30: {
          color: "Red",
          type: "Even",
          text1: "3° Dozen",
          text2: "3° Column",
        },
        8: {
          color: "Black",
          type: "Even",
          text1: "1° Dozen",
          text2: "2° Column",
        },
        23: {
          color: "Red",
          type: "Odd",
          text1: "2° Dozen",
          text2: "2° Column",
        },
        10: {
          color: "Black",
          type: "Even",
          text1: "1° Dozen",
          text2: "1° Column",
        },
        5: {
          color: "Red",
          type: "Odd",
          text1: "1° Dozen",
          text2: "2° Column",
        },
        24: {
          color: "Black",
          type: "Even",
          text1: "2° Dozen",
          text2: "3° Column",
        },
        16: {
          color: "Red",
          type: "Even",
          text1: "2° Dozen",
          text2: "1° Column",
        },
        33: {
          color: "Black",
          type: "Odd",
          text1: "3° Dozen",
          text2: "3° Column",
        },
        1: {
          color: "Red",
          type: "Odd",
          text1: "1° Dozen",
          text2: "1° Column",
        },
        20: {
          color: "Black",
          type: "Even",
          text1: "2° Dozen",
          text2: "2° Column",
        },
        14: {
          color: "Red",
          type: "Even",
          text1: "2° Dozen",
          text2: "2° Column",
        },
        31: {
          color: "Black",
          type: "Odd",
          text1: "3° Dozen",
          text2: "2° Column",
        },
        9: {
          color: "Red",
          type: "Odd",
          text1: "1° Dozen",
          text2: "3° Column",
        },
        22: {
          color: "Black",
          type: "Even",
          text1: "2° Dozen",
          text2: "1° Column",
        },
        18: {
          color: "Red",
          type: "Even",
          text1: "2° Dozen",
          text2: "3° Column",
        },
        29: {
          color: "Black",
          type: "Odd",
          text1: "3° Dozen",
          text2: "2° Column",
        },
        7: {
          color: "Red",
          type: "Odd",
          text1: "1° Dozen",
          text2: "1° Column",
        },
        28: {
          color: "Black",
          type: "Even",
          text1: "3° Dozen",
          text2: "1° Column",
        },
        12: {
          color: "Red",
          type: "Even",
          text1: "3° Dozen",
          text2: "1° Column",
        },
        35: {
          color: "Black",
          type: "Odd",
          text1: "3° Dozen",
          text2: "2° Column",
        },
        3: {
          color: "Red",
          type: "Odd",
          text1: "1° Dozen",
          text2: "3° Column",
        },
        26: {
          color: "Black",
          type: "Even",
          text1: "3° Dozen",
          text2: "2° Column",
        },
      },
      num: 0,
    };
  },
};
</script>
<style scoped>
#info-panel {
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.5) 15%,
    rgba(0, 0, 0, 0.5) 100%
  );
  width: 26vh;
  height: 7.87vh;
  position: absolute;
  top: 3%;
  left: 53%;
  color: #fff;
  border-radius: 0 3vh 7vh 0;
  padding: 2vh 1vh;
  z-index: 0;
}

#info-panel h1,
#info-panel h2,
#info-panel h3,
#info-panel p {
  width: 83%;
  font-weight: 800;
  float: right;
}

#info-panel h1 {
  font-size: 3.5vh;
  line-height: 0.8;
  color: #390;
}

#info-panel h2 {
  font-size: 2.5vh;
  line-height: 1;
  margin: 1vh 0 0;
}

#info-panel h3 {
  font-size: 2.5vh;
  margin-top: 0;
  margin-bottom: 1vh;
}

#info-panel p {
  font-size: 1.7vh;
  margin: 0.5%;
  font-weight: 400;
}
</style>
