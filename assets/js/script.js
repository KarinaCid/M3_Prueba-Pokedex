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
  </div>`
      //Grafico
      var hp =  personaje.stats[0].base_stat;
      var atk = personaje.stats[1].base_stat;
      var def = personaje.stats[2].base_stat;
      var sat = personaje.stats[3].base_stat;
      var sdf = personaje.stats[4].base_stat;
      var spd = personaje.stats[5].base_stat;
      var pokest = [];
       pokest.push(hp, atk, def, sat, sdf, spd);
       
  
  
        var chart = new CanvasJS.Chart("pokemon-grafico", {
          theme: "light1", // "light2", "dark1", "dark2"
          animationEnabled: false, // change to true		
          title:{
            text: "Gráfico Pokémon"
          },
          data: [
          {
            // Change type to "bar", "area", "spline", "pie",etc.
            type: "column",
            dataPoints: [
              { label: "HP",  y:parseFloat(hp)  },
              { label: "Ataque", y: parseFloat(atk)  },
              { label: "Defensa", y: parseFloat(def) },
              { label: "Ataque Especial",  y: parseFloat(sat) },
              { label: "Defensa Especial",  y: parseFloat(sdf)  },
              { label: "Velocidad",  y: parseFloat(spd)  }
            ]
          }
          ]
        });
        chart.render();
  return card;
};

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
  $("#pokemon-grafico").empty();
  $("#input_busqueda").focus();
}

function getAllhabilities() {
  $.ajax({
    type: "GET",
    url: "url",

    success: function (response) {
      
    }
  });
}