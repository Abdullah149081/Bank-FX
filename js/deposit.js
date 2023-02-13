
// Step:1 Add  Deposit Button addEventListener
document.getElementById("dep-btn").addEventListener("click", function () {
  //   Step:2 get input Field value
  const depInputValue = getInputFieldValue("dep-input");
  //   Step:3 get Deposit Current amount
  const depCurrentAmount = getElementAmount("dip-amount");
  //   Step:4 sum input Field value and deposit current amount
  const sumDeposit = depCurrentAmount + depInputValue;

  //   push dip-amount id
  setSumIEamount("dip-amount", sumDeposit);

  //   Step: 5 get balance current amount
  const balanceGet = getElementAmount("bal-amount");
  //  sum input Field value and balance current amount
  const sumBalance = balanceGet + depInputValue;

  //   push bal-amount Id
  setSumIEamount("bal-amount", sumBalance);
});
