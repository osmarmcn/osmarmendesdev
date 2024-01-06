var typed = new Typed(".dynamic-text", {
    strings: ["Full Stack Developer", "freelancer", "student"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop: true
})

let menuIcon = document.getElementById("menu-icon")
let navbar = document.querySelector('.navbar')
// <i class='bx bxs-x-circle'></i>
// menuIcon.addEventListener("click", (e) =>{
//     e.classList.toggle('bxs-x-circle')
//     navbar.classList.toggle('active')
// })
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bxs-x-circle')
    navbar.classList.toggle('active')
  
}

// ------------------------ remove ------------------------------------------------------//
menuIcon.classList.remove('bxs-x-circle')
navbar.classList.remove('active')


// --------------------------------------------------------------------------------//

let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

// ----------------------------------------------------------------------------------//

let header = document.querySelector('header')
header.classList.toggle('sticky', window.scrollY > 100)


// ------------------------------------------------------------------------------------//
