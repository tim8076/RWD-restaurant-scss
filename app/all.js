
//dom

const toggleButton = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__menu');


//events
toggleButton.addEventListener('click',function(e){
      
    e.preventDefault();
    if (menu.classList.contains('active')){
        menu.classList.remove('active');
    }else{
        menu.classList.add('active');
    }
})
