//machine er kaj holo amr tuiri id niye input value dekhabe ba dibe

//machine > id ----> input value return

function getValueFromInput (id){

  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;

}


// machine > get balance 

function getBalance(){
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText; //to see number ja span er bitore text element hise be asse
  console.log("current Balance", Number(balance));
  return Number(balance);
} 

// machine > set balance

function setBalance (value){

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value

}


// ami jekane click korbo tar details dekhabe baki sob hide takbe ta kibabe korbo
//machine toiri kora holo

//machine > id > allhide > one id show which i want

function showOnly (id){
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  //console.log(`add money ${addMoney}, cashout - ${cashout}  `) ;

  // ekon sobai ke hide koro

  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");

  //id wala element ke show koro
  const selected = document.getElementById(id);
   selected.classList.remove("hidden");

  
}

  
