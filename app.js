let welcomeString = document.querySelector("h1")
let i = 0;
let txt = 'Welcome.';
let speed = 100;

function typeWriter() {
    setTimeout(typeWriter, 1000)
    if (i < txt.length) {
        welcomeString.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    setTimeout( function (){
        welcomeString.style.marginTop = "50px"
        welcomeString.style.marginLeft = "50px"
    }, 1000);
    setTimeout( function (){
        document.querySelector(".info-con").style.opacity = "100"
        document.querySelector("h2").style.opacity = "100"
    }, 1400);
}
typeWriter()

let box2 = document.querySelector(".box-2")
let box3 = document.querySelector(".box-3")
let box4 = document.querySelector(".box-4")
let box5 = document.querySelector(".box-5")

box2.addEventListener("mouseenter", function (){
    box2.style.width = "110%"
    box3.style.width = "80%"
    box3.style.marginLeft = "13%"
})

box3.addEventListener("mouseenter", function (){
    box2.style.width = "80%"
    box3.style.width = "110%"
    box3.style.marginLeft = "-17%"
})

box4.addEventListener("mouseenter", function (){
    box4.style.width = "110%"
    box5.style.width = "80%"
    box5.style.marginLeft = "13%"
})

box5.addEventListener("mouseenter", function (){
    box4.style.width = "80%"
    box5.style.width = "110%"
    box5.style.marginLeft = "-17%"
})