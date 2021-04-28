function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
ibg();

AOS.init()


const menu = document.querySelector('.menu')
const burgerMenu = document.querySelector('.header__burger')
if(document.querySelector('.header__burger')){
    const burgerMenu = document.querySelector('.header__burger')
    burgerMenu.addEventListener('click', function(){
        burgerMenu.classList.toggle('active')
        menu.classList.toggle('active')
        document.body.classList.toggle('lock')
    })
}

if(document.querySelector('.popup')){
    const popupCall = document.querySelector('.popup-call')
    const popupCallBtn = document.querySelector('.header__contact')
    const popupCallClose = document.querySelector('.popup__close')
    popupCallBtn.addEventListener('click', function(){
        if(menu.classList.contains('active')){
            burgerMenu.classList.remove('active')
            menu.classList.remove('active')
            popupCall.classList.add('active')
        }else{
            popupCall.classList.add('active')
            document.body.classList.add('lock')
        }

        popupCallClose.addEventListener('click',function(){
            popupCall.classList.remove('active')
            document.body.classList.remove('lock')
        })
    })
}
