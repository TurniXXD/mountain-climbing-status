var person = document.getElementsByClassName('player-person')
let playerText = document.getElementsByClassName('player-text')
let playerScore = document.getElementsByClassName('player-score')
var path = document.getElementById('mountain-path')
let animateMotion = document.getElementsByClassName('player-animateMotion')
var scoreboard1 = document.getElementById('scoreboard-1')
var scoreboard2 = document.getElementById('scoreboard-2')
var scoreboard3 = document.getElementById('scoreboard-3')
var scoreboard4 = document.getElementById('scoreboard-4')
var scoreboard5 = document.getElementById('scoreboard-5')
var pathContentPoint, points = new Array, sameScore, position
//whole svg path
const pathContent = 'M43.7129 1185.15L68.7129 1167.59M68.7059 1168.08L92.7059 1150.6M92.7137 1150.07L117.714 1132.59M117.725 1133.06L142.725 1116.58M142.714 1117.07L167.714 1099.59M167.718 1099.67L192.718 1082.59M192.718 1082.71L217.718 1065.59M217.716 1065.83L242.716 1048.59M242.719 1048.59L292.719 1014.59M292.728 1014.78L317.728 998.58M317.718 998.674L342.718 981.587M342.719 981.587L442.719 913.587M442.731 913.579L467.731 897.579M467.719 897.587L517.719 863.587M517.71 863.593L538.71 848.593M538.213 848.859L706.213 914.614M706.217 914.617L731.217 924.662M730.616 924.793L751.616 903.788M751.624 903.779L773.624 882.774M773.617 882.782L839.617 817.027M839.624 817.019L861.624 796.013M861.617 796.021L883.617 774.103M882.62 775.012L897.62 760.4M897.384 760.404L919.384 782.322M919.39 782.33L941.39 805.162M941.383 805.153L987.383 850.817M987.389 850.824L1010.39 874.569M1010.38 874.561L1034.38 898.306M1034.39 898.312L1059.39 923.884M1058.72 923.588L1087.72 903.588M1087.72 903.584L1117.72 883.584M1117.73 883.582L1146.73 864.582M1146.72 864.584L1176.72 844.584M1176.72 844.586L1207.72 823.586M1206.72 823.587L1244.72 797.587M1244.73 797.455L1285.73 771.577M1285.71 771.467L1325.71 743.59M1325.72 743.464L1366.72 715.587M1365.72 716.466L1407.72 687.588M1407.73 687.579L1449.73 660.579M1449.69 660.789L1547.69 595.034M1547.69 595.028L1581.69 573.11M1580.61 573.191L1599.61 549.686L1629.61 512.685M1629.61 513.682L1653.61 484.6M1653.62 484.678L1669.62 465.678M1669.61 465.687L1689.61 440.769M1689.62 440.758L1712.62 413.676M1712.61 413.681L1736.61 384.681M1735.97 384.874L1787.97 382.134M1787.98 382.133L1839.98 380.307M1839.97 380.307L1889.97 377.568'
//players array
var players = [["Michal", "1"], ["Terka", "2"], ["Tomáš", "15"], ["Kika", "50"], ["Lukáš", "34"], ["Matěj", "46"], ["Jakub", "3"], ["Ema", "47"], ["Anna", "48"], ["Víťa", "45"], ["Kryštof", "15"], ["Bea", "20"], ["Aďa", "34"]]

//get score from array into another single array
// for (let p = 0 ; p <= players.length; p++) {
//   var subArray = players[p];
//   for (var j = 0; j < subArray.length; j++) {
//     console.log(subArray[1]);
//     points += subArray[1]
//   }
// }

console.log(players[1][1])

//checking for same score
const doesArrayHaveDuplicates = points.some(
  (val, i) => points.indexOf(val) !== i
);

console.log(doesArrayHaveDuplicates)

//scoreboard what if there are two people with same score
scoreboard1.textContent = Math.max(points)

//iteration for every player
for(let set = 0 ; set <= players.length; set++) {

  if (set%2==0) {
    position = 1
  } else {
    position = 1
  }
  //move nickname to prevent overflowing page
  if (players[set][1] > 44) {
    playerText[set].setAttribute("x", "-35px")
  }
  
  playerText[set].textContent = players[set][0]
  playerScore[set].textContent = players[set][1]  
  
  for (i = 0; i < person.length; i++) {
    person[i].style.display = 'block';
  }
  
  //split string to array and then slice array and leave the first part of path
  pathContentPoint = pathContent.split(" ").slice(0, players[set][1]*2)
  
  //set path and duration for individual player
  var dur = 0.25
  for (var c = 1 ; c <= pathContentPoint.length/2 ; c++) {
    dur += 0.25
    animateMotion[set].setAttribute("dur", dur)
    animateMotion[set].setAttribute("path", pathContentPoint)
  }
  console.log("id: " + set + "\nplayer: " + players[set][0] + "\npoints: " + players[set][1])
}
console.log("\nTotal number of players: " + players.length)




