// RESET BUTTON START HERE 
document.getElementById('reset-btn').addEventListener('click',function()
{
    document.getElementById('mail-textbox').value = "";
    document.getElementById('password-textbox').value ="";
});
//RESET BUTTON END HERE 

// LOGIN BUTTON START HERE 
    document.getElementById('login-btn').addEventListener('click',function()
    {
       const email =  document.getElementById('mail-textbox').value;
       const password =  document.getElementById('password-textbox').value;

        if(email == 'heymilon@gmail.com' && password == 'Milon.123')
        {
         window.location.href = "calculate.html"
        }
        else 
        {
            alert("Wrong Email or Password! Please try Again");
        }
        
    });
// LOGIN END HERE 

