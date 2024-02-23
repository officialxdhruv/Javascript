const box = document.querySelectorAll(".box");
const resetbutt = document.querySelector("#resetButt");
const msgcont = document.querySelector(".msgCont");
const msg = document.querySelector("#msg");
const newButt = document.querySelector("#new-button");
let turnO = true; //player x & player o
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//*check whoses turn or run function check winner
box.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    // console.log("box was click");
    if (turnO) {
      boxes.innerText = "O";
      turnO = false;
    } else {
      boxes.innerText = "X";
      turnO = true;
    }
    boxes.disabled = true;

    checkWinner();
  });
});

//*checkWinner
const checkWinner = () => {
  win.forEach((winner) => {
    /*console.log(winner[0], winner[1], winner[2]);
      console.log(
        box[winner[1]].innerText,
        box[winner[2]].innerText
        ); 
    */
    let post1 = box[winner[0]].innerText;
    let post2 = box[winner[1]].innerText;
    let post3 = box[winner[2]].innerText;
    if (post1 != "" && post2 != "" && post3 != "") {
      if (post1 == post2 && post2 == post3) {
        // console.log("winner " + post1);
        showwinner(post1);
      }
    }
  });
};
//*show winner
const showwinner = (post1) => {
  msg.innerText = `winner is ${post1}`;
  msgcont.classList.remove("hide");
  disableButt();
};
//*Rest game
const restGame = () => {
  turnO = true;
  enableButt();
  msgcont.classList.add("hide");
};
resetbutt.addEventListener("click", restGame);

//*disble buttons after game is complete
const disableButt = () => {
  for (const disable of box) {
    disable.disabled = true;
  }
};

const enableButt = () => {
  for (const boxes of box) {
    boxes.disabled = false;
    boxes.innerText = "";
  }
};
//*new game butt
newButt.addEventListener("click", restGame);
