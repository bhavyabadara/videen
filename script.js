const text1=document.querySelector("#text1")
let value=0
setInterval(()=>{
    value+=1
    if(value>18){
        value=18
        clearInterval(this)
    }
    text1.innerHTML=`${value}<span class="plus">+</span>`
},100)

const text2=document.querySelector("#text2")
let value1=0
setInterval(()=>{
    value1+=1
    if(value1>15){
        value1=15
        clearInterval(this)
    }
    text2.innerHTML=`${value1}<span class="plus">+</span>`
},100)

const text3=document.querySelector("#text3")
let value2=0
setInterval(()=>{
    value2+=40
    if(value2>523){
        value2=523
        clearInterval(this)
    }
    text3.innerHTML=`${value2}<span class="plus">+</span>`
},100)


gsap.from(".slidertext",{
    x:"100%",
    duration:2,

})


