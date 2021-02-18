var person = document.getElementsByClassName('person')
var path = document.getElementById('mountain-path')
var animateMotion = document.getElementById('player-1-animateMotion')
var points = 9
var pathContentPoint
const pathContent = 'M65.7036 1164.16L114.028 1128.6M114.704 1128.16L163.028 1092.6M163.704 1092.16L212.028 1056.6M211.704 1056.16L260.028 1020.6M259.704 1021.16L308.028 985.597M307.704 985.161L356.028 949.597M355.704 950.161L404.028 914.597M403.704 914.161L452.028 878.597M451.704 879.161L500.028 843.597M499.705 843.16L538.705 814.597M538.197 814.54L706.197 886.54M706.201 886.542L731.201 897.542M730.631 897.663L751.631 874.663M751.639 874.654L773.639 851.654M773.631 851.662L839.631 779.662M839.639 779.654L861.639 756.654M861.631 756.662L883.631 732.662M882.635 733.658L897.635 717.658M897.369 717.662L919.369 741.662M919.375 741.67L941.375 766.67M941.368 766.661L987.368 816.661M987.374 816.669L1010.37 842.669M1010.37 842.661L1034.37 868.661M1034.37 868.667L1059.37 896.667M1058.7 896.597L1352.7 680.597M1351.7 680.597L1547.7 536.597M1547.71 536.592L1581.71 512.592M1580.6 512.704L1616.6 463.704M1616.6 463.695L1653.6 415.695M1653.6 415.7L1689.6 367.7M1689.6 367.695L1736.6 306.695M1735.97 306.501L1787.97 303.501M1787.98 303.5L1839.98 301.5M1839.97 301.501L1889.97 298.501'

for (i = 0; i < person.length; i++) {
  person[i].style.display = 'block';
}



pathContentPoint = pathContent.split(" ").slice(0, points*2)

console.log(pathContentPoint.length)


/* for (i = 0; i <= pointsCalculated; i++) {
  if(i%2==0){

    }
  
} */

for (var c = 1 ; c <=69 ; c++) {
  switch(points) {
    case 1: {
      animateMotion.setAttribute("dur", "0.5")
      animateMotion.setAttribute("path", pathContentPoint)
    }
    case 2: {
      animateMotion.setAttribute("dur", "0.5")
      animateMotion.setAttribute("path", pathContentPoint)
    }
    case 3: {
      animateMotion.setAttribute("dur", "1")
      animateMotion.setAttribute("path", pathContentPoint)
    }
    case 4: {
      animateMotion.setAttribute("dur", "1.5")
      animateMotion.setAttribute("path", pathContentPoint)
    }
    case 5: {
      animateMotion.setAttribute("dur", "2")
      animateMotion.setAttribute("path", pathContentPoint)
    }
    case 6: {
      animateMotion.setAttribute("dur", "2.5")
      animateMotion.setAttribute("path", pathContentPoint)
    }
    case 7: {
      animateMotion.setAttribute("dur", "3")
      animateMotion.setAttribute("path", pathContentPoint)
    }
    case 8: {
      animateMotion.setAttribute("dur", "3.5")
      animateMotion.setAttribute("path", pathContentPoint)
    }
    case 9: {
      animateMotion.setAttribute("dur", "4")
      animateMotion.setAttribute("path", pathContentPoint)
    }
    case 68: {
      animateMotion.setAttribute("dur", "4.5")
      animateMotion.setAttribute("path", pathContentPoint)
    }
    
  }
}
