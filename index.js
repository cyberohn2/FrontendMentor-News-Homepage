// MOBILE MENU TOGGLER
const menuTogglr = document.querySelector('.mobile-menuImg')
const menuBg = document.querySelector('.navigation')
const menu = document.querySelector('.nav-list')
menuTogglr.addEventListener('click', () =>{
    let expanded = menuBg.getAttribute('aria-expanded')
    if (expanded !== 'true') {
        menu.style.animation = 'showmenu 400ms ease-in forwards'
        menuBg.style.display = 'block'
        menuBg.style.animation = 'blurbg 50ms linear forwards'
        menuBg.setAttribute('aria-expanded', 'true')
        document.body.style.overflow = 'hidden'

    }else if(expanded == 'true'){
        menu.style.animation = 'unshowmenu 400ms ease-in forwards'
        menuBg.style.display = 'none'
        menuBg.style.animation = 'unblurbg 50ms linear forwards'
        menuBg.setAttribute('aria-expanded', 'false')
        document.body.style.overflow = 'scroll'
    }
})
menuBg.addEventListener('click', () =>{
    menu.style.animation = 'unshowmenu 400ms ease-out forwards'
    menuBg.style.display = 'none'
    menuBg.style.animation = 'unblurbg 50ms linear forwards'
    menuBg.setAttribute('aria-expanded', 'false')
    document.body.style.overflow = 'scroll'
})