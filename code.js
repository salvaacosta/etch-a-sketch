const canvas = document.querySelector('.container');
const blackBtn = document.querySelector('.black-button');
const blueBtn = document.querySelector('.blue-button');
const greenBtn = document.querySelector('.green-button');
const sixteenBtn = document.querySelector('.square-button1');
const thirtyTwoBtn = document.querySelector('.square-button2');
const sixtyFourBtn = document.querySelector('.square-button3');

let div;
let color;
let colorHover;
let remove1;
let remove2;
let removeHover1;
let removeHover2;
let squareNum = 257;

blackBtn.addEventListener('click', changeToBlack);
blueBtn.addEventListener('click', changeToBlue);
greenBtn.addEventListener('click', changeToGreen);

sixteenBtn.addEventListener('click', changeToSixteen);
thirtyTwoBtn.addEventListener('click', changeToThirtytwo);
sixtyFourBtn.addEventListener('click', changeToSixtyfourth);

function changeToSixteen(){
    squareNum = 257;
    canvas.classList.add('sixteen');
    canvas.classList.remove('thirty-two');
    canvas.classList.remove('sixty-four');
    for (let i = 1; i < squareNum; i++) {
        div = document.createElement('div');
        div.classList.add("clase" + i);    
        canvas.appendChild(div);
        
    }
    
    for (let i = 1; i < squareNum; i++){
      let clase = ".clase" + i  
      let divClass = document.querySelector(clase);
      divClass.addEventListener('click', colored);
      divClass.addEventListener('mouseenter', hover);
      divClass.addEventListener('mouseleave', leave);
    
      function colored() {
        divClass.classList.toggle(color);
        divClass.classList.remove(remove1);
        divClass.classList.remove(remove2);
        
      }
    
      function hover() {
        divClass.classList.add(colorHover);
        divClass.classList.remove(removeHover1);
        divClass.classList.remove(removeHover2);
        
      }
    function leave(){
        divClass.classList.remove('black-hover');
        divClass.classList.remove('green-hover');
        divClass.classList.remove('blue-hover');
    }
    }
    
}

function changeToThirtytwo() {
    squareNum = 1025;
    canvas.classList.add('thirty-two');
    canvas.classList.remove('sixteen');
    canvas.classList.remove('sixty-four')
    for (let i = 1; i < squareNum; i++) {
        div = document.createElement('div');
        div.classList.add("clase" + i);    
        canvas.appendChild(div);
        
    }
    
    for (let i = 1; i < squareNum; i++){
      let clase = ".clase" + i  
      let divClass = document.querySelector(clase);
      divClass.addEventListener('click', colored);
      divClass.addEventListener('mouseenter', hover);
      divClass.addEventListener('mouseleave', leave);
    
      function colored() {
        divClass.classList.toggle(color);
        divClass.classList.remove(remove1);
        divClass.classList.remove(remove2);
        
      }
    
      function hover() {
        divClass.classList.add(colorHover);
        divClass.classList.remove(removeHover1);
        divClass.classList.remove(removeHover2);
        
      }
    function leave(){
        divClass.classList.remove('black-hover');
        divClass.classList.remove('green-hover');
        divClass.classList.remove('blue-hover');
    }
    }
    
}

function changeToSixtyfourth() {
    squareNum = 4097;
    canvas.classList.add('sixty-four');
    canvas.classList.remove('thirty-two');
    canvas.classList.remove('sixteen');
    for (let i = 1; i < squareNum; i++) {
        div = document.createElement('div');
        div.classList.add("clase" + i);    
        canvas.appendChild(div);
        
    }
    
    for (let i = 1; i < squareNum; i++){
      let clase = ".clase" + i  
      let divClass = document.querySelector(clase);
      divClass.addEventListener('click', colored);
      divClass.addEventListener('mouseenter', hover);
      divClass.addEventListener('mouseleave', leave);
    
      function colored() {
        divClass.classList.toggle(color);
        divClass.classList.remove(remove1);
        divClass.classList.remove(remove2);
        
      }
    
      function hover() {
        divClass.classList.add(colorHover);
        divClass.classList.remove(removeHover1);
        divClass.classList.remove(removeHover2);
        
      }
    function leave(){
        divClass.classList.remove('black-hover');
        divClass.classList.remove('green-hover');
        divClass.classList.remove('blue-hover');
    }
    }
    

}

function changeToBlack(){
    color = 'black';
    colorHover ='black-hover'
    remove1 = 'blue';
    remove2 = 'green';
    removeHover1 = 'blue-hover';
    removeHover2 = 'green-hover';

}
function changeToBlue(){
    color = 'blue';
    colorHover = 'blue-hover';
    remove1 = 'green';
    remove2 = 'black';
    removeHover1 = 'green-hover';
    removeHover2 = 'black-hover';
}
function changeToGreen(){
    color = 'green';
    colorHover = 'green-hover';
    remove1 = 'blue';
    remove2 = 'black';
    removeHover1 = 'blue-hover';
    removeHover2 = 'black-hover';
}


for (let i = 1; i < squareNum; i++) {
    div = document.createElement('div');
    div.classList.add("clase" + i);    
    canvas.appendChild(div);
    
}

for (let i = 1; i < squareNum; i++){
  let clase = ".clase" + i  
  let divClass = document.querySelector(clase);
  divClass.addEventListener('click', colored);
  divClass.addEventListener('mouseenter', hover);
  divClass.addEventListener('mouseleave', leave);

  function colored() {
    divClass.classList.toggle(color);
    divClass.classList.remove(remove1);
    divClass.classList.remove(remove2);
    
  }

  function hover() {
    divClass.classList.add(colorHover);
    divClass.classList.remove(removeHover1);
    divClass.classList.remove(removeHover2);
    
  }
function leave(){
    divClass.classList.remove('black-hover');
    divClass.classList.remove('green-hover');
    divClass.classList.remove('blue-hover');
}
}

