$(document).ready( function(){ //empiezan siempre con $
    var peticion;

    $("#btnEnviar").click(function(){

        var datos = "?nombre=" + $("#txtNombre").val() + "&apellido=" + $("#txtApellido").val(); //las claves + igual valor y se sparan con & y eñ val trae e valor que tenga ese elemento en el html
        peticion = new XMLHttpRequest();
        peticion.onreadystatechange = procesarPeticion;
        peticion.open.open("GET" , "pagina1.php" + datos , true); //true significa que es asincronica. el +datos le agrega todo lo que se envia
        peticion.send();
    });

    function procesarPeticion(){
        if(peticion.readyState == 4 && peticion.status == 200)//=4 porque es cuando se completo la peticion. el status de una peticion si salio todo bien es 200 y los de error son 400 o asi. con 500 son cuando hay error en el servidor
        {
            $("#resultados").text(peticion.responseText);//propiedad que dice el texto de la peticion
        }
    };
});


//los metodos val() y text () vacios son un get y si tienen algo con setters