const bank=document.getElementById('bank')
const input=document.getElementById('deposit')
const btn=document.getElementById('btn')
let data_=document.getElementById("data")
const minimum= 1000
let depositLog=[ ]
let getDepositLog=JSON.parse(localStorage.getItem("depositlog"))
let Pay_el=["pending", "confirmed"]

let payAcct=["32120933", "21198738"]

const paid_el=document.getElementById("btn2")
paid_el.addEventListener("click", function(){
   
})

// clear the storage

// localStorage.clear()

// clear the storage

btn.addEventListener('click',function(){
    if(!input.value||input.value<minimum||input.value>500000){
        input.value=''
        document.getElementById('hey').style.opacity='1'
        document.getElementById('bank').style.opacity='0'
        document.getElementById('acctHey').innerHTML="Account to deposit will showup here"

    }else if(input.value&&input.value>=minimum&& input.value<=500000){
        document.getElementById('hey').style.opacity='0'
        document.getElementById('bank').style.opacity='1'
        document.getElementById('acctHey').innerHTML="Make your deposit to account provided above"
        let outPut=input.value
        let aphB=["A","R","B", "P", "K" ,"V", "G","Y"]
          for(i=0; i<aphB.length; i++){
             numB=Math.floor(Math.random()*7)
             aphBgen=aphB[numB]   
            }
        const paycoDe=`${aphBgen}${Math.floor(Math.random()*200000000000)}`

        let allPut=`<li><cash>#${outPut}</cash> <paycode> <ID>payment ID</ID> ${paycoDe}</paycode> <wrap><status>status</status><pending>${Pay_el[1]}</pending></wrap> </li><hr>`
        depositLog.push(allPut)
            
       
        let acctcode=Math.floor(Math.random()*2)
        if(acctcode===0){

            document.getElementById('bank').innerHTML=`<bank>United bank for africa (UBA Bank) </bank> <br> ${payAcct[0]} <br> Akintade Tope Ebenzer`

        }else{
            document.getElementById('bank').innerHTML=`<bank>KUDA (KUDA Bank)</bank> <br> ${payAcct[1]} <br> Akintade Tope Ebenzer`

        }
        document.getElementById("amount").value=outPut
        document.getElementById("ref").value=paycoDe
        localStorage.setItem("depositlog", JSON.stringify(depositLog))
        let outputLog=""
        
        for(let i=0; i<depositLog.length; i++){
            outputLog+=depositLog[i]
        }
        // data_.innerHTML=outputLog
        input.value=''
        
    }
})


    //practice of export to another js module

// export let ex_Bal = function(){
//     let bal_el=input.value
// }

    //practice of export to another js module



function showHistory(){
    if(getDepositLog){

        let get=""
         for(let i=0; i<getDepositLog.length; i++){
         
         get+=getDepositLog[i]
         depositLog=getDepositLog
         data_.innerHTML=get
         }}
    }




function toggle(){
    document.getElementById('alert').classList.add("alert_open")
}
let closed=document.getElementById('closed')
closed.addEventListener('click', function(){
    document.getElementById('alert').classList.remove("alert_open")
})

const history=document.getElementById("_history")
let state=true
history.addEventListener("click" , function(){
    if(state){
        
        document.getElementById("deposit_").classList.add("open_el")
        state=false
    }else {
        
        document.getElementById("deposit_").classList.remove("open_el")
        state=true
    }
})


