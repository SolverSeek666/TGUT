var game = {
  numbers: 0,
  
  upNeg10Cost: 0,
  upNeg10Count: 0,
  upNeg10Max: 10,
  
  upNeg9Cost: 0,
  upNeg9Count: 0,
  upNeg9Max: 5,

  upNeg8Cost: 0,
  upNeg8Count: 0,
  upNeg8Max: 2,
  
  growth: 0,
  add: 0,
  mult: 1,
  exp: 1
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
