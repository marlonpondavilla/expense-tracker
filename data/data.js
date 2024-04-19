import { currentDate } from "../src/script.js";

const transactionsData = [
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

const balance = [
  {
    balance: 0,
    deposit: 0,
    expense: 0,
  }
]
export { transactionsData, balance };
