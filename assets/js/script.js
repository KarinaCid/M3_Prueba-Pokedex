$(function () {
  $("#buscar").click(e=>{
    buscarPersonaje();
  });

  $("#limpiar").click(e=>{
    limpiar();
  })

  $(document).keypress(e=>{
    if(e.which == 13){
      buscarPersonaje();
    }
  })
});


function getPersonaje(id){
  $.ajax({
    type: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
    success: function (response) {
      console.log("response=>", response);
      //imprimir data
      $("#card").append(generarCard(response));
    }
  });
}

function generarCard(personaje){
  var card = `
  <div class="col-sm-12 col-md-4">
    <div class="card" style="width:100%;">
      <img src="${personaje.sprites.front_default}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h3 class="card-title">${personaje.name}</h3>
        <div>Tipo : ${personaje.types[0].type.name}</div>
        <div>Habilidad : ${personaje.abilities[0].ability.name}</div>
        <div>Altura : ${personaje.height}</div>
        <div>Peso : ${personaje.weight}</div>

      </div>
    </div>
  </div>
  `
  return card;
}

function validacion(id){
  var expresion = /^\d{1,3}$/;
  
  if(!expresion.test(id)){
    alert("Input invalido");
    $("input_busqueda").focus();
    return false
  }

  return true;
}

function buscarPersonaje(){
  var id_personaje = $("#input_busqueda").val();
    //validacion
    if(validacion(id_personaje)){
      getPersonaje(id_personaje);
      $("#input_busqueda").val("");
      $("#input_busqueda").focus();
    }
}
function limpiar(){
  $("#card").empty();
  $("#input_busqueda").focus();
}