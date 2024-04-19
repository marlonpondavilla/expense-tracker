import { transactionsData } from "../data/data.js";
import { fixDecimal } from "../utils/money.js";

// transaction generation
let transactionHTML = "";

if (transactionsData.length === 0) {
  const showTrEmptyState = document.querySelector(".empty-transaction");
  showTrEmptyState.style.display = "block";

} else {

  transactionsData.forEach((transaction) => {
    let transactionSign = null;
    if(transaction.type === 'expense'){
        transactionSign = "-"
    }
    else{
        transactionSign = "+";
    }
    transactionHTML += `
        <div class="transaction">
            <li class="transaction-group">
                <p class="transaction-title">${transaction.transactionTitle}</p>
                <p class="transaction-date">${transaction.transactionDate}</p>
            </li>
            <li class="transaction-amount" data-tr-type="${transaction.type}">
                ${transactionSign + fixDecimal(transaction.transactionAmount)}
            </li>
        </div>
            `;
   
  });
  document.querySelector(".transaction-content").innerHTML = transactionHTML;

  const transactionAmntHTML = document.querySelectorAll(".transaction-amount");
  transactionAmntHTML.forEach((trAmntType)=>{
    const transactionType = trAmntType.getAttribute("data-tr-type");
    if(transactionType === "expense"){
        trAmntType.classList.add("expense");
    }else{
        trAmntType.classList.add("deposit");
    }
  })
}
