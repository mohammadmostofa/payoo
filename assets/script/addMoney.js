
document.getElementById("add-money-btn").addEventListener("click",function(){ 
  // get select a bank
  const  bankAccount = getValueFromInput("add-money-bank");
  
  if(bankAccount == "Select a Bank"){
    alert("please select a Bank");
    return;
  }

  // get account number
  const addMoneyNumber = getValueFromInput("add-money-number");
  if(addMoneyNumber.length != 11){
     alert("invalid number");
     return;
  }

// get amount
  const addMoneyAmount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance(); 
 const newBalance = currentBalance + Number(addMoneyAmount);

// pin verify
  const addAmountPin   = getValueFromInput("add-amount-pin");
  if(addAmountPin == '1234'){
    alert(`add Money successfully from ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);
  }

  else{
    alert("invalid pin");
    return
  }
  

})