let rotacao = document.getElementById('rotation');
let displayA = document.getElementById('area');
let displayB = document.getElementById('area-costa');
displayB.style.opacity ="0";
displayB.style.zIndex = "-1"

function esqueci(){
    displayB.style.zIndex = "1"
    displayB.style.opacity = "1";
    displayA.style.opacity ="0";
    rotacao.style.transform = "rotateY(180deg)";
}
function voltar(){
    displayB.style.opacity ="0";
    displayA.style.opacity ="1";
    displayB.style.zIndex = "-1"
    rotacao.style.transform = "rotateY(0deg)";
}
function help(){
    alert("Seja bem Vindo ao Login do correios");
    alert("Ao clicar em 'esquecer senha' ou 'voltar' é exibido uma animação")
}