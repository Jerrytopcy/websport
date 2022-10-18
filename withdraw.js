


const withdrawHistory=document.getElementById("wdr_history")
const agree=document.getElementById("agree")
const passWord=document.getElementById("password")
const acctNo =document.getElementById("acctno")
const amount=document.getElementById("amount")
const withdraw_btn=document.getElementById("withdrawBtn")
let history_arr=[]
let localhistory=JSON.parse(localStorage.getItem("history"))

 let amt=3000
 let letter_el=["p", "g","q", "k"]
    withdraw_btn.addEventListener("click", function(form){
        if(amount.value>=amt &&agree.checked&&passWord.value&&acctNo.value ){
        let concatAll=""
        const ref_el=Math.floor(Math.random()*200000000)
        let concat=amount.value
        for(i=0; i<letter_el.length; i++){
         letteR= letter_el[Math.floor(Math.random()*4)]
        }
        const Ref_all=letteR+ref_el
        const date=Date()
        concatAll+=`<hr><li> Withdrawal : <M>#${concat}</M>  ref no: <R>${Ref_all}</R>status:<status>confirmed</status>  </li>${date} `
        history_arr.push(concatAll)
        localStorage.setItem("history", JSON.stringify(history_arr))
        let concatArr=""
       for(i=0; i<history_arr.length; i++){
           concatArr+=history_arr[i]
           withdrawHistory.innerHTML=concatArr
        }
        
    }else{
        form.preventDefault()
        alert("some not accepted data, check your input pls")
    }
    
    
}) 
let pop=true
function showHistory(){
    if(pop&& localhistory ){
        document.getElementById("histBtn").textContent="hide history"
        let hist=""
    for(i=0; i<localhistory.length; i++){
        history_arr=localhistory
        hist+=localhistory[i]
    }
    withdrawHistory.innerHTML=hist
    pop=false
    }
    else{
        document.getElementById("histBtn").textContent="show history"
         history_arr=[] //-----to clear history
        withdrawHistory.innerHTML=""
        pop=true
    }
}


// clear history
 // -----------------------------------------

        // history_arr=[]
        // localStorage.setItem("history", JSON.stringify(history_arr))
        // withdrawHistory.innerHTML=""
        
 // --------------------------------------
// clear history




// :::::::::

// policy popup
let policy_el=document.getElementById("policyM")
function addPolicy(){
    policy_el.classList.add("policy_open")
}
function removePolicy(){
    policy_el.classList.remove("policy_open")
}
// policy popup

// :::::::::

// password show/hide
let eye=document.getElementById('eye')
let stat=true
function toggle(){
if(stat){
document.getElementById('password').setAttribute('type' , 'text')
stat=false
}
else{
    document.getElementById('password').setAttribute('type' , 'password')
stat=true
}
}
// password show/hide
