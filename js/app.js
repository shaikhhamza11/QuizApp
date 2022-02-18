
// hamburger

const hamburger =document.querySelector("#bar")
const navbarList = document.querySelector('#navbar-lists')
const closeNavbar = document.querySelector('#close-navbar')
    hamburger.addEventListener('click',()=> navbarList.classList.add ('toggle'))
    closeNavbar.addEventListener('click',()=>navbarList.classList.remove('toggle'))


// dark-white mode
    const moon =document.querySelector('#moon')
    const sun = document.querySelector("#sun")
    const header = document.querySelector('#header')
    const list = document.querySelector('#navbar ul')
    //dark-white mode
    
    moon.addEventListener('click',()=>{
        moon.style.display="none"
        sun.style.display="inline";
        document.body.style.background="#e1dada"
        header.style.background="#e1dada"
        list.style.background="#e1dada"
        document.body.style.color="#0e131f"
        
    })
    // white-dark mode
    sun.addEventListener('click',()=>{
        sun.style.display="none";
        moon.style.display="inline"
        document.body.style.background="#0e131f"
        header.style.background="#020714"
        list.style.background="#020714"
        document.body.style.color="#e1dada"
    })