
// rgb to hex
function rgbToHex(r, g, b) {
  var hex = ((r << 16) | (g << 8) | b).toString(16);
  return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
}

// hex to rgb
function hexToRgb(hex) {
  var rgb = [];
  for (var i = 1; i < 7; i += 2) {
    rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
  }
  return rgb;
}

// 计算渐变过渡色
export function gradient(startColor, endColor, step) {
  // 将 hex 转换为rgb
  var sColor = hexToRgb(startColor),
    eColor = hexToRgb(endColor);

  // 计算R\G\B每一步的差值
  var rStep = (eColor[0] - sColor[0]) / step,
    gStep = (eColor[1] - sColor[1]) / step,
    bStep = (eColor[2] - sColor[2]) / step;

  var gradientColorArr = [];
  for (var i = 0; i < step; i++) {
    // 计算每一步的hex值
    gradientColorArr.push(rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])));
  }
  return gradientColorArr;
}
//点击下载按钮判断
export function appDown() {
  var u = navigator.userAgent;
  var p = navigator.platform;
  // alert(JSON.stringify(u))
  // alert(p)
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  let platform = ''
  if (isiOS) {
    platform = 'iOS'
    // alert(p == 'iphone')
    // window.location.href = '安卓下载地址'
    // if(new RegExp("iphone","i").test(u)){
    //   platform = 'iphone'
    // }
  } else if (isAndroid) {
    platform = 'android'
    // window.location.href = '安卓下载地址'
  }
  return platform
}

export function getFillColor(value, max,) {
  let color = 'green';
  if (value > 0 && value < max / 300)
    color = '#00f964';
  if (value >= max / 300 && value < max / 200)
    color = '#03a945';
  if (value >= max / 200 && value < max / 150)
    color = '#33ff00';
  if (value >= max / 150 && value < max / 110)
    color = '#115800';
  if (value >= max / 110 && value < max / 90)
    color = '#d8ff00';
  if (value >= max / 90 && value < max / 70)
    color = '#936c00';
  if (value >= max / 70 && value < max / 50)
    color = '#c34903';
  if (value >= max / 50 && value < max / 35)
    color = '#ff5e00';
  if (value >= max / 35 && value < max / 20)
    color = '#f91717';
  if (value >= max / 20 && value < max / 10)
    color = '#ff4600';
  if (value >= max / 10 && value < max / 6)
    color = '#ff2a6f';
  if (value >= max / 6 && value < max / 5)
    color = '#b9003c';
  if (value >= max / 5 && value < max / 4)
    color = '#ff41df';
  if (value >= max / 4 && value < max / 3)
    color = '#eb1dc8';
  if (value >= max / 3 && value < max / 2)
    color = '#e51515';
  if ((value >= max / 2 && value <= max / 1))
    color = '#a10085';
  if ((value > max ))
    color = '#5e005b';


  return color;
}