var gameData = {
  starterNum: 0,
  normalNum: 0
}
var starterList = ["0","ε","BITG","Oe(54)","1/{10,10[2]2}","1/{10,10,10,10}","(g<sub>64</sub>)<sup>-1</sup>","1/{10,10,100}","1/(10^^100)","10<sup>-100</sup>"]
function incretiny() {
  if (gameData.starterNum < 9) {
    gameData.starterNum += 1
    document.getElementById("number").innerHTML = starterList[gameData.starterNum]
  } else {
    if (gameData.normalNum < 0.001) {
    gameData.normalNum = 0.0000000001
    document.getElementById("number").innerHTML = gameData.normalNum.toFixed(-math.floor(math.log10(gameData.normalNum)))
  } else {
    gameData.normalNum = 0.0000000001
    document.getElementById("number").innerHTML = gameData.normalNum.toFixed(3)
  }
  }
}
