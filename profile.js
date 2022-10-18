let openDetails=document.querySelector("#check")
let closeDetails=document.querySelector("#OK")
let stat=false
openDetails.addEventListener("click" , function(){
    if(stat){
        
        document.querySelector("#form").classList.toggle("open_form")
        openDetails.textContent="Check"
        stat=false
    }else{
        document.querySelector("#form").classList.toggle("open_form")
        openDetails.textContent="uncheck"
        stat=true
    }
})
closeDetails.addEventListener("click" , function(){
    if(stat){
        
        document.querySelector("#form").classList.toggle("open_form")
        openDetails.textContent="Check"
        stat=false
    }else{
        document.querySelector("#form").classList.toggle("open_form")
        openDetails.textContent="uncheck"
        stat=true
    }
})
