let changeImgButton = document.querySelector('.change-img');
let changeTextButton = document.querySelector('.change-text');
let foto = document.querySelector('.foto');
let text = document.querySelector('.text');

let currentIndex = 1;
let changeCount = 4;
// function
function imgChange(){
    currentIndex++;
    if(currentIndex > changeCount){
        currentIndex = 1;
    }
    //console.log('cambio');
    console.log(currentIndex);
    foto.src = `./assets/images/img_${currentIndex}.png`;
    
}
function textChange(){
    currentIndex++;
    if(currentIndex > changeCount){
        currentIndex = 1;
    }
    text.src = `./assets/images/txt_${currentIndex}.png`;
}
// evento dimanico
changeImgButton.addEventListener('click',imgChange);
changeTextButton .addEventListener('click',textChange);