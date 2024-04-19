
let currentDate = new Date();

function toggleBetweenBtns(btn1, btn2){
    if (btn1.classList.contains(`on`)) {
      return null;
    }
    else{
        btn1.classList.add(`on`);
        
    }
    btn2.classList.remove(`on`);
    
}

const toggleDeposit = document.querySelector(`.toggle-deposit`);
const toggleExpense = document.querySelector(`.toggle-expense`);
const note = document.querySelector(".note");

toggleDeposit.addEventListener("click", () => {
  toggleBetweenBtns(toggleDeposit,toggleExpense);
  note.innerHTML = "*Note: you are in the deposit mode";
});

toggleExpense.addEventListener("click", () => {
  toggleBetweenBtns(toggleExpense,toggleDeposit);
  
  note.innerHTML = "*Note: you are in the expense mode";
});


function currentDateApp(){
  let options = {
    weekday: "short",
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };
  let formattedDate = currentDate.toLocaleDateString("en-US", options);

  document.querySelector('.current-date-app').innerHTML = formattedDate;
}
currentDateApp();

export { currentDate };
