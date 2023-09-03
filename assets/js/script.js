let changeImgButton = document.querySelector('.change-img');
let changeTextButton = document.querySelector('.change-text');
let foto = document.querySelector('.foto');
let text = document.querySelector('.text');
let input = document.querySelector('#input');
let title = document.querySelector('.preview-title');
let downImgButton = document.querySelector('.down-img');
// elemento che voglio dopo trasformare in img
let perview = document.querySelector('.preview');

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
function titleChange(){
    let valueInput = input.value;
    if(valueInput.trim().length > 0){

        title.innerText=`Auguri ${valueInput}`;
    }
    else{
        title.innerHTML = 'Auguri Caro'
    }
    console.log(valueInput);
}
function downlandImg(){
    htmlToImage.toJpeg(perview)
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    link.href = dataUrl;
    link.click();
  });
}
// evento dimanico
changeImgButton.addEventListener('click',imgChange);
changeTextButton .addEventListener('click',textChange);
input.addEventListener('input',titleChange);
downImgButton.addEventListener('click',downlandImg);