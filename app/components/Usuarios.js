import { Actions } from "./Actions.js";

export function Usuarios(){
    const $section = document.createElement("section");
    $section.classList.add("table");
    $section.innerHTML = Actions();
    const $table = document.createElement("table");

    //creo el encabezado con los titulos especificos de centro de costos y los agrego a la tabla
    const $thead = document.createElement("thead");
    const $tr = document.createElement("tr");
    $thead.innerHTML = `
    <th>Acción</th>
    <th>Id</th>
    <th>Nombre de usuario</th>
    <th>Rol</th>
    `;
    $table.appendChild($thead);

    //creo el cuerpo vacio de la tabla con id contenido
    const $tbody = document.createElement("tbody");
    $tbody.id = "contenido";
    $table.appendChild($tbody);

    //agrego la table con todo dentro de la seccion
    $section.appendChild($table);


    return $section;
}