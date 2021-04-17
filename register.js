console.log("***Start***");

var firstName=""; 
var SecondName="";
var dateofBirth="";
var emailId ="";
var Gender="";
var password="";
 


function register(){
    alert("i am in login function");
       
       FirstName = document.getElementById("FIRST").value;
       SecondName = document.getElementById("SECOND").value;
       dateofBirth = document.getElementById("DOB").value;
       emailId = document.getElementById("email").value;
       Gender = document.getElementById("GENDER").value;
       password = document.getElementById("pswd").value;

       console.log(FirstName+" "+SecondName+ " " +dateofBirth +" " +emailId+" "+Gender+" "+password);

      if(FirstName == "Akshay"  &&  SecondName =="Kanemoni"  && dateofBirth=="2021-04-17" &&  emailId == "k123@gmail.com" &&  Gender == "Male"   && password == "00123"){

        document.getElementById("result").innerHTML="successfully loged in";
        document.getElementById("result").style.color="white";
        console.log("successfully Loged in ");
        window.location.href="https://moneyconnexion.com/most-expensive-cars-in-the-world.htm";
    }
   else{
       console.log("Invalid email/password please check.");
       document.getElementById("result").style.color="white";
       document.getElementById("result").innerHTML = "Invalid email/password, please check";
 
  }

  return false;
}

console.log("***Stop***");

