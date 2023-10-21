//DESCLARANDO VARIÁVEIS
var   btnContact = document.querySelector('.jl-btn-contact');
var  toggleModal = document.querySelectorAll('.jl-toggle-modal');

//PAGE PRELOAD DA PAGINA
window.addEventListener('load', function(){
    var pagePreloder = document.querySelector('.jl-preloader');
    
        pagePreloder.classList.add('jl-fade-out');
    
        setTimeout(function () {
            pagePreloder.style.display = 'none';
        }, 2000);

});

//ABRINDO E FECHANDO INFORMAÇÕES DE CONTATO
btnContact.addEventListener('click', function (e){
    e.preventDefault();
    var boxContact = document.querySelector('.jl-contact-info');
         boxContact.classList.toggle('jl-is-open');
         this.classList.toggle('jl-change-icon');
});

//ABRINDO E FECHANDO O MODAL DE ORÇAMENTO
for(var i = 0; i < toggleModal.length; i++){
    toggleModal[i].addEventListener('click', function(e){
        e.preventDefault();
        var overlay        = document.querySelector('.jl-overlay');
        var modalOrcamento = document.querySelector('#jl-modal-orcamento');
        overlay.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-slide-top-in');

    });


}

//ANIMANDO ELEMENTOS ON SCROLL COM WAYPOINTS
var myScrollDown = document.querySelector('.jl-scroll-down');
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function(){
       myScrollDown.classList.toggle('jl-fade-out');
    },
    offset: '80%'
});

//PORTFOLIO SLIDER

//DECLARANDO VARIAVIES DO SLIDER
var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList      = document.querySelector('.jl-slider-list');
var sliderItem      = document.querySelectorAll('.jl-slider-item');
var sliderListWidth = null;


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


//FAZENDO ANIMAÇÃO DO SLIDER ONCLICK
var prevItem        = document.querySelector('.jl-items-prev'); 
var nextItem        = document.querySelector('.jl-items-next');
var sliderPosicao   = 0; 

nextItem.addEventListener('click', function(e){
    e.preventDefault();
    var lastItem = (sliderListWidth - containerWidth);
    
    if((-1*(sliderPosicao) === lastItem)){
        return;
    }
    sliderPosicao -= containerWidth;
    
    anime({
        targets: sliderList,
        translateX: sliderPosicao,
        complete: function(anim) {
            console.log('Animação concluída');
        }
      });
      
});

prevItem.addEventListener('click', function(e){
    e.preventDefault();
   
    
    if(sliderPosicao === 0){
        return;
    }
    sliderPosicao += containerWidth;
    
    anime({
        targets: sliderList,
        translateX: sliderPosicao,
        complete: function(anim) {
            console.log('Animação concluída');
        }
      });
      
});

