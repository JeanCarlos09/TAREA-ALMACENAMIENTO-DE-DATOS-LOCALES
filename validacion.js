document.addEventListener('DOMContentLoaded', function() {

    // Obtiene el formulario con el id 'registroForm' y añade un evento 'submit' que se ejecutará cuando el formulario sea enviado.
    document.getElementById('registroForm').addEventListener('submit', function (event) {
        let valid = true;
        // Inicializa una variable 'valid' en true para realizar un seguimiento de la validez de todos los campos del formulario.

        // Expresiones regulares para validar diferentes campos del formulario.
        const nombrePattern = /^[a-zA-Z\s]+$/;
        const apellidoPattern = /^[a-zA-Z\s]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefonoPattern = /^\d{10}$/;
        const direccionPattern = /^[a-zA-Z0-9\s,.-]+$/;
        const ocupacionPattern = /^[a-zA-Z\s]+$/;
        const ciudadPattern = /^[a-zA-Z\s]+$/;
        const codigoPostalPattern = /^\d+$/;
        const paisPattern = /^[a-zA-Z\s]+$/;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Obtiene los valores y los elementos para los mensajes de error de cada campo del formulario.
        const nombre = document.getElementById('nombre').value;
        const nombreError = document.getElementById('nombreError');

        const apellido = document.getElementById('apellido').value;
        const apellidoError = document.getElementById('apellidoError');

        const email = document.getElementById('email').value;
        const emailError = document.getElementById('emailError');

        const telefono = document.getElementById('telefono').value;
        const telefonoError = document.getElementById('telefonoError');

        const direccion = document.getElementById('direccion').value;
        const direccionError = document.getElementById('direccionError');

        const ocupacion = document.getElementById('ocupacion').value;
        const ocupacionError = document.getElementById('ocupacionError');

        const ciudad = document.getElementById('ciudad').value;
        const ciudadError = document.getElementById('ciudadError');

        const codigoPostal = document.getElementById('codigo_postal').value;
        const codigoPostalError = document.getElementById('codigoPostalError');

        const pais = document.getElementById('pais').value;
        const paisError = document.getElementById('paisError');

        const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
        const fechaNacimientoError = document.getElementById('fechaNacimientoError');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Limpia los mensajes de error anteriores para evitar que se acumulen en el formulario.
        nombreError.textContent = '';
        apellidoError.textContent = '';
        emailError.textContent = '';
        telefonoError.textContent = '';
        direccionError.textContent = '';
        ocupacionError.textContent = '';
        ciudadError.textContent = '';
        codigoPostalError.textContent = '';
        paisError.textContent = '';
        fechaNacimientoError.textContent = '';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Validaciones
        // Valida el campo 'nombre'.
if (!nombre) {
    // Si el campo 'nombre' está vacío, muestra un mensaje de error indicando que no puede estar vacío.
    nombreError.textContent = 'El nombre no puede estar vacío.';
    valid = false; // Marca el formulario como no válido.
} else if (!nombrePattern.test(nombre)) {
    // Si el valor del campo 'nombre' no coincide con el patrón (solo letras y espacios), muestra un mensaje de error.
    nombreError.textContent = 'El nombre no es válido (solo letras y espacios).';
    valid = false; // Marca el formulario como no válido.
}

// Valida el campo 'apellido'.
if (!apellido) {
    // Si el campo 'apellido' está vacío, muestra un mensaje de error indicando que no puede estar vacío.
    apellidoError.textContent = 'El apellido no puede estar vacío.';
    valid = false; // Marca el formulario como no válido.
} else if (!apellidoPattern.test(apellido)) {
    // Si el valor del campo 'apellido' no coincide con el patrón (solo letras y espacios), muestra un mensaje de error.
    apellidoError.textContent = 'El apellido no es válido (solo letras y espacios).';
    valid = false; // Marca el formulario como no válido.
}

// Valida el campo 'email'.
if (!email) {
    // Si el campo 'email' está vacío, muestra un mensaje de error indicando que no puede estar vacío.
    emailError.textContent = 'El email no puede estar vacío.';
    valid = false; // Marca el formulario como no válido.
} else if (!emailPattern.test(email)) {
    // Si el valor del campo 'email' no coincide con el patrón de un email válido, muestra un mensaje de error.
    emailError.textContent = 'El email no es válido.';
    valid = false; // Marca el formulario como no válido.
}

// Valida el campo 'telefono'.
if (!telefono) {
    // Si el campo 'telefono' está vacío, muestra un mensaje de error indicando que no puede estar vacío.
    telefonoError.textContent = 'El teléfono no puede estar vacío.';
    valid = false; // Marca el formulario como no válido.
} else if (!telefonoPattern.test(telefono)) {
    // Si el valor del campo 'telefono' no coincide con el patrón (debe tener 10 dígitos), muestra un mensaje de error.
    telefonoError.textContent = 'El teléfono no es válido (10 dígitos).';
    valid = false; // Marca el formulario como no válido.
}

// Valida el campo 'direccion'.
if (!direccion) {
    // Si el campo 'direccion' está vacío, muestra un mensaje de error indicando que no puede estar vacío.
    direccionError.textContent = 'La dirección no puede estar vacía.';
    valid = false; // Marca el formulario como no válido.
} else if (!direccionPattern.test(direccion)) {
    // Si el valor del campo 'direccion' no coincide con el patrón (permitido letras, números, espacios y algunos caracteres especiales), muestra un mensaje de error.
    direccionError.textContent = 'La dirección no es válida.';
    valid = false; // Marca el formulario como no válido.
}

// Valida el campo 'ocupacion'.
if (!ocupacion) {
    // Si el campo 'ocupacion' está vacío, muestra un mensaje de error indicando que no puede estar vacío.
    ocupacionError.textContent = 'La ocupación no puede estar vacía.';
    valid = false; // Marca el formulario como no válido.
} else if (!ocupacionPattern.test(ocupacion)) {
    // Si el valor del campo 'ocupacion' no coincide con el patrón (solo letras y espacios), muestra un mensaje de error.
    ocupacionError.textContent = 'La ocupación no es válida (solo letras y espacios).';
    valid = false; // Marca el formulario como no válido.
}

// Valida el campo 'ciudad'.
if (!ciudad) {
    // Si el campo 'ciudad' está vacío, muestra un mensaje de error indicando que no puede estar vacío.
    ciudadError.textContent = 'La ciudad no puede estar vacía.';
    valid = false; // Marca el formulario como no válido.
} else if (!ciudadPattern.test(ciudad)) {
    // Si el valor del campo 'ciudad' no coincide con el patrón (solo letras y espacios), muestra un mensaje de error.
    ciudadError.textContent = 'La ciudad no es válida (solo letras y espacios).';
    valid = false; // Marca el formulario como no válido.
}

// Valida el campo 'codigo_postal'.
if (!codigoPostal) {
    // Si el campo 'codigo_postal' está vacío, muestra un mensaje de error indicando que no puede estar vacío.
    codigoPostalError.textContent = 'El código postal no puede estar vacío.';
    valid = false; // Marca el formulario como no válido.
} else if (!codigoPostalPattern.test(codigoPostal)) {
    // Si el valor del campo 'codigo_postal' no coincide con el patrón (debe contener solo números), muestra un mensaje de error.
    codigoPostalError.textContent = 'El código postal no es válido (solo números).';
    valid = false; // Marca el formulario como no válido.
}

// Valida el campo 'pais'.
if (!pais) {
    // Si el campo 'pais' está vacío, muestra un mensaje de error indicando que no puede estar vacío.
    paisError.textContent = 'El país no puede estar vacío.';
    valid = false; // Marca el formulario como no válido.
} else if (!paisPattern.test(pais)) {
    // Si el valor del campo 'pais' no coincide con el patrón (solo letras y espacios), muestra un mensaje de error.
    paisError.textContent = 'El país no es válido (solo letras y espacios).';
    valid = false; // Marca el formulario como no válido.
}

// Valida el campo 'fecha_nacimiento'.
if (!fechaNacimiento) {
    // Si el campo 'fecha_nacimiento' está vacío, muestra un mensaje de error indicando que no puede estar vacío.
    fechaNacimientoError.textContent = 'La fecha de nacimiento no puede estar vacía.';
    valid = false; // Marca el formulario como no válido.
} else {
    // Si el campo 'fecha_nacimiento' no está vacío, realiza validaciones adicionales para la edad.
    const today = new Date(); // Obtiene la fecha actual.
    const birthDate = new Date(fechaNacimiento); // Convierte la fecha de nacimiento a un objeto Date.
    let age = today.getFullYear() - birthDate.getFullYear(); // Calcula la edad en años.
    const monthDifference = today.getMonth() - birthDate.getMonth(); // Calcula la diferencia de meses.

    // Si la diferencia de meses es negativa o es cero pero la fecha actual es anterior al cumpleaños, reduce la edad en un año.
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Si la edad calculada es menor a 18 años, muestra un mensaje de error indicando que el usuario debe tener al menos 18 años.
    if (age < 18) {
        fechaNacimientoError.textContent = 'Debes tener al menos 18 años.';
        valid = false; // Marca el formulario como no válido.
    }
}


        // Si el formulario es válido, guarda los datos en localStorage
        if (valid) {
            guardarEnLocalStorage();
        } else {
            event.preventDefault();
        }
    });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Función para guardar los datos del formulario en localStorage
function guardarEnLocalStorage() {
    // Crea un objeto 'datosRegistro' que contendrá todos los datos del formulario.
    const datosRegistro = {
        // Obtiene el valor del campo 'nombre' y lo asigna a la propiedad 'nombre' del objeto.
        nombre: document.getElementById('nombre').value,
        // Obtiene el valor del campo 'apellido' y lo asigna a la propiedad 'apellido' del objeto.
        apellido: document.getElementById('apellido').value,
        // Obtiene el valor del campo 'email' y lo asigna a la propiedad 'email' del objeto.
        email: document.getElementById('email').value,
        // Obtiene el valor del campo 'telefono' y lo asigna a la propiedad 'telefono' del objeto.
        telefono: document.getElementById('telefono').value,
        // Obtiene el valor del campo 'direccion' y lo asigna a la propiedad 'direccion' del objeto.
        direccion: document.getElementById('direccion').value,
        // Obtiene el valor del campo 'ocupacion' y lo asigna a la propiedad 'ocupacion' del objeto.
        ocupacion: document.getElementById('ocupacion').value,
        // Obtiene el valor del campo 'ciudad' y lo asigna a la propiedad 'ciudad' del objeto.
        ciudad: document.getElementById('ciudad').value,
        // Obtiene el valor del campo 'codigo_postal' y lo asigna a la propiedad 'codigoPostal' del objeto.
        codigoPostal: document.getElementById('codigo_postal').value,
        // Obtiene el valor del campo 'pais' y lo asigna a la propiedad 'pais' del objeto.
        pais: document.getElementById('pais').value,
        // Obtiene el valor del campo 'fecha_nacimiento' y lo asigna a la propiedad 'fechaNacimiento' del objeto.
        fechaNacimiento: document.getElementById('fecha_nacimiento').value
    };
    // Convierte el objeto 'datosRegistro' a una cadena JSON y lo guarda en localStorage con la clave 'datosRegistro'.
    localStorage.setItem('datosRegistro', JSON.stringify(datosRegistro));
}

});
