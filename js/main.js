let theTurn = "X";
const box = document.querySelectorAll(".aria");
const box2 = document.getElementById("headrs");
box2.innerHTML = `${theTurn} Turn`;
const btn = document.getElementById("btn");
let win = false;
const divWiner = document.getElementById("theWiner");
let winerr;
const contaner = document.getElementById("contaner");

btn.onclick = function () {
  location.reload();
};

box.forEach(function (e) {
  e.addEventListener("click", function (el) {
    if (theTurn === "X" && el.currentTarget.firstChild.className === "") {
      if (win === false) {
        el.currentTarget.firstChild.classList.add("think");
        el.currentTarget.lastChild.classList.add("think2");
        checkWin();
      }
      if (win === false) {
        theTurn = "O";
        box2.innerHTML = `${theTurn} Turn`;
        winerr = document.createTextNode(`${theTurn} Win`);
      }
    } else if (
      theTurn === "O" &&
      el.currentTarget.firstChild.className === ""
    ) {
      if (win === false) {
        el.currentTarget.firstChild.classList.add("theO");
        el.currentTarget.lastChild.classList.add("theO2");

        checkWin();
      }
      if (win === false) {
        theTurn = "X";
        box2.innerHTML = `${theTurn} Turn`;
        winerr = document.createTextNode(`${theTurn} Win`);
      }
    }
  });
});

function checkWin() {
  for (let i = 0; i < box.length; i++) {
    if (
      (box[0].firstChild.className === box[1].firstChild.className &&
        box[0].firstChild.className === box[2].firstChild.className &&
        box[0].firstChild.className !== "") ||
      (box[0].firstChild.className === box[3].firstChild.className &&
        box[0].firstChild.className === box[6].firstChild.className &&
        box[0].firstChild.className !== "") ||
      (box[0].firstChild.className === box[4].firstChild.className &&
        box[0].firstChild.className === box[8].firstChild.className &&
        box[0].firstChild.className !== "") ||
      (box[2].firstChild.className === box[5].firstChild.className &&
        box[2].firstChild.className === box[8].firstChild.className &&
        box[2].firstChild.className !== "") ||
      (box[2].firstChild.className === box[4].firstChild.className &&
        box[2].firstChild.className === box[6].firstChild.className &&
        box[2].firstChild.className !== "") ||
      (box[3].firstChild.className === box[4].firstChild.className &&
        box[3].firstChild.className === box[5].firstChild.className &&
        box[3].firstChild.className !== "") ||
      (box[1].firstChild.className === box[4].firstChild.className &&
        box[1].firstChild.className === box[7].firstChild.className &&
        box[1].firstChild.className !== "") ||
      (box[6].firstChild.className === box[7].firstChild.className &&
        box[6].firstChild.className === box[8].firstChild.className &&
        box[6].firstChild.className !== "")
    ) {
      win = true;
      box2.innerHTML = `${theTurn} Win`;
      divWiner.className = "theWiner";
      winerr = document.createTextNode(`${theTurn} Win`);
      divWiner.appendChild(winerr);
      contaner.style.opacity = "0.7";
      break;
    }
    if (
      box[0].firstChild.className !== "" &&
      box[1].firstChild.className !== "" &&
      box[2].firstChild.className !== "" &&
      box[3].firstChild.className !== "" &&
      box[4].firstChild.className !== "" &&
      box[5].firstChild.className !== "" &&
      box[6].firstChild.className !== "" &&
      box[7].firstChild.className !== "" &&
      box[8].firstChild.className !== ""
    ) {
      divWiner.className = "theWiner";
      const rr = document.createTextNode("Drow");
      divWiner.appendChild(rr);
      console.log("Drow");
      break;
    }
  }
}
