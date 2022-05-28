let colors=['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];
let click=document.getElementById('click');
function myClick(){
    let index = Math.floor(Math.random() * colors.length);
    let box = document.getElementById('box');
    box.style.background = `${colors[index]}`
}