var ball = document.querySelector("#ball");

ball.addEventListener("click", changeTheme);

var leftside = true;
function changeTheme() {
  if (leftside == true) {
    ball.style.left = "40px";
    document.querySelector("body").style.backgroundColor = "#111111";
    ball.style.backgroundColor = "#111111";
    document.querySelector(".mode").style.backgroundColor = "#ffffff";
    leftside = false;
  } else {
    ball.style.left = "5px";
    document.querySelector("body").style.backgroundColor = "#ffffff";
    ball.style.backgroundColor = "#ffffff";
    document.querySelector(".mode").style.backgroundColor = "#111111";
    leftside = true;
  }
}
