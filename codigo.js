//Juleidy Mayte Briones Delgado
//Matias Kenneth Perez Toala
//Kevin Ariel Basurto Zambrano

function multiplicacion(p1, p2) {
  return p1 * p2;
}

// resultado de 6x7 (solo existe en Hola.html)
var multi = document.getElementById("multi");
if (multi) {
  multi.textContent = multiplicacion(6, 7);
}

// boton que muestra y oculta el saludo (solo en Hola.html)
var boton = document.getElementById("btn-saludo");
var saludo = document.getElementById("saludo");
if (boton && saludo) {
  boton.addEventListener("click", function () {
    if (boton.getAttribute("aria-expanded") === "false") {
      boton.setAttribute("aria-expanded", "true");
      saludo.hidden = false;
    } else {
      boton.setAttribute("aria-expanded", "false");
      saludo.hidden = true;
    }
  });
}

// revisa que el campo no este vacio
function validar(campo, mensaje) {
  var error = document.getElementById("error-" + campo.id);
  if (campo.value.trim() === "") {
    error.textContent = "Error: " + mensaje;
    campo.setAttribute("aria-invalid", "true");
    return false;
  }
  error.textContent = "";
  campo.removeAttribute("aria-invalid");
  return true;
}

// validacion del formulario (solo en Leccion.html)
var form = document.getElementById("form-registro");
if (form) {
  // asi se usan estos mensajes y no los del navegador
  form.noValidate = true;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var estado = document.getElementById("estado");
    var errores = 0;

    if (!validar(nombres, "ingrese sus nombres.")) {
      errores = errores + 1;
    }
    if (!validar(apellidos, "ingrese sus apellidos.")) {
      errores = errores + 1;
    }
    if (!validar(correo, "ingrese su correo.")) {
      errores = errores + 1;
    } else if (!correo.validity.valid) {
      document.getElementById("error-correo").textContent = "Error: el correo no es valido, ejemplo: nombre@correo.com";
      correo.setAttribute("aria-invalid", "true");
      errores = errores + 1;
    }

    if (errores > 0) {
      estado.textContent = "Revise los campos que tienen error.";
      // manda el cursor al primer campo con error
      form.querySelector("[aria-invalid]").focus();
    } else {
      form.reset();
      estado.textContent = "Registro enviado correctamente.";
    }
  });

  // al borrar el form tambien se borran los errores
  form.addEventListener("reset", function () {
    var errores = form.querySelectorAll(".error");
    for (var i = 0; i < errores.length; i++) {
      errores[i].textContent = "";
    }
    var campos = form.querySelectorAll("[aria-invalid]");
    for (var j = 0; j < campos.length; j++) {
      campos[j].removeAttribute("aria-invalid");
    }
    document.getElementById("estado").textContent = "";
  });
}
