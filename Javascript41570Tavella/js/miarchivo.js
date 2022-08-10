    let examen = parseInt(prompt("Nota del Examen"));
	let final = parseInt(prompt("Notal del Examen Final"));
	let promedio = calcularPromedio()
	function calcularPromedio(){
		let resultado =(examen+final)/2;
		return resultado
	}
	
	if(promedio > 10){
		alert("Las notas introducidas deben tener valor entre 0 y 10 ")
	}
	else if(promedio >= 7){
		alert("El promedio es "+promedio+" APROBADO");
	}
	else{
		alert("El promedio es "+promedio+" DESAPROBADO");
	}
