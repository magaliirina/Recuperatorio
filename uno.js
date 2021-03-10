/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000  */
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let respuesta;
	let acumulador_Qa=0;
	let acumulador_programador=0;
	let acumulador_analista=0;
	let contador_programador=0;
	let contador_analista=0;
	let contador_Qa=0;
	let promedio_analistas;
	let promedio_Qa;
	let promedio_programador;
	let flag_maximoSueldo=0;
	let sexo_maximoSueldo;
	let maximoSueldo;
	let flag_maximoSueldofemenino=0;
	let nombre_maximoSuledofemenino;
	let maximoSuledofemenino;
	let contador_noBinario=0;




	do{
		nombre=prompt("Ingrese el nombre");
		while(nombre==" "){
		nombre=prompt("Invalido.Ingrese el nombre");
		}
		edad=parseInt(prompt("Ingrese la edad"));
		while(!(isNaN(edad)==false)){
		edad=parseInt(prompt("Invalido.Ingrese la edad"));
		}
		sexo=prompt("Ingrese el sexo");
		while(!(sexo=="femenino"||sexo=="masculino"||sexo=="no binario")){
		sexo=prompt("Invalido.Ingrese el sexo");
		}
		puesto=prompt("Ingrese el puesto");
		while(!(puesto=="programador"||puesto=="analista"||puesto=="Qa")){
		puesto=prompt("Invalido.Ingrese el puesto");
		}
		sueldo=parseInt(prompt("Ingrese el sueldo"));
		while(!(sueldo>=15000&&sueldo<=70000)){
		sueldo=parseInt(prompt("Invalido.Ingrese el sueldo"));
		}
		switch(puesto){
			case"Qa":
				acumulador_Qa+=sueldo;
				contador_Qa++;
				break;
			case"analista":
				acumulador_analista+=sueldo;
				contador_analista++;
				break;
			case"programador":
				acumulador_programador+=sueldo;
				contador_programador++;
				break;
		}

		if(flag_maximoSueldo==0||maximoSueldo<sueldo){
			maximoSueldo=sueldo;
			sexo_maximoSueldo=sexo;
			flag_maximoSueldo=1;
		}
		switch(sexo){
			case"femenino":
				if(flag_maximoSueldofemenino==0||maximoSuledofemenino<sueldo){
					maximoSuledofemenino=sueldo;
					nombre_maximoSuledofemenino=nombre;
					flag_maximoSueldofemenino=1;
				}
				break;
			case"no binario":
			if(sueldo>=20000&&sueldo<=55000){
				contador_noBinario++;
			}
				break;
		}

		respuesta=confirm("¿Desea ingresar otro empleado?");
	}while(respuesta==true)
	/*a) promedio de sueldos para cada puesto
	b) el sexo del que percibe el mayor sueldo
	c) el nombre del empleado femenino con mas sueldo
	d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000  */
	if(contador_Qa!=0){
		promedio_Qa=acumulador_Qa/contador_Qa;
		console.log("promedio de sueldos para Qa es "+promedio_Qa);
	}
	else{
		console.log("No se registraron Qa");
	}
	if(contador_programador!=0){
		promedio_programador=acumulador_programador/contador_programador;
		console.log("promedio de sueldos para Programadores es "+promedio_programador);
	}
	else{
		console.log("No se registraron programador");
	}
	if(contador_analista!=0){
		promedio_analistas=acumulador_analista/contador_analista;
		console.log("promedio de sueldos para analistas es "+ promedio_analistas);
	}
	else{
		console.log("No se registraron analistas");
	}
	//b
	console.log("El sexo del que percibe el mayor sueldo es "+sexo_maximoSueldo);
	//c
	console.log("El nombre del empleado femenino con mas sueldo es "+nombre_maximoSuledofemenino);
	//d
	console.log("La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es "+contador_noBinario);

}
