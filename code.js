const canvas = document.querySelector('.container');
const blackBtn = document.querySelector('.black-button');
const blueBtn = document.querySelector('.blue-button');
const greenBtn = document.querySelector('.green-button')
let div;
let color;
let remove1;
let remove2;

blackBtn.addEventListener('click', changeToBlack);
blueBtn.addEventListener('click', changeToBlue);
greenBtn.addEventListener('click', changeToGreen);

function changeToBlack(){
    color = 'black';
    remove1 = 'blue';
    remove2 = 'green';
}
function changeToBlue(){
    color = 'blue';
    remove1 = 'green';
    remove2 = 'black';
}
function changeToGreen(){
    color = 'green';
    remove1 = 'blue';
    remove2 = 'black';
}


for (let i = 1; i < 257; i++) {
    div = document.createElement('div');
    div.classList.add("clase" + i);    
    canvas.appendChild(div);
    
}

for (let i = 1; i < 257; i++){
  let clase = ".clase" + i  
  let divClass = document.querySelector(clase);
  divClass.addEventListener('mousedown', colored);
  function colored() {
    divClass.classList.toggle(color);
    divClass.classList.remove(remove1);
    divClass.classList.remove(remove2);
  } 
}
