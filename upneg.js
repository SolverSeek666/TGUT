let negpanel = document.getElementsByClassName("negpanel");
for (let i = 0; i < negpanel.length; i++) {
    negpanel[i].onclick = function() {
        if (document.getElementById(`upgrade-neg${10-i}`).disabled === true) {
            negpanel[i+1].style.display = "";
        }
    }
}
// =================================================
function UPneg10() {
  if (game.upNeg10Count >= game.upNeg10Max-1) {
    game.upNeg10Count += 1
    game.numbers = 0.0000000001
    document.getElementById("number").innerHTML = formatNum(game.numbers);
    document.getElementById("upneg10-buy-count").innerHTML = "Buy: " + game.upNeg10Count + "/10";
    document.getElementById("upneg10-cost").innerHTML = "Upgrade Maxed";
    document.getElementById("upgrade-neg10").disabled = true;
    return;
  }
  game.upNeg10Count += 1
  document.getElementById("number").innerHTML = starterList[game.upNeg10Count]
  document.getElementById("upneg10-buy-count").innerHTML = "Buy: " + game.upNeg10Count + "/10"
}
// =================================================
function UPneg9() {
  if (game.numbers >= 0.0000000001) {
    if (game.upNeg9Count >= game.upNeg9Max-1) {
      game.upNeg9Count += 1
      game.numbers += 0.0000000001
      document.getElementById("number").innerHTML = formatNum(game.numbers);
      document.getElementById("upneg9-buy-count").innerHTML = "Buy: " + game.upNeg9Count + "/5";
      document.getElementById("upneg9-cost").innerHTML = "Upgrade Maxed";
      document.getElementById("upgrade-neg9").disabled = true;
      return;
    };
    game.upNeg9Count += 1;
    game.numbers += 0.0000000001;
    document.getElementById("number").innerHTML = formatNum(game.numbers);
    document.getElementById("upneg9-buy-count").innerHTML = "Buy: " + game.upNeg9Count + "/5";
    return;
  }
}
// =================================================
function UPneg9() {
  if (game.numbers >= 0.0000000001) {
    if (game.upNeg9Count >= game.upNeg9Max-1) {
      game.upNeg9Count += 1
      game.numbers += 0.0000000001
      document.getElementById("number").innerHTML = formatNum(game.numbers);
      document.getElementById("upneg9-buy-count").innerHTML = "Buy: " + game.upNeg9Count + "/5";
      document.getElementById("upneg9-cost").innerHTML = "Upgrade Maxed";
      document.getElementById("upgrade-neg9").disabled = true;
      return;
    };
    game.upNeg9Count += 1;
    game.numbers += 0.0000000001;
    document.getElementById("number").innerHTML = formatNum(game.numbers);
    document.getElementById("upneg9-buy-count").innerHTML = "Buy: " + game.upNeg9Count + "/5";
    return;
  }
}
// =================================================
function UPneg8() {
  if (game.numbers >= 0.0000000006) {
    if (game.upNeg8Count >= game.upNeg8Max-1) {
      game.upNeg8Count += 1
      game.numbers += 0.0000000002
      document.getElementById("number").innerHTML = formatNum(game.numbers);
      document.getElementById("upneg8-buy-count").innerHTML = "Buy: " + game.upNeg8Count + "/2";
      document.getElementById("upneg8-cost").innerHTML = "Upgrade Maxed";
      document.getElementById("upgrade-neg8").disabled = true;
      return;
    };
    game.upNeg8Count += 1;
    game.numbers += 0.0000000002;
    document.getElementById("number").innerHTML = formatNum(game.numbers);
    document.getElementById("upneg8-buy-count").innerHTML = "Buy: " + game.upNeg8Count + "/2";
    return;
  }
}
