const next = document.querySelectorAll('.next')
const prev = document.querySelectorAll('.prev')
let slides = document.querySelectorAll('.slide')
const viewer = document.querySelector('header')
let desktopBg = ["url('images/desktop-image-hero-1.jpg')", "url('images/desktop-image-hero-2.jpg')", "url('images/desktop-image-hero-3.jpg')"]
let counter = desktopBg.length-1
next.forEach(function(btn){
    btn.addEventListener('click', function(e){
        if(counter >= desktopBg.length -1){
            counter = 0
            console.log(counter)
            viewer.style.backgroundImage = desktopBg[counter]
            viewer.style.backgroundSize = '100% 100%'
        }
        else {
            counter++
            console.log(counter)
            viewer.style.backgroundImage = desktopBg[counter]
            viewer.style.backgroundSize = '100% 100%'
        }
    
        for(let i= 0; i < slides.length;i++){
            if(i === counter){
                slides[counter].classList.remove('hide')
            } else {
                slides[i].classList.add('hide')
            }
        }
    })
})
prev.forEach(function(btn){
    btn.addEventListener('click', function(e){
        if(counter <= 0){
            counter = desktopBg.length - 1;
            console.log(counter)
            viewer.style.background = desktopBg[counter]
            viewer.style.backgroundSize = '100% 100%'  
         } else {
            counter--;
            console.log(counter)
            viewer.style.background = desktopBg[counter]
            viewer.style.backgroundSize = '100% 100%'
         } 
         
         for(let i= 0; i < slides.length;i++){
            if(i === counter){
                slides[counter].classList.remove('hide')
            } else {
                slides[i].classList.add('hide')
            }
        }
    })
})

const header = document.querySelector('#page header')
const nav = document.querySelector('nav')
const hamburger = document.querySelector('.toggle button.hamburger')
const closebtn = document.querySelector('.toggle button.close')
const logo = document.querySelector('.logo')
const con =document.querySelector('header .content')
hamburger.addEventListener('click', function(e){
    this.style.display = 'none'
    closebtn.style.display = 'block'
    logo.style.display = "none";
    nav.classList.add('show');
    nav.style.marginLeft = "15px";
    header.classList.add('show')
    con.style.justifyContent = "stretch";
    
})
closebtn.addEventListener('click', function(e){
    this.style.display = 'none'
    hamburger.style.display = 'block'
    logo.style.display = "block";
    nav.classList.remove('show')
    con.style.justifyContent = "space-between";
    header.classList.remove('show')
})

