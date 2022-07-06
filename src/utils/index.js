
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

  if (value > 0 && value < max / 100)
    color = 'green';

  if (value >= max / 100 && value < max / 80)
    color = '#13cd0c';

  if (value >= max / 80 && value < max / 60)
    color = '#fbdb1c';

  if (value >= max / 60 && value < max / 30)
    color = '#fb931c';

  if (value >= max / 30 && value < max / 10)
    color = '#fb1c1c';

  if (value >= max / 10 && value < max / 2)
    color = '#de1cfb';

  if ((value >= max / 2 && value <= max / 1))
    color = '#1c65fb';
     
  return color;
}