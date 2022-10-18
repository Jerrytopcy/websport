//trying importing from deposit.js module
// import{ex_Bal} from './deposit'
//trying importing from deposit.js module


let trans = document.querySelector('.trans')
let mobiledots = document.querySelector('#dots')


mobiledots.addEventListener('click', ()=> trans.classList.toggle('open') )

window.addEventListener('resize', function(){
trans.classList.remove('open')

})
window.onscroll = () => trans.classList.remove('open')


let scrollToTop=document.getElementById('navup')

scrollToTop.addEventListener('click', function(){
    window.scrollTo({
        top:0, left:0, behavior:"smooth"
    })
})



let moneyrefresh=document.getElementById('balrefresh')
let money=0 

moneyrefresh.addEventListener('click',  function(){
    ex_Bal()
money+=bal_el
document.getElementById('balance').innerText=money
})