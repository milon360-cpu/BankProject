//DEPOSIT BUTTON START HER 
document.getElementById('deposit-btn').addEventListener('click',function()
{
   let amount = document.getElementById('deposit-amount').innerHTML;
   let anountValue = parseInt(amount);
   let depositMoney = document.getElementById('deposit-input').value;
   newDepositMoney = parseInt(depositMoney);
   
   if(depositMoney >='0' && depositMoney<='9')
   {
    document.getElementById('deposit-amount').innerHTML = anountValue + newDepositMoney;
    document.getElementById('deposit-input').value = ''; 
 
 
     let totalAmount = document.getElementById('total-balance').innerHTML;
     totalAmount = parseInt(totalAmount);
     document.getElementById('total-balance').innerHTML = newDepositMoney + totalAmount;
   }
   else
   {
   
     alert('Please Enter Value Amount');
     document.getElementById('deposit-input').value = ''; 

   }

});
//DEPOSIT BUTTON END HER 

// WITHDRAW BUTTON START HERE 
document.getElementById('withdraw-btn').addEventListener('click',function()
{
    let withdrawAmount = document.getElementById('withdraw-amount').innerHTML;
    withdrawAmount = parseInt(withdrawAmount);
    let withdrawInput = document.getElementById('withdraw-input').value;
    withdrawInput = parseInt(withdrawInput);
    
    
    document.getElementById('withdraw-input').value = ''

    let totalAmount = document.getElementById('total-balance').innerHTML;
    totalAmount = parseInt(totalAmount);
    let value = totalAmount - withdrawInput;
    if(totalAmount<withdrawInput)
    {
        alert("You don't have enough balance in your account");
    }
    if(totalAmount>=withdrawInput)
    {
        document.getElementById('total-balance').innerHTML = value;
        document.getElementById('withdraw-amount').innerHTML = withdrawAmount + withdrawInput;
    }
    
    
});
// WITHDRAW BUTTON END HERE