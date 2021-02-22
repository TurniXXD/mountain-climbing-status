//pro přidání nového hráče vytvoř novou část v poli players pár řádků níže, 
//a do HTML této stránky nakopíruj dalšího hráče (celou část ve které je class="player")
var path = document.getElementById('mountain-path')
var person = document.getElementsByClassName('player-person')
var playerText = document.getElementsByClassName('player-text')
var playerScore = document.getElementsByClassName('player-score')
var animateMotion = document.getElementsByClassName('player-animateMotion')
var totalScoreboardLi = document.getElementsByClassName('total-scoreboard-li')
var totalScoreboardLiSpan = document.getElementsByClassName('total-scoreboard-li-span')
var totalScoreboard = document.getElementById('total-scoreboard-table')
var clothes = document.getElementsByClassName('clothes'), clothes1 = document.getElementsByClassName('clothes-1')
var backpack = document.getElementsByClassName('backpack'), backpack1 = document.getElementsByClassName('backpack-1')
var cap = document.getElementsByClassName('cap'), cap1 = document.getElementsByClassName('cap-1')
var scoreboard1 = document.getElementById('scoreboard-1'), scoreboard2 = document.getElementById('scoreboard-2'), scoreboard3 = document.getElementById('scoreboard-3'), scoreboard4 = document.getElementById('scoreboard-4'), scoreboard5 = document.getElementById('scoreboard-5')
//colors
var red = "DB0000", lightRed = "FF5F7B", blue = "325DCA", lightBlue = "5E96EA", green = "177C00", lightGreen = "1FAC00", yellow = "EAC400", lightYellow = "FFFF00", brown = "4F3E05", lightBrown = "835F29", black = "151C15", grey = "747D72"
//global vars
var pathContentPoint, sameScore
//global arrays
var colors = new Array, points = new Array, names = new Array, pointsNames = new Array, isSameScore = new Array, players = new Array, sameScoreInt = new Array
//whole svg path
const pathContent = 'M43.7129 1185.15L68.7129 1167.59M68.7059 1168.08L92.7059 1150.6M92.7137 1150.07L117.714 1132.59M117.725 1133.06L142.725 1116.58M142.714 1117.07L167.714 1099.59M167.718 1099.67L192.718 1082.59M192.718 1082.71L217.718 1065.59M217.716 1065.83L242.716 1048.59M242.719 1048.59L292.719 1014.59M292.728 1014.78L317.728 998.58M317.718 998.674L342.718 981.587M342.719 981.587L442.719 913.587M442.731 913.579L467.731 897.579M467.719 897.587L517.719 863.587M517.71 863.593L538.71 848.593M538.213 848.859L706.213 914.614M706.217 914.617L731.217 924.662M730.616 924.793L751.616 903.788M751.624 903.779L773.624 882.774M773.617 882.782L839.617 817.027M839.624 817.019L861.624 796.013M861.617 796.021L883.617 774.103M882.62 775.012L897.62 760.4M897.384 760.404L919.384 782.322M919.39 782.33L941.39 805.162M941.383 805.153L987.383 850.817M987.389 850.824L1010.39 874.569M1010.38 874.561L1034.38 898.306M1034.39 898.312L1059.39 923.884M1058.72 923.588L1087.72 903.588M1087.72 903.584L1117.72 883.584M1117.73 883.582L1146.73 864.582M1146.72 864.584L1176.72 844.584M1176.72 844.586L1207.72 823.586M1206.72 823.587L1244.72 797.587M1244.73 797.455L1285.73 771.577M1285.71 771.467L1325.71 743.59M1325.72 743.464L1366.72 715.587M1365.72 716.466L1407.72 687.588M1407.73 687.579L1449.73 660.579M1449.69 660.789L1547.69 595.034M1547.69 595.028L1581.69 573.11M1580.61 573.191L1599.61 549.686L1629.61 512.685M1629.61 513.682L1653.61 484.6M1653.62 484.678L1669.62 465.678M1669.61 465.687L1689.61 440.769M1689.62 440.758L1712.62 413.676M1712.61 413.681L1736.61 384.681M1735.97 384.874L1787.97 382.134M1787.98 382.133L1839.98 380.307M1839.97 380.307L1889.97 377.568'
//players array
//[body, "jméno", "barva kšiltovky", "barva batohu", "barva oblečení"] !!! body a barvy psát bez "" !!!
var players = [[35, "Ema", red, lightRed, blue], [34, "Terka", green, lightGreen, brown], [36, "Tomáš", green, lightGreen, brown], [50, "Kika", green, lightGreen, brown], [2, "Lukáš", green, lightGreen, brown], [45, "Matěj", green, lightGreen, brown], [1, "Jakub", green, lightGreen, brown], [2, "Michal", green, lightGreen, brown], [45, "Anna", green, lightGreen, brown], [45, "Víťa", green, lightGreen, brown], [45, "Kryštof", green, lightGreen, brown], [20, "Bea", green, lightGreen, brown], [34, "Aďa", green, lightGreen, brown]]

//sort players by highest score
players = players.sort((a,b) => a[0] - b[0])
//sort players by lowest score
playersReversed = players.sort((a,b) => b[0] - a[0])
console.log(players)

//get score from array into another single array and create total scoreboard
for (var p in players) {
  points[p] = players[p][0]
  names[p] = players[p][1]
  isSameScore[p] = players[p][5]
  pointsNames += names[p]
  pointsNames += points[p]

  let li = document.createElement("li")
  let span = document.createElement("span")
  let text = document.createTextNode("(" + playersReversed[p][0] + ")" + " " + playersReversed[p][1])
  li.classList.add("total-scoreboard-li")
  li.appendChild(span)
  li.appendChild(text)
  span.classList.add("total-scoreboard-li-span")
  totalScoreboard.appendChild(li)
}

//checking for same score
function find_duplicate_in_array(arra1) {
  var object = {};
  var result = [];
  arra1.forEach(function (item) {
    if(!object[item])
        object[item] = 0;
      object[item] += 1;
  })
  for (var prop in object) {
     if(object[prop] >= 2) {
         result.push(prop);
     }
  }
  return result;
}



//samescore array push and li text
sameScore = find_duplicate_in_array(points).map(x=>+x)
for (let i = 0; i < players.length; i++) {
  totalScoreboardLiSpan[i].textContent = `${i+1}. `
  for (let s = 0; s < sameScore.length; s++) {
    if(JSON.stringify(players[i][0])==JSON.stringify(sameScore[s]))
    players[i].push("sameScore")
  }
}

//scoreboard what if there are two people with same score
let sortedPoints = points.sort(function(a, b){return b-a});
scoreboard1.textContent = "(" + points[0] + ") " + names[0]
scoreboard2.textContent = "(" + points[1] + ") " + names[1]
scoreboard3.textContent = "(" + points[2] + ") " + names[2]
scoreboard4.textContent = "(" + points[3] + ") " + names[3]
scoreboard5.textContent = "(" + points[4] + ") " + names[4]

console.log(sameScore)
console.log(points)
console.log(players[p][0].toString())
console.log(players)

console.log("\nTotal number of players: " + players.length)

//style for total scoreboard
totalScoreboard.style.background = "#0FA402"
for (let i = 0; i < totalScoreboardLi.length; i++) {
  totalScoreboardLi[i].style.padding = "1vh"
}
totalScoreboardLiSpan[0].style.fontSize = "55px"
totalScoreboardLiSpan[1].style.fontSize = "50px"
totalScoreboardLiSpan[2].style.fontSize = "45px"

let f = 55
let ph = 65
//iteration for every player
for(let set = 0 ; set <= players.length; set++) {

  //center nickaname
  if (players[set][1].length > 10) {
    playerText[set].setAttribute("x", "25px")
  }

  //prevent players with same score from overlaping
  if (set != 0 && players[set-1].length == 6 && players[set].length == 6) {
    playerText[set].setAttribute("y", `-${f}px`)
    f+=30
    ph+=30
  }else {
    f = 55
    ph = 65
  }
  console.log(f)
  playerText[set].textContent = players[set][1]
  playerScore[set].textContent = players[set][0]  
  cap[set].setAttribute("fill", "#" + players[set][2])
  cap1[set].setAttribute("fill", "#" + players[set][2])
  backpack[set].setAttribute("fill", "#" + players[set][3])
  backpack1[set].setAttribute("fill", "#" + players[set][3])
  clothes[set].setAttribute("fill", "#" + players[set][4])
  clothes1[set].setAttribute("fill", "#" + players[set][4])
  
  for (i = 0; i < person.length; i++) {
    person[i].style.display = 'block';
  }
  
  //split string to array and then slice array and leave the first part of path
  pathContentPoint = pathContent.split(" ").slice(0, players[set][0]*2)
  
  //set path and duration for individual player
  var dur = 0.25
  for (var c = 1 ; c <= pathContentPoint.length/2 ; c++) {
    dur += 0.25
    animateMotion[set].setAttribute("dur", dur)
    animateMotion[set].setAttribute("path", pathContentPoint)
  }
  console.log("id: " + set + "\nplayer: " + players[set][1] + "\npoints: " + players[set][0])
}