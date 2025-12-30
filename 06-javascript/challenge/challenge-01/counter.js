let btns = document.querySelectorAll(".btn");
let steps = document.querySelectorAll(".increment");
let result = document.querySelector("#result");

let count = 0;
let step = 1;

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let id = e.currentTarget.id;
    if (id === "increase") {
      count = count + step;
    }

    if (id === "decrease") {
      if (count - step >= 0) {
        count = count - step;
      }
    }

    if (id === "reset") {
      count = 0;
    }

    result.textContent = count;
    if(count>0){
        result.style.color="green";
    }
    else if(count<0){
        result.style.color="red";
    }
    else{
        result.style.color="black";
    }
  });
});

steps.forEach((btn) => {
  btn.addEventListener("click", function () {
    step = Number(this.textContent);
   
  });
});