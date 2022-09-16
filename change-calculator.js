const money ={
  twentyDollar: 0,
  twentyDollarValue: 2000,
  tenDollar: 0,
  tenDollarValue: 1000,
  fiveDollar: 0,
  fiveDollarValue: 500,
  twoDollar: 0,
  twoDollarValue: 200,
  oneDollar: 0,
  oneDollarValue: 100,
  quarter: 0,
  quarterValue: 25,
  dime: 0,
  dimeValue: 10,
  nickle: 0,
  nickleValue: 5,
  penny: 0,
  pennyValue: 1
}



const calculateChange = function(total, cash) {
  let changeOwed = cash-total;
  let billsAndCoinsOwed = {};
  const moneyKeys = Object.keys(money);
  const moneyValues = Object.values(money);

  // Loop through the money object keys skipping over every other key because we dno't need to iterate over the values.
  for(let i = 0; i < moneyKeys.length; i += 2) {
    if(changeOwed > moneyValues[i + 1]) {
      const changeCount = Math.floor(changeOwed / moneyValues[i + 1]);
      changeOwed -= changeCount * moneyValues[i + 1];
      billsAndCoinsOwed[moneyKeys[i]] = changeCount
    }
  }

  return billsAndCoinsOwed
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
