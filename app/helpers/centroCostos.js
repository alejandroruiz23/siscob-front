import { EditarCC } from "../components/EditCC.js";
import { ajax } from "./ajax.js";
import api from "../helpers/sc_api.js";

export function menuCC() {
  //asigno funciones para los botones

  const contenido = [];
  //capturo eventos de window
  window.addEventListener("click", async (e) => {
    // console.log(e.target);
    if (e.target.matches("#accion")) {
      let input = e.target;
      // console.log(e)
      let datos = input.parentElement.parentElement.children;
      let seleccion = [];

      // console.log(datos)
      if (input.checked === true) {
        for (const dato of datos) {
          if (dato.textContent === "") {
            continue;
          } //no agrego celdas vacias (inputs en posicion 0)
          seleccion.push(dato.textContent);
        }
        contenido.push(seleccion);
        // console.log(contenido);
      } else {
        for (const dato of datos) {
          if (dato.textContent === "") {
            continue;
          } //no agrego celdas vacias (inputs en posicion 0)
          seleccion.push(dato.textContent);
        }
        // console.log(seleccion);
        for (const arr of contenido) {
          // console.log(arr);

          //aqui comparo el array que se deseleccionó y miro si está dentro del array contenido, que me está guardando cada selección
          if (
            arr.length === seleccion.length &&
            seleccion.every((el, ind) => el === arr[ind])
          ) {
            // console.log("Son iguales y el igual dentro de contenido es: "+ arr);
            // console.log(contenido.indexOf(arr));

            //aqui elimino la posicion que coincide
            contenido.splice(contenido.indexOf(arr), 1);
          }
        }
      }
    }

    if (e.target.matches("#btn-editar")) {
      e.preventDefault();
      if (contenido.length === 1) {
        // console.log(contenido);
        let codigo = contenido[0][0],
          nombre = contenido[0][1],
          estado;
        if (contenido[0][2] === "Activo"){estado = true}else{estado = false;}

        let titulo = document.createElement("h1");
        titulo.innerText = "Editar centro de costos";

        let botones = `<div class="botones">
            <button type="submit" value="editar-centro" class="aceptar" id="btn-editar-aceptar">Aceptar</button>
            <button class="cancelar" id="btn-cancelar">Cancelar</button>
            </div>`;

        document.getElementById("main").innerHTML = EditarCC();
        document
          .getElementById("main")
          .insertAdjacentElement("afterbegin", titulo);
        document
          .getElementById("main")
          .insertAdjacentHTML("beforeend", botones);

        document.getElementById("codigo-centro").value = codigo;
        document.getElementById("codigo-centro").disabled = true;
        document.getElementById("nombre-centro").value = nombre;
        document.getElementById("estado-centro").checked = estado;
      } else {
        alert("Debe seleccionar una fila");
      }
    }
    if (e.target.matches("#btn-cancelar")) {
      e.preventDefault();
      window.location = "";
    }

    if (e.target.matches("#btn-editar-aceptar")) {
      e.preventDefault();
      let codigo = document.getElementById("codigo-centro").value,
        nombre = document.getElementById("nombre-centro").value,
        estado = document.getElementById("estado-centro").checked;
      if (estado === true){estado = 1;}else{estado = 0;}

      let datos = {
        codigoCC: codigo,
        nombreCC: nombre,
        estadoCC: estado,
      };
      const token = sessionStorage.getItem("auth")
      // console.log("Informacion editada correctamente: "+codigo+' '+nombre+' '+estado)
      await ajax({
        url: api.CENTRO_COSTO,
        method: "PUT",
        headers : {
          "Authorization":`Bearer ${token}`,
          "Content-Type": "application/json"},
        body: JSON.stringify(datos),
        cbSucces: location = ''
        
      });
      
      
    }

    if (e.target.matches("#btn-borrar")) {
      e.preventDefault();
      if (contenido.length === 1) {
        let estado = contenido[0][2];
        if (estado === "Inactivo"){estado = 0;} else{estado = 1;}

        let datos = {
          codigoCC: contenido[0][0],
          nombreCC: contenido[0][1],
          estadoCC: estado,
        };
        // console.log(datos)
        let confirmar = confirm("¿Está seguro que desea eliminar el registro?");
        // console.log(confirmar)
        if (confirmar === true) {
          const token = sessionStorage.getItem("auth")
          await ajax({
            url: api.CENTRO_COSTO,
            method: "DELETE",
            headers : {
              "Authorization":`Bearer ${token}`,
              "Content-Type": "application/json"},
            body: JSON.stringify(datos),
            cbSucces: location.reload(),
          });
          contenido = [];
        } else {
          false;
        }
      } else {
        alert("Debe seleccionar una fila");
      }
    }

    if (e.target.matches("#btn-agregar")) {
      e.preventDefault();
      location = "#/crear/centro";
      // console.log("Entro a agregar")
    }
  });
}
