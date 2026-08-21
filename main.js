var game = {
  numbers: 0,
  
  growth: 0,
  add: 0,
  mult: 1,
  exp: 1,
  
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
  years: 0,
  
  upNeg10Count: 0,
  upNeg9Count: 0,
  upNeg8Count: 0,
  upNeg7Count: 0,
  upNeg6Count: 0,
  upNeg5Count: 0,
  upNeg4Count: 0,
  upNeg3Count: 0,
  upNeg2Count: 0,
  upNeg1Count: 0,
  
  up0Count: 0,
}
// =================================================
function time() {
  const startTime = Date.now();  
  setInterval(() => {
    const currentTime = Date.now();
    game.seconds = (currentTime - startTime) / 1000;
  }, 1);
}
// =================================================
var starterList = ["0","ε","BITG","Oe(54)","1/{10,10[2]2}","1/{10,10,10,10}","(g<sub>64</sub>)<sup>-1</sup>","1/{10,10,100}","1/(10^^100)","10<sup>-100</sup>"]
// =================================================
function formatNum(decimal) {
    if (decimal < 0.001) {
        return decimal.toFixed(-math.floor(math.log10(decimal)));
    }
    if (decimal < 1e9) {
        return decimal.toFixed(3);
    }
    return decimal.toString();
}
