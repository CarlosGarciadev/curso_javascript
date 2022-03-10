var lista = ['Laranja', 'maçã', 'Pera', 'Jaca', 'Limão'];

var listaUl = document.createElement('ul'); //cria a lista ul

//Inserir essa ul no body
var body = document.getElementsByTagName('body');

//console.log(body[0]);


//Inserir a lista no body
body[0].appendChild(listaUl); //metodo de adicionar o elemento filho 


//Adicionar itens a lista
 var listaNoBody = document.getElementsByTagName('ul');

 console.log(listaNoBody[0]);

 for(var i = 0; i < lista.length; i++) {

    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i]);

    //Add texto dentro do li
    liFor.appendChild(textoLi);

     //adicionar li dentro de ul
     listaNoBody[0].appendChild(liFor);

 }