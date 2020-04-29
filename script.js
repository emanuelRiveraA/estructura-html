document.querySelector('h1').addEventListener('click', ()=>{
    document.body.style.background = 'green';
});

document.getElementById("password").addEventListener('keyup',e =>{
    console.log(e.target.value);
});

const modal = document.getElementById("modal");
const abrir = document.getElementById("abrir");
const close = document.getElementById("close");

abrir.addEventListener('click', ()=>{
    modal.setAttribute('open','true');
});
close.addEventListener('click', ()=>{
    modal.removeAttribute('open');
});
