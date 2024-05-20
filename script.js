'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const fechar = function(){
    modal.classList.add('hidden');	
overlay.classList.add('hidden');
};

const mostrar = function(){
    modal.classList.remove('hidden');	
overlay.classList.remove('hidden');
};


for (let i=0 ; i<btnsOpenModal.length ; i++) {
btnsOpenModal[i].addEventListener('click', mostrar);
// btnsOpenModal[i].addEventListener('click', function (){
// console.log('Button clicked');
// modal.classList.remove('hidden');	
// overlay.classList.remove('hidden');
// }); 
}

document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        fechar();
        // if(!modal.classList.contains('hidden')){
        //     fechar();
        // }
    } 	

});


btnCloseModal.addEventListener('click', fechar);
overlay.addEventListener('click', fechar);

// overlay.addEventListener('click', function() {
// modal.classList.add('hidden');
// overlay.classList.add('hidden');
// });

// btnCloseModal.addEventListener('click', function() {
// modal.classList.add('hidden');	
// overlay.classList.add('hidden');
// }); 

