let menumob = document.querySelector(".menu-mobile");
function clicouMenu(){
	if(menumob.classList.contains("d-none")){
		menumob.classList.add("d-block");
		menumob.classList.remove("d-none");
	}else{
		menumob.classList.add("d-none");
		menumob.classList.remove("d-block");
	}
} 