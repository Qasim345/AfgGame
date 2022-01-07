window.addEventListener("load", ()=> {
  setTimeout(()=> {
    window.scrollTo(0, 1)
  }, 0)
});
// laoder
var pre = document.querySelector(".loader span");
var inc = 0;
var incT = setInterval(()=> {
  inc++;
  if (inc == 100) {
    clearInterval(incT)
  }
  pre.innerHTML = inc + "%";
}, 20)
// hide loader
setTimeout(()=> {
  document.querySelector(".loader").style.display = "none";
}, 2200)
// game screen
var screen = document.querySelector(".screen");
var backMusic = new Audio("src/backMusic.mp3");
var clickSound = new Audio("src/msg.mp3");
var num = 0;
document.getElementById("num").innerHTML = num;
// main screen
screen.addEventListener("click", ()=> {
  // playing click sound
  if (clickSound.paused) {
    clickSound.play()
  }
  clickSound.currentTime = 0;
  let div = document.createElement("div");
  div.setAttribute("class", "hub");
  screen.appendChild(div);
  num++;
  document.getElementById("num").innerHTML = num;
  div.style.top = event.pageY + "px";
  div.style.left = event.pageX + "px";
  setTimeout(()=> {
    screen.removeChild(div)
  }, 2000)
})
// timer & start game
function start() {
  // playing background music
  if (backMusic.paused) {
    backMusic.play();
    backMusic.loop = true;
  }
  var time = 150;
  document.getElementById("time").innerHTML = time;
  var timer = setInterval(()=> {
    time--;
    document.getElementById("time").innerHTML = time;
    if (time == 0) {
      navigator.vibrate(300)
      clearInterval(timer)
      document.querySelector(".over").style.display = "block";
      setTimeout(()=> {
        window.history.back();
      }, 1000)
    }
  },
    100);
  // reset timer button
  document.getElementById("reset").onclick = ()=> {
    navigator.vibrate(200);
    //backMusic.currentTime = 0;
    num = 0;
    // clearInterval(timer);
    time = 150;
  }
}
// start game
window.onload = setTimeout(start, 2800);