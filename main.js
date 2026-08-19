var gameData = {
  starterNum: 0,
  NormalNum: 0
}
var starterList = ["0","ε","BITG","Oe(54)","1/{10,10[2]2}","1/{10,10,10,10}","(g<sub>64</sub>)<sup>-1</sup>","1/{10,10,100}","1/(10^^100)","10<sup>-100</sup>","0.0000000001"]
function incretiny() {
  gameData.starterNum += 1
  document.getElementById("number").innerHTML = starterList[gameData.starterNum]
}
