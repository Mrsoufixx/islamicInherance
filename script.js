

var btnCalc = document.querySelector('#btn-calculate')
btnCalc.addEventListener('click',()=>{
let girl=document.querySelector('#girl').value
let boy=document.querySelector('#boy').value
let brother=document.querySelector('#brother').value
let grandfather=document.querySelector('#grandfather').checked
let grandmother=document.querySelector('#grandmother').checked

let child=document.querySelector('#child').checked;
let parent=document.querySelector('#parent').checked;

let priceInput=document.querySelector('#priceInput').value
let price=document.querySelector('#price')


if(child==true && parent==true){
   let p ;
    p =  priceInput*1/6  + priceInput*1/6;console.log(p)
    price.innerHTML = p
    if(boy==0 && girl==1){
        price.innerHTML=`girl : ${priceInput*1/2}` 
    }else if(boy==0 && girl ==2){
        price.innerHTML=`girl : ${priceInput*1/3}` 
    }else if(boy==1 && girl ==1){
        price.innerHTML=`boy : ${priceInput*2/3}, girl : ${priceInput*1/3}` 
    }
}else if(parent){

    !brother ? price.innerHTML=`grandfather : ${priceInput*2/3} grandmother: ${priceInput*1/3}`: (brother>=2 ? price.innerHTML=`grandfather : ${priceInput*2/3} grandmother: ${priceInput*1/3}`:price.innerHTML=`7sseb akhor`)
}else
console.log('dddd')
})