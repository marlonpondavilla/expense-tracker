import {balance} from "../data/data.js";
import {fixDecimal, moneySigns} from "../utils/money.js"

const totalBalanceHTML = document.querySelector('.balance');
const depositBalanceHTML = document.querySelector('.deposit-amount');
const expenseBalanceHTML = document.querySelector('.expense-amount');

balance.forEach((newBalance) =>{
    const currentBalance = newBalance.balance;
    const currentDeposit = newBalance.deposit;
    const currentExpense = newBalance.expense;

    totalBalanceHTML.innerHTML += `<p>${moneySigns[0] + fixDecimal(currentBalance)}</p>`;
    depositBalanceHTML.innerHTML += `<p>${moneySigns[1] + fixDecimal(currentDeposit)}</p>`;
    expenseBalanceHTML.innerHTML += `<p>${moneySigns[2] + fixDecimal(currentExpense)}</p>`;
})