const box = document.querySelectorAll(".box");
const resetbutt = document.querySelector("#resetButt");
const msgcont = document.querySelector(".msgCont");
const msg = document.querySelector("#msg");
const whoTurn = document.querySelector(".who");
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

//*check whoses turn and change text in the box or run function check winner
box.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    if (turnO) {
      boxes.innerText = "O";
      turnO = false;
      whoTurn.classList.remove("hidefor");
      whoTurn.innerText = "x";
    } else {
      boxes.innerText = "X";
      turnO = true;
      whoTurn.innerText = "o";
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
  msg.innerText = `Winner is ${post1}`;
  whoTurn.classList.add("hidefor");
  msgcont.classList.remove("hide");
  disableButt();
};
//*Rest game
const restGame = () => {
  turnO = true;
  enableButt();
  msgcont.classList.add("hide");
  whoTurn.classList.add("hidefor");
};
resetbutt.addEventListener("click", restGame);

//*disble box after game is complete
const disableButt = () => {
  for (const disable of box) {
    disable.disabled = true;
  }
};

//*a fun for enalble buttons
const enableButt = () => {
  for (const boxes of box) {
    boxes.disabled = false;
    boxes.innerText = "";
  }
};
