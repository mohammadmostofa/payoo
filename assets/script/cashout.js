// //taka cash out korar jonno ja ja korte hobe

// // one> ekta agent number lagbe js vslidable hote hobe ta 11 digit hote hobe
// //two>kotho taka ase ta jante hobe valid hote hobe ta amount ta number ye convert korte hobe
// //two>bortomane kotho taka ase ta jante hobe valid hote hobe ta amount ta number ye convert korte hobe
// //three> nootun balance ta calculate korte hobe
// //pin diye verify korte hobe

// // true::> dekhabe ekta alert diye ar notun blance add korbe o dekha be
// //false::>alert ye error dekha be and return hobe

// document.getElementById("cashout-btn").addEventListener("click",function(){

//  const cashoutNumberInput = document.getElementById("cashout-number");
//  const cashoutNumber = cashoutNumberInput.value;

//  if(cashoutNumber.length != 11 ){
//   alert("Invalid Agent Number");
//   return;
//  }

//  const cashoutAmountInput = document.getElementById("cashout-amount");
//  const cashoutAmount = cashoutAmountInput.value;

 
 
//  const balanceElement = document.getElementById("balance");
//  const balance = balanceElement.innerText;
 
 
//  const newBalance = Number(balance) - Number(cashoutAmount);
 
//  if(newBalance < 0 ){
//    alert ("Invalid Amount");
//    return;
//   }

//   //verify pin
  
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const cashoutPin = cashoutPinInput.value;


//   if(cashoutPin === '1234'){
//     alert("cashout successfully")

//     console.log(newBalance, 'new Balance');
//     balanceElement.innerText = newBalance;

//   } else{
//     alert("Invalid pin")
//     return;
//   }
  
// })


// process two shortcut

document.getElementById("cashout-btn").addEventListener("click",function(){ 

  // get the agent number

  const cashoutNumber = getValueFromInput("cashout-number") ;

   if(cashoutNumber.length != 11 ){
   alert("Invalid Agent Number");
   return;

   }


  // get  cashout amount
  const cashoutAmount = getValueFromInput("cashout-amount");

 // get current balance
   const balanceElement = document.getElementById("balance");
   const balance = balanceElement.innerText;
   console.log(balance)


  //calculate balance > cashout amount and balance

  const newBalance = Number(balance) - Number(cashoutAmount);
  //console.log(newBalance);

if(newBalance < 0 ){

   alert ("Invalid Amount");
    return;
  }



// get cashout pin
  const Pin = getValueFromInput("cashout-pin")

  // condition

  if( Pin === '1234'){
     alert("cashout successfully")

     console.log(newBalance, 'new Balance');
     balanceElement.innerText = newBalance; //amr je balanceElement er bitore je innner text ase sekane newBalance ta bosabe
  } else{
     alert("Invalid pin")
    return;
   }




})