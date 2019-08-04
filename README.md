# EasySelect.js
funcion para rellenar un select con options en base a un array, con posibilidad de agregar un valor predeterminado, una id de storage para que el usuario siempre que vuelva a la pagina encuentre el ultimo valor que dejo y una funcion que se ejecute cada vez que el usuario haga un cambio en el select. todo con javascript nativo

      //CREAR ARRAY CON OPCIONES (NAME = TEXTO DEL OPTION, ID=VALUE DEL OPTION)
      var arrayPaises = [
          {name:'Chile',id:'cl'},
          {name:'Peru',id:'pe'},
          {name:'Argentina',id:'ar'}
      ];
      
      //CREAR ARRAY CON AJUSTES PARA EL SELECT
      var arraySelectPaises = {
         idSelect: "idSelectPaises",
         arrayData: arrayPaises,
         strValuePreseleccionado: "pe", //<--OPCIONAL
         idStorage: storageSelectPaises", //<--OPCIONAL
         onchange: "holaMundo" //<--OPCIONAL
      };
      
      //LLAMAR A FUNCION PARA INICIAR SELECT
      rellenarSelectWithArray(arraySelectPaises); 
