function getINputValue (InputamountId)
{

    const getInput = document.getElementById(InputamountId);
    const storeInput = getInput.value;
    const convertStorInput = parseFloat(storeInput);
    getInput.value="";
    return convertStorInput;  
}
function GetUpdateMoney(MoneySection,inputMoney)
{

    const getAmount = document.getElementById(MoneySection);
    const holdAmount = getAmount.innerText;
    const convertAmount = parseFloat(holdAmount);
    getAmount.innerText = convertAmount+inputMoney;  
}
function getcurrentBalance()
{
    const getBalance = document.getElementById("balance_total");
    const holdBalance = getBalance.innerText;
    const convertBalance = parseFloat(holdBalance);
    return convertBalance;
}
function updateBalance(addedBalance,isadd)
{

    const getBalance = document.getElementById("balance_total");
    // const holdBalance = getBalance.innerText;
    const convertBalance = getcurrentBalance();
    if(isadd ==true)
    {
        getBalance.innerText=convertBalance+addedBalance;
    }
    
    else
    {
        getBalance.innerText=convertBalance-addedBalance;
    }
    }
// handle deposite and Balance 
document.getElementById("deposite_button").addEventListener("click",function(){
   // get deposite amount what you have intered
    const finalDepoGot = getINputValue("deposite_amount");
    //calculate toatal deposite amount
    if(finalDepoGot>=0)
    {
        GetUpdateMoney("deposite_total",finalDepoGot);
        // update balance    
        updateBalance(finalDepoGot,true);   
    }
  
})
//Handle Withdraw 
document.getElementById("withdraw_button").addEventListener("click",function(){
  //get withdraw amount what you have intered  
    const finalWithdrawGot = getINputValue("withdraw_amount")
    // calculate total withdraw amount
    const currentBalance = getcurrentBalance();
    if(finalWithdrawGot>0 && finalWithdrawGot<currentBalance)
    {
        GetUpdateMoney("withdraw_total",finalWithdrawGot);
        //update balance 
       updateBalance(finalWithdrawGot,false);
    }
    if (finalWithdrawGot<currentBalance)
    {
        console.log("you can not withdraw more than what you have");
    }
    
})