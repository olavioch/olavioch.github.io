let da= document.getElementById('d1');
let db= document.getElementById('d2');
let dc= document.getElementById('d3');
let botaoa=document.getElementById('bd1');
let botaob=document.getElementById('bd2');
let botaoc=document.getElementById('bd3');

da.style.width= "15%";
db.style.width= "15%";
dc.style.width= "70%";
botaoa.style.opacity = 0;
botaob.style.opacity = 0;
botaoc.style.opacity = 1;
function ativaDa(){
    limpar();
    botaoa.style.opacity = 1;
    da.style.width= "70%";
    db.style.width= "15%";
    dc.style.width= "15%";
}
function ativaDb(){
    limpar();
    botaob.style.opacity = 1;
    da.style.width= "15%";
    db.style.width= "70%";
    dc.style.width= "15%";
}
function ativaDc(){
    limpar();
    botaoc.style.opacity = 1;
    da.style.width= "15%";
    db.style.width= "15%";
    dc.style.width= "70%";
}
function limpar(){
    botaoa.style.opacity = 0;
    botaob.style.opacity = 0;
    botaoc.style.opacity = 0;
}
