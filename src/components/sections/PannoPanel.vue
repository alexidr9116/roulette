<template>

    <div _ngcontent-bdp-c0="" id="panno">
        <svg id="drawPanno" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 1400 440"
            style="transform-origin: 10% center; transform: perspective(100em) rotateX(40deg);">
            <defs id="SvgjsDefs1007">
                <filter id="brightness-filter">
                    <feComponentTransfer>
                        <feFuncR type="table" tableValues="0.2 0.9"></feFuncR>
                        <feFuncG type="table" tableValues="0.2 0.9"></feFuncG>
                        <feFuncB type="table" tableValues="0.2 0.9"></feFuncB>
                    </feComponentTransfer>
                </filter>
            </defs>
            <g id="groupOtherBets" v-if="isShowGroupBet">
                <rect id="gD1" width="400" height="70" class="transparent" x="100" y="300"></rect>
                <text id="gD1T" font-family="'Montserrat', sans-serif" font-size="30" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="30" x="262.39157485961914" y="306.9864101409912"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1144" dy="39" x="262.39157485961914">1st 12</tspan>
                </text>
                <rect id="gD2" width="400" height="70" class="transparent otherBox pulseWinBox" x="500" y="300"></rect>
                <text id="gD2T" font-family="'Montserrat', sans-serif" font-size="30" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="30" x="653.3077583312988" y="306.9864101409912"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1147" dy="39" x="653.3077583312988">2nd 12</tspan>
                </text>
                <rect id="gD3" width="400" height="70" class="transparent" x="900" y="300"></rect>
                <text id="gD3T" font-family="'Montserrat', sans-serif" font-size="30" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="30" x="1056.7696228027344" y="306.9864101409912"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1150" dy="39" x="1056.7696228027344">3rd 12</tspan>
                </text>
                <rect id="gMA" width="200" height="70" class="transparent otherBox pulseWinBox" x="100" y="370"></rect>
                <text id="gMAT" font-family="'Montserrat', sans-serif" font-size="30" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="30" x="165.0952606201172" y="376.9864101409912"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1153" dy="39" x="165.0952606201172">1 - 18</tspan>
                </text>
                <rect id="gPR" width="200" height="70" class="transparent" x="300" y="370"></rect>
                <text id="gPRT" font-family="'Montserrat', sans-serif" font-size="30" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="30" x="357.6422424316406" y="376.9864101409912"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1156" dy="39" x="357.6422424316406">EVEN</tspan>
                </text>
                <rect id="gRO" width="200" height="70" class="transparent" x="500" y="370"></rect>
                <polygon id="gROT"
                    points="599.9999975585938,425.000009765625 539.9999975585938,405.000009765625 599.9999975585938,385.000009765625 659.9999975585938,405.000009765625"
                    fill="#cc0000"></polygon>
                <rect id="gNO" width="200" height="70" class="transparent otherBox  " x="700" y="370"></rect>
                <polygon id="gNOT"
                    points="799.9999975585938,425.000009765625 739.9999975585938,405.000009765625 799.9999975585938,385.000009765625 859.9999975585938,405.000009765625"
                    fill="#000000"></polygon>
                <rect id="gDS" width="200" height="70" class="transparent otherBox pulseWinBox" x="900" y="370"></rect>
                <text id="gDST" font-family="'Montserrat', sans-serif" font-size="30" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="30" x="962.6347618103027" y="376.9864101409912"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1163" dy="39" x="962.6347618103027">ODD</tspan>
                </text>
                <rect id="gPA" width="200" height="70" class="transparent" x="1100" y="370"></rect>
                <text id="gPAT" font-family="'Montserrat', sans-serif" font-size="30" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="30" x="1153.3378219604492" y="376.9864101409912"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1166" dy="39" x="1153.3378219604492">19 - 36</tspan>
                </text>
            </g>
            <g id="SvgjsG1020">
                <rect id="gPL0" width="70" height="300"
                    :class="this.$store.state.hovered.includes('gPL0') ? 'white-green' : 'green'" x="30" y="0"></rect>
                <text id="gPL0T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="48.44886016845703" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1024" dy="65" x="48.44886016845703">0</tspan>
                </text>
                <rect id="gPL1" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL1') ? 'white-red' : 'red'" x="100" y="200"></rect>
                <text id="gPL1T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="140.05787181854248" y="202.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1027" dy="65" x="140.05787181854248">1</tspan>
                </text>
                <rect id="gPL2" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL2') ? 'white-black' : 'black'" x="100" y="100">
                </rect>
                <text id="gPL2T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="135.79491519927979" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)" class="">
                    <tspan id="SvgjsTspan1030" dy="65" x="135.79491519927979">2</tspan>
                </text>
                <rect id="gPL3" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL3') ? 'white-red' : 'red'" x="100" y="0"></rect>
                <text id="gPL3T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="134.97951793670654" y="2.395143508911133"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1033" dy="65" x="134.97951793670654">3</tspan>
                </text>
                <rect id="gPL4" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL4') ? 'white-black' : 'black'" x="200" y="200">
                </rect>
                <text id="gPL4T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="233.47747039794922" y="202.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1036" dy="65" x="233.47747039794922">4</tspan>
                </text>
                <rect id="gPL5" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL5') ? 'white-red' : 'red'" x="200" y="100"></rect>
                <text id="gPL5T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="235.85213661193848" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1039" dy="65" x="235.85213661193848">5</tspan>
                </text>
                <rect id="gPL6" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL6') ? 'white-black' : 'black'" x="200" y="0"></rect>
                <text id="gPL6T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="234.43591976165771" y="2.395143508911133"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1042" dy="65" x="234.43591976165771">6</tspan>
                </text>
                <rect id="gPL7" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL7') ? 'white-red' : 'red'" x="300" y="200"></rect>
                <text id="gPL7T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="335.26562213897705" y="202.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1045" dy="65" x="335.26562213897705">7</tspan>
                </text>
                <rect id="gPL8" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL8') ? 'white-black' : 'black'" x="300" y="100">
                </rect>
                <text id="gPL8T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="334.04967880249023" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1048" dy="65" x="334.04967880249023">8</tspan>
                </text>
                <rect id="gPL9" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL9') ? 'white-red' : 'red'" x="300" y="0"></rect>
                <text id="gPL9T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="334.7649393081665" y="2.395143508911133"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1051" dy="65" x="334.7649393081665">9</tspan>
                </text>
                <rect id="gPL10" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL10') ? 'white-black' : 'black'" x="400" y="200">
                </rect>
                <text id="gPL10T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="423.5067310333252" y="202.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1054" dy="65" x="423.5067310333252">10</tspan>
                </text>
                <rect id="gPL11" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL11') ? 'white-black' : 'black'" x="400" y="100">
                </rect>
                <text id="gPL11T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="431.03127670288086" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1057" dy="65" x="431.03127670288086">11</tspan>
                </text>
                <rect id="gPL12" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL12') ? 'white-red' : 'red'" x="400" y="0"></rect>
                <text id="gPL12T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="425.85278701782227" y="2.395143508911133"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1060" dy="65" x="425.85278701782227">12</tspan>
                </text>
                <rect id="gPL13" width="100" height="100" class="black blackBox pulseWinBox" x="500" y="200"></rect>
                <text id="gPL13T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="525.9529228210449" y="202.39514350891113"
                    transform="matrix(1,0,0,1,0,0)" class="pulseWinNum">
                    <tspan id="SvgjsTspan1063" dy="65" x="525.9529228210449">13</tspan>
                </text>
                <rect id="gPL14" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL14') ? 'white-red' : 'red'" x="500" y="100"></rect>
                <text id="gPL14T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="523.5353412628174" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1066" dy="65" x="523.5353412628174">14</tspan>
                </text>
                <rect id="gPL15" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL15') ? 'white-black' : 'black'" x="500" y="0"></rect>
                <text id="gPL15T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="525.9100074768066" y="2.395143508911133"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1069" dy="65" x="525.9100074768066">15</tspan>
                </text>
                <rect id="gPL16" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL16') ? 'white-red' : 'red'" x="600" y="200"></rect>
                <text id="gPL16T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="624.4975357055664" y="202.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1072" dy="65" x="624.4975357055664">16</tspan>
                </text>
                <rect id="gPL17" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL17') ? 'white-black' : 'black'" x="600" y="100">
                </rect>
                <text id="gPL17T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="625.3377990722656" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1075" dy="65" x="625.3377990722656">17</tspan>
                </text>
                <rect id="gPL18" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL18') ? 'white-red' : 'red'" x="600" y="0"></rect>
                <text id="gPL18T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="624.1075496673584" y="2.395143508911133"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1078" dy="65" x="624.1075496673584">18</tspan>
                </text>
                <rect id="gPL19" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL19') ? 'white-red' : 'red'" x="700" y="200"></rect>
                <text id="gPL19T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="724.8371162414551" y="202.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1081" dy="65" x="724.8371162414551">19</tspan>
                </text>
                <rect id="gPL20" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL20') ? 'white-black' : 'black'" x="700" y="100">
                </rect>
                <text id="gPL20T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="719.3009967803955" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)" class="">
                    <tspan id="SvgjsTspan1084" dy="65" x="719.3009967803955">20</tspan>
                </text>
                <rect id="gPL21" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL21') ? 'white-red' : 'red'" x="700" y="0"></rect>
                <text id="gPL21T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="726.7683219909668" y="2.395143508911133"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1087" dy="65" x="726.7683219909668">21</tspan>
                </text>
                <rect id="gPL22" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL22') ? 'white-black' : 'black'" x="800" y="200">
                </rect>
                <text id="gPL22T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="821.6041374206543" y="202.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1090" dy="65" x="821.6041374206543">22</tspan>
                </text>
                <rect id="gPL23" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL23') ? 'white-red' : 'red'" x="800" y="100"></rect>
                <text id="gPL23T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="821.704273223877" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1093" dy="65" x="821.704273223877">23</tspan>
                </text>
                <rect id="gPL24" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL24') ? 'white-black' : 'black'" x="800" y="0"></rect>
                <text id="gPL24T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="819.8445949554443" y="2.395143508911133"
                    transform="matrix(1,0,0,1,0,0)" class="">
                    <tspan id="SvgjsTspan1096" dy="65" x="819.8445949554443">24</tspan>
                </text>
                <rect id="gPL25" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL25') ? 'white-red' : 'red'" x="900" y="200"></rect>
                <text id="gPL25T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="921.6470527648926" y="202.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1099" dy="65" x="921.6470527648926">25</tspan>
                </text>
                <rect id="gPL26" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL26') ? 'white-black' : 'black'" x="900" y="100">
                </rect>
                <text id="gPL26T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="920.2934494018555" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1102" dy="65" x="920.2934494018555">26</tspan>
                </text>
                <rect id="gPL27" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL27') ? 'white-red' : 'red'" x="900" y="0"></rect>
                <text id="gPL27T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="921.1320648193359" y="2.395143508911133"
                    transform="matrix(1,0,0,1,0,0)" class="">
                    <tspan id="SvgjsTspan1105" dy="65" x="921.1320648193359">27</tspan>
                </text>
                <rect id="gPL28" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL28') ? 'white-black' : 'black'" x="1000" y="200">
                </rect>
                <text id="gPL28T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="1019.8445949554443" y="202.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1108" dy="65" x="1019.8445949554443">28</tspan>
                </text>
                <rect id="gPL29" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL29') ? 'white-black' : 'black'" x="1000" y="100">
                </rect>
                <text id="gPL29T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="1020.5741596221924" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1111" dy="65" x="1020.5741596221924">29</tspan>
                </text>
                <rect id="gPL30" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL30') ? 'white-red' : 'red'" x="1000" y="0"></rect>
                <text id="gPL30T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="1018.4283771514893" y="2.395143508911133"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1114" dy="65" x="1018.4283771514893">30</tspan>
                </text>
                <rect id="gPL31" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL31') ? 'white-black' : 'black'" x="1100" y="200">
                </rect>
                <text id="gPL31T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="1125.952922821045" y="202.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1117" dy="65" x="1125.952922821045">31</tspan>
                </text>
                <rect id="gPL32" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL32') ? 'white-red' : 'red'" x="1100" y="100"></rect>
                <text id="gPL32T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="1120.9031810760498" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1120" dy="65" x="1120.9031810760498">32</tspan>
                </text>
                <rect id="gPL33" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL33') ? 'white-black' : 'black'" x="1100" y="0">
                </rect>
                <text id="gPL33T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="1121.0033168792725" y="2.395143508911133"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1123" dy="65" x="1121.0033168792725">33</tspan>
                </text>
                <rect id="gPL34" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL34') ? 'white-red' : 'red'" x="1200" y="200"></rect>
                <text id="gPL34T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="1218.4569873809814" y="202.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1126" dy="65" x="1218.4569873809814">34</tspan>
                </text>
                <rect id="gPL35" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL35') ? 'white-black' : 'black'" x="1200" y="100">
                </rect>
                <text id="gPL35T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="1221.0891494750977" y="102.39514350891113"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1129" dy="65" x="1221.0891494750977">35</tspan>
                </text>
                <rect id="gPL36" width="100" height="100"
                    :class="this.$store.state.hovered.includes('gPL36') ? 'white-red' : 'red'" x="1200" y="0"></rect>
                <text id="gPL36T" font-family="'Montserrat', sans-serif" font-size="50" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="50" x="1219.4237365722656" y="2.395143508911133"
                    transform="matrix(1,0,0,1,0,0)">
                    <tspan id="SvgjsTspan1132" dy="65" x="1219.4237365722656">36</tspan>
                </text>
                <rect id="gC3" width="70" height="100" class="transparent" x="1300" y="0"></rect>
                <text id="gC3T" font-family="'Montserrat', sans-serif" font-size="30" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="30" x="1297.9923934936523" y="21.98641014099121"
                    transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,1285.0000362396243,1385.0000400543213)">
                    <tspan id="SvgjsTspan1135" dy="39" x="1297.9923934936523">2 to 1</tspan>
                </text>
                <rect id="gC2" width="70" height="100" class="transparent" x="1300" y="100"></rect>
                <text id="gC2T" font-family="'Montserrat', sans-serif" font-size="30" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="30" x="1297.9923934936523" y="121.98641014099121"
                    transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,1185.0000247955325,1485.000051498413)">
                    <tspan id="SvgjsTspan1138" dy="39" x="1297.9923934936523">2 to 1</tspan>
                </text>
                <rect id="gC1" width="70" height="100" class="transparent otherBox pulseWinBox" x="1300" y="200"></rect>
                <text id="gC1T" font-family="'Montserrat', sans-serif" font-size="30" fill="#ffffff"
                    family="'Montserrat', sans-serif" size="30" x="1297.9923934936523" y="221.9864101409912"
                    transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,1085.0000400543215,1585.000036239624)">
                    <tspan id="SvgjsTspan1141" dy="39" x="1297.9923934936523">2 to 1</tspan>
                </text>
            </g>
        </svg>
    </div>

</template>
<script>
export default {
    name: "PannoPanel",
    props: {
        isShowGroupBet: true,
    },
    data() {
        return {
            isOvaleShow: true,

            hovered: [],
            hoveredPannos: [],
            selected: [],
        }
    },
    methods: {

        handleShowGroupBet() {
            this.isShowGroupBet = !this.isShowGroupBet;
        },

        setHovered(_hovered, isOvale) {

            const _hovers = _hovered.trim().includes(" ") ? _hovered.split(' ') : [_hovered.trim()];
            const _hoverPannos = [];
            const _coinPannos = [];

            for (const id of _hovers) {
                if (isOvale) {
                    const hover = document.getElementById(id).getAttribute('hover');
                    if (hover && hover != null) {
                        const hovers = hover.includes(" ") ? hover.split(' ') : [hover.trim()];

                        for (const pannoId of hovers) {
                            _hoverPannos.push((`g${pannoId}`));
                            _coinPannos.push(pannoId);
                        }
                    }
                }
                else {
                    _hoverPannos.push((`g${id}`));
                    _coinPannos.push(id);

                }

            }
            this.$store.commit('setHovered', _hoverPannos);
        }
    },
    mounted() {
        const snapPoints = document.getElementsByClassName('snap-point');
        const _attrs = [];
        for (const element of snapPoints) {
            const _attr = {
                refer:element.getAttribute('id'),
                width:element.getAttribute('width'),
                height:element.getAttribute('height'),
                x:element.getAttribute('x'),
                y:element.getAttribute('y'),
                xoffset:element.getAttribute('xoffset'),
                yoffset:element.getAttribute('yoffset'),
                hover:element.getAttribute('hover'),
            }
            _attrs.push(_attr);

            element.addEventListener('mouseover', () => {
                // betting hover

                if (element.getAttribute('hover') != null) {

                    this.setHovered(element.getAttribute('hover'), false);
                }
                // oval hover
                else {
                    this.setHovered(element.getAttribute('bet_list'), true);
                }


            },
                false);
            element.addEventListener('mouseout', () => {
                // betting hover
                this.$store.commit('setHovered', []);
            },
                false);
        }
        console.log(_attrs);
    }
}
</script>
<style>
</style>