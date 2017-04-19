$(document).ready( function(){ 
    //enviar datos
    var myObj={"nombre":"Carlos","edad":"30"};//los numeros pueden no ir entre comillas
    var myJSON=JSON.stringify(myObj);
    //recibir datos
    var myJSON={"nombre":"Carlos","edad":"30"};
    var myObj=JSON.parse(myJSON);
});
