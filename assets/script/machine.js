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
