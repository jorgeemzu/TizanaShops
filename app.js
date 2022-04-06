const navToggle = document.querySelector('.hamburger')
const nav = document.querySelector('.mobile-nav')
const overlay = document.querySelector('.overlay')
const hamburger = document.querySelector('.hamburger')

navToggle.addEventListener('click',()=>{
    const navstate = nav.getAttribute('data-visible')
    console.log(overlay)

    if(navstate == 'false'){
        nav.classList.add('mobile-nav-show')
        overlay.classList.add('overlay-show')
        nav.setAttribute('data-visible',true)
        hamburger.classList.add('is-active')
    }else{
        nav.classList.remove('mobile-nav-show')
        overlay.classList.remove('overlay-show')
        nav.setAttribute('data-visible',false)
        hamburger.classList.remove('is-active')
    }
})


