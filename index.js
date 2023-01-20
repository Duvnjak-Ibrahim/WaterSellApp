// **************************** scroll functuons


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
let d = 0
let paragraph = `I want `
let price = ``
// *******************************
nextBtn1.addEventListener("click",function(){
    if(a !== 0 ){
        slide1.classList.add("hidden")
    }
    if(a === 1){
        paragraph+= `Mineral water `
    }
    if(a === 2){
        paragraph+= `Distilled water `
    }
    if(a === 3){
        paragraph+= `Spirng water `
    }
    console.log(paragraph,a);
})
nextBtn2.addEventListener("click",function(){
    if(b !== 0 ){
        slide2.classList.add("hidden")
    }

    if(b === 1){
        paragraph+= `from well waters `
    }
    if(b === 2){
        paragraph+= `from underground waters `
    }
    if(b === 3){
        paragraph+= `from river waters `
    }
    console.log(paragraph,b);
})
nextBtn3.addEventListener("click",function(){
    if(c !== 0 ){
        slide3.classList.add("hidden")
    }
    if(c === 1){
        paragraph+= `with more magnesium `
    }
    if(c === 2){
        paragraph+= `with more calcium `
    }
    if(c === 3){
        paragraph+= `with more potassium `
    }
    console.log(paragraph,c);
})
nextBtn4.addEventListener("click",function(){
    if(d !== 0 ){
        slide4.classList.add("hidden")
    }

    if(d === 1){
        paragraph+= `in normal package`
        price = `48$`
    }
    if(d === 2){
        paragraph+= `in big package`
        price = `64$`
    }
    if(d === 3){
        paragraph+= `in premium package`
        price = `99$`
    }
    document.querySelector(".order-paragraph-p")
    .textContent=paragraph

    document.querySelector(".price")
    .textContent=price
    console.log(paragraph,price);

})
nextBtn5.addEventListener("click",function(){
    document.querySelector(".order-paragraph-p")
    .textContent=`Your order is on the way.
                 Look out of the window often.
                 You never know how fast package is going to be delivered.`
                 document.querySelector(".order-paragraph-p").style.color="yellowgreen"
                 document.querySelector(".price").classList.add("hidden")
                 nextBtn5.classList.add("hidden")
                 document.querySelector(".order-paragraph").innerHTML+=`<img src="/w-images/icons8-checkmark-96.png" >`            
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
// *************************** listeners for THIRD slide
const answer31 = document.querySelector(".answers3-1")
const answer32 = document.querySelector(".answers3-2")
const answer33 = document.querySelector(".answers3-3")


answer31.addEventListener("click",function(){
    answer31.classList.add("choice")
    answer32.classList.remove("choice")
    answer33.classList.remove("choice")
    nextBtn3.style.background ="#06aee2"
    c=1
})

answer32.addEventListener("click",function(){
    answer32.classList.add("choice")
    answer31.classList.remove("choice")
    answer33.classList.remove("choice")
    nextBtn3.style.background ="#06aee2"
    c=2
})

answer33.addEventListener("click",function(){
    answer33.classList.add("choice")
    answer31.classList.remove("choice")
    answer32.classList.remove("choice")
    nextBtn3.style.background ="#06aee2"
    c=3
})
// ************************* listeners for FOURTH question


const answer41 = document.querySelector(".answers4-1")
const answer42 = document.querySelector(".answers4-2")
const answer43 = document.querySelector(".answers4-3")


answer41.addEventListener("click",function(){
    answer41.classList.add("choice")
    answer42.classList.remove("choice")
    answer43.classList.remove("choice")
    nextBtn4.style.background ="#06aee2"
    d=1
})

answer42.addEventListener("click",function(){
    answer42.classList.add("choice")
    answer41.classList.remove("choice")
    answer43.classList.remove("choice")
    nextBtn4.style.background ="#06aee2"
    d=2
})

answer43.addEventListener("click",function(){
    answer43.classList.add("choice")
    answer41.classList.remove("choice")
    answer42.classList.remove("choice")
    nextBtn4.style.background ="#06aee2"
    d=3
})