// EASYSELECT.JS
// EL SIGUIENTE ES UN SCRIPT QUE TIENE LA FUNCION DE POTENCIAR EL USO DEL SELECT DE FORMA SENCILLA
// CON ESTE SCRIPT PODREMOS RELLENAR UN SELECT UTILIZANDO SU ID CON MULTIPLES OPTIONS BASADOS EN UN ARRAY
// PODREMOS HACER QUE EL ESTADO DE ESTE SELECT SE ALMACENE, ASI EL USUARIO CUANDO RECARGUE VERA LO ULTIMO QUE SELECCIONADO
// TAMBIEN SE NOS PERMITE ASIGNAR UN VALOR PREDEFINIDO SIESQUE AUN NO SE ALMACENA EN EL STORAGE, (EL STORAGE TENDRA PRIORIDAD SOBRE ESTE)
// POR ULTIMO PODEMOS ESCRIBIR EN FORMA DE STRING EL NOMBRE DE UNA FUNCION QUE QUERRAMOS QUE SE EJECUTE CUANDO EL USUARIO HAGA UN CAMBIO EN EL SELECT
// PRIMERO CREAREMOS UN ARRAY CON LOS VALORES QUE ELEGIREMOS
// 
// CREADO POR JHONNATTAN RIVERA (TU ELECTROTECNICO) JHONNATTANRIVERARIVERA@GMAIL.COM
// V1.0 04-08-2019
// 
// EJEMPLO COMO UTILIZAR:
// ------------------------------------------------------------------------------
// 1.-DEBEMOS TENER CREADO EL SELECT EN NUESTRO HTML
// 
//          <select id="idSelectPaises"></option>
// 
// 2.-CREAR ARRAY COMO EL SIGUIENTE, DONDE NAME ES EL TEXTO DEL OPTION E ID ES EL VALUE
// 
//          var arrayPaises = [
//              {name:'Chile',id:'cl'},
//              {name:'Peru',id:'pe'},
//              {name:'Argentina',id:'ar'}
//          ];
// 
// 3.-CREAR OTRO ARRAY DONDE ALMACENAMOS LA ID DEL SELECT, LLAMAMOS AL ARRAY ANTERIOR Y ASIGNAMOS UN NOMBRE AL STORAGE
// 
//          var arraySelectPaises = {
//             idSelect: "idSelectPaises",
//             arrayData: arrayPaises,
//             strValuePreseleccionado: "pe", //<--OPCIONAL, AQUI SE PUEDE INGRESAR EL ID DEL OPTION QUE QUEREMOS POR DEFAULT
//             idStorage: storageSelectPaises", //<--OPCIONAL, PONER AQUI UN NOMBRE RANDOM PARA QUE SE ALMACENE EL VALOR ELEGIDO
//             onchange: "holaMundo" //<--OPCIONAL, PONER AQUI FUNCION QUE QUERRAMOS EJECUTAR AL REALIZAR UN CAMBIO
//          };
// 
// 4.-FINALMENTE LLAMAMOS A LA FUNCION QUE INICIALIZA NUESTRO SELECT
// 
//          rellenarSelectWithArray(arraySelectPaises);
// 

function rellenarSelectWithArray(arrayForSelect) {
    
  // SETEAR ID SELECT
  var idSelect = arrayForSelect["idSelect"];
  // SELECCIONAR SELECT BY ID ENVIADA
  var select = document.getElementById(idSelect);
  //SETEAR NUMERO MES PRESELECCIONADO
  var strValuePreseleccionado = arrayForSelect["strValuePreseleccionado"];
  // OBTENER ID STORAGE
  var idStorage = arrayForSelect["idStorage"];
  // OBTENER VALOR ALMACENADO EN ID STORAGE
  var strValueAlmacenado = localStorage.getItem(idStorage);
  //ALMACENAR ARRAY NAME+ID = TEXT+VALUE
  var arrayData = arrayForSelect["arrayData"];
  //AGREGAR NOMBRE DE FUNCION QUE SE EJECUTARA EN ONCHANGE
  var onchange = arrayForSelect["onchange"];

  //BORRAR HIJOS
  select.options.length = 0;

  // SI NO SE ENVIO UN VALOR PRESELECCIONADO Y NO EXISTE STORAGE
  if (strValuePreseleccionado==null && idStorage==null) {

  // SI SE ENVIO UN VALOR PRESELECCIONADO Y NO EXISTE STORAGE
  } else if(strValuePreseleccionado!=null && idStorage==null) {
    // SI SE ENVIO N VALOR PRESELECCIONADO USAR
    var strValueElegido = strValuePreseleccionado;

  // SI EXISTE STORAGE
  } else if(idStorage){

    //SI EL VALOR ALMACENADO NO ES NULO
    if (strValueAlmacenado != null) {
      // SETEARVALOR PRESELECCIONADO DESDE ALMACENADO
      var strValueElegido = strValueAlmacenado;
    } else {
    }

    //AGREGAR FUNCION SETEAR STORAGE AL CAMBIAR
    select.onchange = function(){
      if (onchange) {
        //EJECUTAR FUNCION ONCHANGE
        window[onchange](); 
      }
      //SETEAR STORAGE BY VALUE ACTUAL
      localStorage.setItem(idStorage, this.value);
    };

  }

  // POR CADA ELEMENTO EN ARRAY RECORRER
  for (var i = 1; i <= arrayData.length; i++) {
    // CREAR NUVO OPTION
    var option = document.createElement("option");
    // OBTENER DESCRIPCION FROM ARRAY
    option.text = arrayData[i-1]["name"];
    // RELLENAR ID FROM ARRAY)
    option.value = arrayData[i-1]["id"];

    // SI ID ES IGUAL A PRESELECCIONADO
    if (arrayData[i-1]["id"] == strValueElegido) {
      // DEJAR OPTION SELECCIONADO
      option.setAttribute("selected","");
    }
    // AGREGAR OPTION A SELECT BY ID
    select.add(option);
  }

}