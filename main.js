var game = {
  numbers: 0,
  
  upNeg10Cost: 0,
  upNeg10Count: 0,
  upNeg10Max: 10,
  
  productionPerUpgrade: 0.01,

  add: 0,
  mult: 1,
  exp: 1
}
// =================================================
var starterList = [0,"ε","BITG","Oe(54)","1/{10,10[2]2}","1/{10,10,10,10}","(g<sub>64</sub>)<sup>-1</sup>","1/{10,10,100}","1/(10^^100)","10<sup>-100</sup>"]
// =================================================
function formatNum(decimal) {
    if (decimal.lt(0.001)) {
        return decimal.toFixed(-math.floor(math.log10(decimal)));
    }
    if (decimal.lt(1e9)) {
        return decimal.toFixed(3);
    }
    return decimal.toString();
}
// =================================================
document.getElementById("upgrade-1").addEventListener("click", () => {
  if (game.upNeg10Count >= game.upNeg10Max) {
    return game.upNeg10Count += 1
    return document.getElementById("number").innerHTML = starterList[game.upNeg10Count]
  }
  return game.numbers = 0.0000000001
  return document.getElementById("number").innerHTML = formatNum(game.numbers)
});
// =================================================
