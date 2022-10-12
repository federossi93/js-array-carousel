
/*Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro:
avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci 
dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.*/



//carosello

const carosello = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp",
];

//console.log(carosello);


//seleziono elemeto dom dove applicare le immagini

const caroselloEl = document.querySelector('.box');

//creo una variabile per monitorare la slide attiva


let immagineAttiva = 0;


//creo un loop dentro l'array

for (let i = 0; i < carosello.length; i++) {
    //Scorro nel mio array carosello e mi salvo ogni elemento del carosello all interno di slideUrl
    const slideUrl = carosello[i];
    // se i è = 0 allora metti la classe active altrimenti se non è = 0 non inserisci la classe 
    const slideMarkup = `<img class="${i === immagineAttiva ? 'active' : ''}" src="${slideUrl}" alt="">`;
    // inserisco prima della fine di box la costante con la mia immagine al suo interno (slideUrl = SlideMarkup)
    caroselloEl.insertAdjacentHTML('beforeend', slideMarkup);

    console.log(slideMarkup);
}


/*MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. */

//seleziono bottoni

const btnNext =document.querySelector('.next');

const btnback =document.querySelector('.back');


//evento click btnNext

btnNext.addEventListener('click',function() {
    console.log('next');

    //seleziona tutte le immagini nel markup con lo scopo di trovare quella attiva
    const slides = document.querySelectorAll('box > img');

    //console.log(carosello[immagineAttiva]);  //visualizzo l'immagine attualmente attiva
    const currentSlide = carosello[immagineAttiva] 

    //tolgo la classe attiva
    currentSlide.classList.remove('active')

})


//evento click btnback

btnback.addEventListener('click',function() {
    console.log('back');
})

