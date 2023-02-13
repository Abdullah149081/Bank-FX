document.getElementById("wit-btn").addEventListener("click", function () {
  //    Get Withdraw input field value
  const withdrawInput = getInputFieldValue("wit-input");
  //    Get Withdraw current amount
  const withdrawAmount = getElementAmount("wit-amount");

  //   sum withdraw input field value and withdraw current amount
  const sumWithdraw = withdrawInput + withdrawAmount;
  //   push wit-amount
  setSumIEamount("wit-amount", sumWithdraw);
  //    get balance current amount
  const balanceGet = getElementAmount("bal-amount");
  //   minus balance current amount and withdraw input field value
  const minus = balanceGet - withdrawInput;
  //   push bal-amount id
  setSumIEamount("bal-amount", minus);
});
