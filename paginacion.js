var opcionesPaginacion = {
    //�sta no hace falta especificarla, viene por defecto
    paginaActual: location.href,
    //Post por cada p�gina
    postPorPag: 12,
    //El n�mero de entradas que tiene la primera p�gina
    postsPrimeraPag: 12,
    //El cantidad de botones que tiene.
    numerosDePag: 12,
    //Texto del bot�n anterior
    textoAnterior: "Anterior",
    //Texto del bot�n siguiente
    textoSiguiente: "Siguiente",
    //Texto del bot�n para ir a la primera
    textoPrimera: "&laquo;",
    //Texto del bot�n para ir a la �ltima
    textoFin: "&raquo;",
    //Si se quiere que se muestre "..." si se han recortado p�ginas
    mostrarPuntos: false,
    //La clase que se muestra para el bot�n de la p�gina actual
    claseActual: "activo",
    //La plantilla de los links:
    //Nota: Es necesario que haya m�nimo una clase (si no se quiere, es posible poner class='')
            //Si no no funciona el la clase para el bot�n actual
    //{{link}}=>La url
    //{{num}}=>El n�mero de p�gina o textos de Anterior, Primera...
    plantillaPagLink: "<span class='boton'><a href='{{link}}'>{{num}}<\/a><\/span>",
    //La plantilla del resto.
    //{{num}}=> El n�mero de p�gina actual y los puntos suspensivos
    plantillaPagPlain: "<span class='boton'>{{num}}<\/span>",
    //El contenedor en el que estar�n (por la parte de arriba).
    //En esta opci�n y en la siguiente es posible usar el texto {{total}} para mostrar el n�mero de p�ginas total
        //Ej: '<div class="contenedor-pags"><span class='total'>{{total}}</span>
    htmlBefore: '<div class="contenedor-pags"><div class="grupo-botones paginacion">',
    //Lo mismo pero para despu�s. recuerda cerrar todas las etiquetas abiertas
    htmlAfter: '<\/div><\/div>'
};