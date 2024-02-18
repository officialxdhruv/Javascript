let box = document.querySelectorAll(".box");
let Reset = document.querySelector("#Reset");

let turn0 = true;

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

box.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("box");
    if (turn0) {
      element.innerText = "O";
      turn0 = false;
    } else {
      element.innerText = "X";
      turn0 = true;
    }
    element.disabled = true;

    winner();
  });
});

const winner = () => {
  for (const pattern of win) {
    let pot1 = box[pattern[0]].innerText;
    let pot2 = box[pattern[1]].innerText;
    let pot3 = box[pattern[2]].innerText;
    if (pot1 != "" && pot2 != "" && pot3 != "") {
      if (pot1 === pot2 && pot2 === pot3) {
        console.log("winner " + pot1);
      }
    }
  }
};
{{
  console.log("hello");
    
}}// let i = 0;
// for (const iterator of box) {
//     box[i].innerText=   i; //?
//     i++;
// }
