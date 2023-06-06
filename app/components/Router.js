import api from "../helpers/sc_api.js"
import { ajax } from "../helpers/ajax.js";
import { CostCenter } from "./CostCenter.js";
import { EditarCC } from "./EditCC.js";
import { Login } from "./Login.js";
import { Usuarios } from "./Usuarios.js";


export async function Router(){
    
    const d= document,
    w = window;

    let {hash} = location;

    // console.log(hash)
    
    d.getElementById("main").innerHTML= null

    
    if(!hash || hash ==="#/"){
        d.getElementById("main").innerHTML= `<h1>Bienvenido a su software SISCOB</h1>`;


    }else if(hash ==="#/documentos"){
        let modulo = hash.slice(2).toUpperCase();
        d.getElementById("main").innerHTML=`
        <h2>Modulo ${modulo} en proceso de creación. Por favor, tenga paciencia</h2>`;

    }else if(hash ==="#/usuarios"){
        //peticion para cargar usuarios y anexarlo al main
        document.getElementById("main").appendChild(Usuarios());
        const token = sessionStorage.getItem("auth")

        await ajax({
            url: api.USERS,
            method : 'GET',
            headers : {
                "Authorization":`Bearer ${token}`,
                "Content-Type": "application/json"},
            cbSuccess:(usuarios)=>{ 
                console.log(usuarios)
                const $contenido = document.getElementById("contenido")
                $contenido.innerHTML = '';
                usuarios.forEach(usuario => {
                    // console.log(usuario);
                    $contenido.innerHTML +=`
                    <tr>
                            <td><input type="checkbox" name="accion" id="accion"></td>
                            <td>${usuario.id}</td>
                            <td>${usuario.username}</td>
                            <td>${usuario.role}</td>
                        </tr>
                    `;
                });

            }
        });


    }else if(hash ==="#/centro-costos" ){
        //peticion para cargar centro de costos y anexarlo al main
        document.getElementById("main").appendChild(CostCenter());
        const token = sessionStorage.getItem("auth")

        

        await ajax({
            url: api.CENTRO_COSTO,
            method : 'GET',
            headers : {
                "Authorization":`Bearer ${token}`,
                "Content-Type": "application/json"},
            cbSuccess:(centros)=>{ 
                //console.log(centros)
                const $contenido = document.getElementById("contenido")
                $contenido.innerHTML = '';
                centros.forEach(centro => {
                    //console.log(centro)
                    $contenido.innerHTML +=`
                    <tr>
                            <td><input type="checkbox" name="accion" id="accion"></td>
                            <td>${centro.codigoCC}</td>
                            <td>${centro.nombreCC}</td>
                            <td>${centro.estadoCC ? "Activo"  :"Inactivo"}</td>
                        </tr>
                    `;
                });

            }
        });
    }else if(hash ==="#/crear/centro"){
        let titulo = document.createElement("h1");
            titulo.innerText = "Agregar centro de costos"
            let botones = `<div class="botones">
            <button type="submit" value="crear-centro" class="aceptar" id="btn-crear">Aceptar</button>
            <button class="cancelar" id="btn-cancelar">Cancelar</button>
            </div>`;

            document.getElementById("main").innerHTML = EditarCC();
            document.getElementById("main").insertAdjacentElement("afterbegin",titulo)
            document.getElementById("main").insertAdjacentHTML("beforeend",botones)

            document.addEventListener("click",async(e)=>{
                if(e.target.matches("#btn-crear")){
                    let codigo = document.getElementById("codigo-centro").value,
                    nombre = document.getElementById("nombre-centro").value,
                    estado = document.getElementById("estado-centro").checked;
                    const token = sessionStorage.getItem("auth")
                    if(estado === true){estado = 1;}else{estado = 0;}

                    let datos = {
                        codigoCC : codigo,
                        nombreCC : nombre,
                        estadoCC : estado
                    }
                    // console.log(datos)
                    await ajax({
                        url: api.CENTRO_COSTO,
                        method: 'POST',
                        headers : {
                            "Authorization":`Bearer ${token}`,
                            "Content-Type": "application/json"},
                        body:JSON.stringify(datos),
                        cbSucces: location.reload()
                
                    });
                    
                }
            })


    }
        


    else{
        let modulo = hash.slice(2).toUpperCase();
        d.getElementById("main").innerHTML=`
        <h2>Modulo ${modulo} en proceso de creación. Por favor, tenga paciencia</h2>`

    }

    document.querySelector(".loader").style.display = "none"


    

    /**/

}