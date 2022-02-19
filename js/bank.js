document.getElementById("login_buttton").addEventListener("click",function(){

    //get user and set value to one variable
    const userEmail = document.getElementById("email-id");
    const emailValue = userEmail.value;
   //get password and set value to one variable
    const userPass = document.getElementById("pass-id");
    const passValue = userPass.value;

    if(emailValue=="shakib7784@gmail.com" && passValue=="secret")
    {
        window.location.href="banking.html";
    }
  
    

})