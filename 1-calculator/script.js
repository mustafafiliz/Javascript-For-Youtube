var btnNumber = document.querySelectorAll("#btnNumber");
var screen = document.querySelector("#screen");
var optState = false;
var opt = "";
var final = 0;
var btnOpt = document.querySelectorAll("#btnOpt");

btnNumber.forEach(element => {
  element.onclick = function () {
    this.style.fontSize = "25px";
    if (screen.textContent == "0" || optState) {
      screen.textContent = "";
    }
    screen.textContent += this.textContent;
    optState = false;
    setTimeout(() => {
      this.style.fontSize = "15px";
    }, 500);
  };
});

btnOpt.forEach(element => {
  element.onclick = function () {
    optState = true;
    var newOpt = this.textContent;

    switch (opt) {
      case "+":
        screen.textContent = final + Number(screen.textContent);
        break;
      case "-":
        screen.textContent = final - Number(screen.textContent);
        break;
      case "*":
        screen.textContent = final * Number(screen.textContent);
        break;
      case "/":
        screen.textContent = final / Number(screen.textContent);
        break;
      case "=":
        final = Number(screen.textContent);
        break;
    }
    final = Number(screen.textContent);
    opt = newOpt;
  };
});
