var opcionesPaginacion = {
    //Ésta no hace falta especificarla, viene por defecto
    paginaActual: location.href,
    //Post por cada página
    postPorPag: 12,
    //El número de entradas que tiene la primera página
    postsPrimeraPag: 12,
    //El cantidad de botones que tiene.
    numerosDePag: 12,
    //Texto del botón anterior
    textoAnterior: "Anterior",
    //Texto del botón siguiente
    textoSiguiente: "Siguiente",
    //Texto del botón para ir a la primera
    textoPrimera: "&laquo;",
    //Texto del botón para ir a la última
    textoFin: "&raquo;",
    //Si se quiere que se muestre "..." si se han recortado páginas
    mostrarPuntos: false,
    //La clase que se muestra para el botón de la página actual
    claseActual: "activo",
    //La plantilla de los links:
    //Nota: Es necesario que haya mínimo una clase (si no se quiere, es posible poner class='')
            //Si no no funciona el la clase para el botón actual
    //{{link}}=>La url
    //{{num}}=>El número de página o textos de Anterior, Primera...
    plantillaPagLink: "<span class='boton'><a href='{{link}}'>{{num}}<\/a><\/span>",
    //La plantilla del resto.
    //{{num}}=> El número de página actual y los puntos suspensivos
    plantillaPagPlain: "<span class='boton'>{{num}}<\/span>",
    //El contenedor en el que estarán (por la parte de arriba).
    //En esta opción y en la siguiente es posible usar el texto {{total}} para mostrar el número de páginas total
        //Ej: '<div class="contenedor-pags"><span class='total'>{{total}}</span>
    htmlBefore: '<div class="contenedor-pags"><div class="grupo-botones paginacion">',
    //Lo mismo pero para después. recuerda cerrar todas las etiquetas abiertas
    htmlAfter: '<\/div><\/div>'
};