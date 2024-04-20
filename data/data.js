import { currentDate } from "../src/script.js";
import { saveToStorage } from "../utils/money.js";

export const transactionsData = [
  {
    transactionTitle: "Load",
    transactionDate: currentDate.toLocaleString("en-US", { hour12: true }),
    transactionAmount: 100,
    type: "expense",
  },
  {
    transactionTitle: "Allowance",
    transactionDate: currentDate.toLocaleString("en-US", { hour12: true }),
    transactionAmount: 500,
    type: "deposit",
  },
  {
    transactionTitle: "Earnings",
    transactionDate: currentDate.toLocaleString("en-US", { hour12: true }),
    transactionAmount: 240,
    type: "deposit",
  },
];

export const balance = {
  totalBalance: 0,
  totalDeposit: 0,
  totalExpense: 0,
};

const moneyInputHTML = document.querySelector(".input-2");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
  const moneyInputHTMLValue = parseFloat(moneyInputHTML.value);
  balance.totalBalance += moneyInputHTMLValue;

  if(isNaN(moneyInputHTMLValue) || moneyInputHTMLValue < 1){
    alert("Please check denomination")
    return false;
  }
  else{
    saveToStorage("balance",  balance);
  }
});

