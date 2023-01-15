// **************************** scroll functuons
document.addEventListener("scroll",function(){
    let y = Math.trunc(window.scrollY)
    console.log(y);
     })

document.querySelector(".para-why")
.addEventListener("click",function(){
    window.scrollTo({
        top:857,
        behavior:"smooth"
    })
})


document.querySelector(".para-about")
.addEventListener("click",function(){
    window.scrollTo({
        top:1701,
        behavior:"smooth"
    })
})


document.querySelector(".para-create")
.addEventListener("click",function(){
    window.scrollTo({
        top:4220,
        behavior:"smooth"
    })
})


document.querySelector(".create-btn")
.addEventListener("click",function(){
    window.scrollTo({
        top:4000,
        behavior:"smooth"
    })
})
// ***************************** lets and const some of them
let slide1 = document.querySelector(".question1")
let nextBtn1 = document.querySelector(".question1 button")
let slide2 = document.querySelector(".question2")
let nextBtn2 = document.querySelector(".question2 button")
let slide3 = document.querySelector(".question3")
let nextBtn3 = document.querySelector(".question3 button")
let slide4 = document.querySelector(".question4")
let nextBtn4 = document.querySelector(".question4 button")
let slide5 = document.querySelector(".order-paragraph")
let nextBtn5 = document.querySelector(".order-paragraph button")
let a = 0
let b = 0
let c = 0
// *******************************
nextBtn1.addEventListener("click",function(){
    if(a !== 0 ){
        slide1.classList.add("hidden")
    }
})
nextBtn2.addEventListener("click",function(){
    if(b !== 0 ){
        slide2.classList.add("hidden")
    }
})
nextBtn3.addEventListener("click",function(){
    if(c !== 0 ){
        slide3.classList.add("hidden")
    }
})
nextBtn4.addEventListener("click",function(){
    slide4.classList.add("hidden")
})
nextBtn5.addEventListener("click",function(){
    slide5.classList.add("hidden")
})


// ********************* functions for order

// ********************* listeners for FIRST question
const answer11 = document.querySelector(".answers1-1")
const answer12 = document.querySelector(".answers1-2")
const answer13 = document.querySelector(".answers1-3")


answer11.addEventListener("click",function(){
    answer11.classList.add("choice")
    answer12.classList.remove("choice")
    answer13.classList.remove("choice")
    nextBtn1.style.background ="#06aee2"
    a=1
})

answer12.addEventListener("click",function(){
    answer12.classList.add("choice")
    answer11.classList.remove("choice")
    answer13.classList.remove("choice")
    nextBtn1.style.background ="#06aee2"
    a=2
})

answer13.addEventListener("click",function(){
    answer13.classList.add("choice")
    answer11.classList.remove("choice")
    answer12.classList.remove("choice")
    nextBtn1.style.background ="#06aee2"
    a=3
})
// ******************** listeners for SECOND question
const answer21 = document.querySelector(".answers2-1")
const answer22 = document.querySelector(".answers2-2")
const answer23 = document.querySelector(".answers2-3")


answer21.addEventListener("click",function(){
    answer21.classList.add("choice")
    answer22.classList.remove("choice")
    answer23.classList.remove("choice")
    nextBtn2.style.background ="#06aee2"
    b=1
})

answer22.addEventListener("click",function(){
    answer22.classList.add("choice")
    answer21.classList.remove("choice")
    answer23.classList.remove("choice")
    nextBtn2.style.background ="#06aee2"
    b=2
})

answer23.addEventListener("click",function(){
    answer23.classList.add("choice")
    answer21.classList.remove("choice")
    answer22.classList.remove("choice")
    nextBtn2.style.background ="#06aee2"
    b=3
})
