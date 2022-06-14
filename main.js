window.addEventListener('scroll', onScroll)

onScroll()



function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

function showNavOnScroll(){
    var navigation = document.getElementById("navigation")
    if(scrollY > 0){
        navigation.classList.add('scroll')
    }else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
    var backToTopButton = document.getElementById("backToTopButton")
    if(scrollY > 450){
        backToTopButton.classList.add('show')
    }else {
        backToTopButton.classList.remove('show')
    }
}




function openMenu() {
    document.body.classList.add('menu-expended')
}

function closeMenu(){
    document.body.classList.remove('menu-expended')
}



ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home, #home img, #home .stats, #services, #services header, #services card, #about, #about header, #about .content`);
