window.onload= function(){
	// var colorAmarillo= function () {
	// 	this.style.background = "yellow"
	// }
	// var colorBlanco= function () {
	// 	this.style.background = "white"
	// }
	
	var operacion=""
	var nuevaOp=false
	var operando=""

	var numeros = function(){
		if (nuevaOp==true) {
			document.getElementById('pantalla').value=0
			nuevaOp=false
		}
		var pantalla=document.getElementById('pantalla').value		
		if (pantalla==0) {
			document.getElementById('pantalla').value=this.value
		}else{
			document.getElementById('pantalla').value+=this.value
		}
		
	}

	
	
	var reiniciar=document.getElementById('reiniciar')
	var cero = document.getElementById('cero')
	var uno = document.getElementById('uno')
	var dos = document.getElementById('dos')
	var tres = document.getElementById('tres')
	var cuatro = document.getElementById('cuatro')
	var cinco = document.getElementById('cinco')
	var seis = document.getElementById('seis')
	var siete = document.getElementById('siete')
	var ocho = document.getElementById('ocho')
	var nueve = document.getElementById('nueve')

	var suma = document.getElementById('suma')
	var resta = document.getElementById('resta')
	var multriplicacion = document.getElementById('multriplicacion')
	var division = document.getElementById('division')
	var igual = document.getElementById('igual')
	
	
	cero.addEventListener('click',numeros)
	uno.addEventListener('click',numeros)
	dos.addEventListener('click',numeros)
	tres.addEventListener('click',numeros)
	cuatro.addEventListener('click',numeros)
	cinco.addEventListener('click',numeros)
	seis.addEventListener('click',numeros)
	siete.addEventListener('click',numeros)
	ocho.addEventListener('click',numeros)
	nueve.addEventListener('click',numeros)

	suma.addEventListener('click',function(){		
		operacion+=document.getElementById('pantalla').value+"+"	
		document.getElementById('pantalla').value=0	
	})
	resta.addEventListener('click',function(){		
		operacion+=document.getElementById('pantalla').value+"-"	
		document.getElementById('pantalla').value=0	
	})
	multriplicacion.addEventListener('click',function(){		
		operacion+=document.getElementById('pantalla').value+"*"	
		document.getElementById('pantalla').value=0	
	})
	division.addEventListener('click',function(){		
		operacion+=document.getElementById('pantalla').value+"/"	
		document.getElementById('pantalla').value=0	
	})
	


	igual.addEventListener('click',function(){
		pantalla=document.getElementById('pantalla').value
		operacion+=pantalla
		document.getElementById('pantalla').value=eval(operacion)
		operacion=""
		nuevaOp=true

	})

	reiniciar.addEventListener('click',function(){
		document.getElementById('pantalla').value=0
	})
}

