
document.getElementById("login-btn").addEventListener("click",function(){
  //match the mobile number and pin 
  //joodi condition sott hoi tahole alert dekha bolo o home page ye niyejabo
  // ar jodi flase hoi tahole alert dekhabo o return kore debo (return mane funcction bondo kore deoya)
  
  //get the mobile number input
const inputNumber = document.getElementById("input-number");
const contactNumber = inputNumber.value;
console.log(contactNumber);

//get the pin input
const inputPin = document.getElementById("input-pin");
const pin = inputPin.value;
  console.log(pin)

  // condition set 
  if(contactNumber == "1234567890"  && pin == "123"){
    
  //alert("login suscessfull")
  //condition == ture > go to home page 
  //set up home page
  //এটি ব্রাউজারের বর্তমান URL-কে নতুন একটি URL দিয়ে বদলে দেয়।
//কাজ: এটি ব্রাউজার History আপডেট করে না। অর্থাৎ, ইউজার রিডাইরেক্ট হওয়ার 
// পর "Back" বাটন টিপে আগের পেজে ফিরতে পারবে না।
//ব্যবহার: লগআউট করার পর বা পেমেন্ট সম্পন্ন হওয়ার পর এটি বেশি ব্যবহৃত হয়।
  //window.location.replace("/home.html")

  //আপনি যখন window.location.assign("/home.html") লেখেন, তার মানে আপনি ব্রাউজার উইন্ডোকে 
  // বলছেন বর্তমান লোকেশন পরিবর্তন করে নতুন পেজে যেতে। 
  window.location.assign("/home.html")
  }
  
  else{
    
    alert("login failed");
    return

  }
  

})