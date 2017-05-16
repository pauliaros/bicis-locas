function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var selector = document.getElementsByClassName("form-control")[4].value;
	var twitter = document.getElementById("input-social").value;

	var nuevoNodoNombre = document.createElement("span");
	var nuevoTextoNombre = document.createTextNode("Ingrese su nombre, la primera letra debe ser en mayuscula");
	var nombreIngresado = document.getElementsByClassName("input box")[0];
		nuevoNodoNombre.appendChild(nuevoTextoNombre);
		nombreIngresado.appendChild(nuevoNodoNombre);

	var nuevoNodoApellido = document.createElement("span");
	var nuevoTextoApellido = document.createTextNode("Ingrese su apellido, la primera letra debe ser en mayuscula");
	var apellidoIngresado = document.getElementsByClassName("input box")[1];
		nuevoNodoApellido.appendChild(nuevoTextoApellido);
		apellidoIngresado.appendChild(nuevoNodoApellido);

	var nuevoNodoEmail = document.createElement("span");
	var nuevoTextoEmail = document.createTextNode("Ingrese su correo electrónico");
	var EmailIngresado = document.getElementsByClassName("input box")[2];
		nuevoNodoEmail.appendChild(nuevoTextoEmail);
		EmailIngresado.appendChild(nuevoNodoEmail);	
	
	nombre = document.getElementById("name").value;
if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
  return false;
}


