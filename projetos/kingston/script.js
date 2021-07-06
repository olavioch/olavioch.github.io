let menumob = document.querySelector(".menu-mobile");
let blocoCard = document.getElementById("bloco");
function clicouMenu(){
	if(menumob.classList.contains("d-none")){
		menumob.classList.add("d-block");
		menumob.classList.remove("d-none");
	}else{
		menumob.classList.add("d-none");
		menumob.classList.remove("d-block");
	}
} 
	var distancia = 0;
function apertouEsquerda(){
	if(distancia > -560){
	distancia = distancia -560;
	blocoCard.style.marginRight = distancia+"px";
	}
}
function apertouDireita(){
	if(distancia < 560){
	distancia = distancia + 560;
	blocoCard.style.marginRight = distancia+"px";
	}
}
