// Función para crear una cookie
function crearCookie(nombre, valor, diasExpiracion) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000)); //tiempo de expiración    
    let expiracion = "expires=" + fecha.toUTCString();
    let galleta = document.cookie = nombre + "=" + valor + "; " + expiracion + "; path=/"; //Se establece el valor y el tiempo de expiración
    console.log(galleta)
}

// Función para leer una cookie
function leerCookie(nombre) {
    let nombreCookie = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nombreCookie) == 0) {
            return cookie.substring(nombreCookie.length, cookie.length); // Devolver el valor de la cookie
        }
    }
    return ""; // Si no se encuentra la cookie
}

// Función para eliminar una cookie
function eliminarCookie(nombre) {
    crearCookie(nombre, "", -1); // Establece la cookie con una fecha de expiración pasada
}