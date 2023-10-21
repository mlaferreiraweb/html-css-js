//DESCLARANDO VARIÁVEIS
var btnContact = document.querySelector('.jl-btn-contact');

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