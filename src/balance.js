// import {balance} from "../data/data.js";
import { fixDecimal, moneySigns } from "../utils/money.js";

const totalBalanceHTML = document.querySelector(".balance");
const depositBalanceHTML = document.querySelector(".deposit-amount");
const expenseBalanceHTML = document.querySelector(".expense-amount");

const storageBalanceData = JSON.parse(localStorage.getItem("balance"));

const currentBalance = storageBalanceData.totalBalance;
const currentDeposit = storageBalanceData.totalDeposit;
const currentExpense = storageBalanceData.totalExpense;

document.addEventListener("DOMContentLoaded", function () {
  totalBalanceHTML.innerHTML += `<p>${
    moneySigns[0] + fixDecimal(currentBalance)
  }</p>`;
  depositBalanceHTML.innerHTML += `<p>${
    moneySigns[1] + fixDecimal(currentDeposit)
  }</p>`;
  expenseBalanceHTML.innerHTML += `<p>${
    moneySigns[2] + fixDecimal(currentExpense)
  }</p>`;
});



