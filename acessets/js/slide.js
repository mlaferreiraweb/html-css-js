//PORTFOLIO SLIDER

//DECLARANDO VARIAVIES DO SLIDER
var sliderContainer      = document.querySelector('.jl-slider-container');
var sliderList           = document.querySelector('.jl-slider-list');
var sliderItem           = document.querySelectorAll('.jl-slider-item');
const sliderTotalItems   = sliderItem.length;
var sliderListWidth      = null;
//FAZENDO ANIMAÇÃO DO SLIDER ONCLICK
var prevItem             = document.querySelector('.jl-items-prev'); 
var nextItem             = document.querySelector('.jl-items-next');
var sliderPosicao        = 0; 
var currentSlide         = document.querySelector('.jl-current-slide');
var totalSlide           = document.querySelector('.jl-total-slide');
var currentCounter       = 1;
var navItems             = document.querySelectorAll('.jl-item-navigatior a');
var navCounter           = document.querySelector('.jl-item-counter span');






//CAPTURANDO LARGURAS INDIVIDUAIS
var containerWidth = sliderContainer.parentElement.offsetWidth;


//PASSANDO LARGURAS DINÂMICAS
sliderContainer.style.width = containerWidth + 'px';

for(var p = 0; p < sliderItem.length; p++){
    sliderItem[p].style.width = containerWidth + 'px';

    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth;
    
}

sliderList.style.width = sliderListWidth + 'px';




//HANDLERS

//NET SLIDER ANIMAÇÃO
var nextSlideAnim = function(){
    
    var lastItem = (sliderListWidth - containerWidth);
    
    if((-1*(sliderPosicao) === lastItem)){
        return;
    }
    sliderPosicao -= containerWidth;
    
    anime({
        targets: sliderList,
        translateX: sliderPosicao,
        easing: 'cubicBezier(0,1.01,.32,1)'
        
      });
      
};


//PREV SLIDER ANIMAÇÃO
var prevSlideAnim = function(){
    
    
    if(sliderPosicao === 0){
        return;
    }
    sliderPosicao += containerWidth;
    
    anime({
        targets: sliderList,
        translateX: sliderPosicao,
        easing: 'cubicBezier(0,1.01,.32,1)'
      });

};

//COUNTER FORMATER
var counterFormatter = function(valor){
    if(valor < 10){
        return '0'+valor;
    }else{
        return valor;
    }
};

//COUNTER ADD
var counterAdd = function(){
    if((currentCounter >= 0) && (currentCounter < sliderTotalItems)){
       currentCounter++;
       //ACTIONS ---> (MOSTRAR O NUMERO DO SLIDE ATUAL)
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML   = counterFormatter(currentCounter);
    }
}

//COUNTER REMOVE
var counterRemove  = function(){
    if((currentCounter > 1) && (currentCounter <= sliderTotalItems)){
       currentCounter--;
       //ACTIONS ---> (MOSTRAR O NUMERO DO SLIDE ATUAL)
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML   = counterFormatter(currentCounter);
        
    }
}

//SET ACTIVE NAV
var setActiveNav = function(){
    for(var nv = 0; nv < navItems.length; nv++){        
        let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));
        if(myNavNum === currentCounter){
           navItems[nv].classList.add('jl-item-active');

           anime({
                targets: '.jl-item-active',
                width: 85            
            });
        }
        
    }

} 


//SET ACTIVE SLIDE
var setActiveSlide = function(){
    for(var sld = 0; sld < sliderItem.length; sld++){        
        let mySlideNum = parseInt(sliderItem[sld].getAttribute('data-slide'));
        if(mySlideNum === currentCounter){
            sliderItem[sld].classList.add('jl-slide-active');
            sliderItem[sld].querySelector('.jl-portfolio-item-box').classList.add('jl-scale-right');
            sliderItem[sld].querySelector('.jl-portfolio-item-thumb img').classList.add('jl-scale-up');
            sliderItem[sld].querySelector('.jl-portfolio-item-info').classList.add('jl-fade-From-letf');
        }
        
    }

} 

//REMOVE CLASSE jl-item-active DE TODOS OS LINKS ANTES DE ADD O ACTIVE
var changeActive = function(){
    for(var rm = 0; rm < navItems.length; rm++){
        navItems[rm].classList.remove('jl-item-active');
        anime({
            targets: navItems[rm],
            width: 20            
        });
    }
    for(var rms = 0; rms < sliderItem.length; rms++){
        sliderItem[rms].classList.remove('jl-slide-active');
        sliderItem[rms].querySelector('.jl-portfolio-item-box').classList.remove('jl-scale-right');
        sliderItem[rms].querySelector('.jl-portfolio-item-thumb img').classList.remove('jl-scale-up');
        sliderItem[rms].querySelector('.jl-portfolio-item-info').classList.remove('jl-fade-From-letf');        
    }
    setActiveNav();
    setActiveSlide();
}





//ACTIONS
//ACTIONS ---> (ATUALIZA O NUMERO TOTAL DE SLIDES)
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

anime({
    targets: '.jl-item-active',
    width: 85
    
  });




nextItem.addEventListener('click', function(e){
    e.preventDefault();
    nextSlideAnim();
    counterAdd();
    changeActive();
    
    
});

prevItem.addEventListener('click', function(e){
    e.preventDefault();
    prevSlideAnim();
    counterRemove();
    changeActive();
      
});

