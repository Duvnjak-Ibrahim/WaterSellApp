let slide1 = document.querySelector(".question1")
let nextBtn1 = document.querySelector(".question1 button")
let slide2 = document.querySelector(".question2")
let nextBtn2 = document.querySelector(".question2 button")
let slide3 = document.querySelector(".question3")
let nextBtn3 = document.querySelector(".question3 button")
let slide4 = document.querySelector(".question4")
let nextBtn4 = document.querySelector(".question4 button")

nextBtn1.addEventListener("click",function(){
    slide1.classList.add("hidden")
})
nextBtn2.addEventListener("click",function(){
    slide2.classList.add("hidden")
})
nextBtn3.addEventListener("click",function(){
    slide3.classList.add("hidden")
})
nextBtn4.addEventListener("click",function(){
    slide4.classList.add("hidden")
})

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
        top:4020,
        behavior:"smooth"
    })
})


document.querySelector(".create-btn")
.addEventListener("click",function(){
    window.scrollTo({
        top:4020,
        behavior:"smooth"
    })
})