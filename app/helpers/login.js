import { ajax } from "./ajax.js";
import api from "../helpers/sc_api.js"
import { Loader } from "../components/Loader.js";

export function login(){
    const form = document.querySelector(".login");
    Loader();
    


    form.addEventListener("submit",async (e)=>{
        e.preventDefault();
        
        const usuario = document.querySelector(".data-user"),
        contrasena = document.querySelector(".data-pass");
        // console.log("Apretaste el boton del form con usuario: "+usuario+" y contraseña: "+contrasena)
        let data = {
            email:usuario.value,
            contrasena : contrasena.value
        }
        
        //primero valido campos llenos
        if(usuario.value === ''){
            alert(`El campo '${usuario.previousElementSibling.innerText}' está vacio`)
        }else if(contrasena.value ===''){
            alert(`El campo '${contrasena.previousElementSibling.innerText}' está vacio`)
        }else{



        await fetch(api.AUTH_AUTHENTICATE,{
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res=>res.ok?res.json():Promise.reject(res))
        .then(json=>{
            // console.log(json.token)
            
            sessionStorage.setItem("auth",json.token)
            window.location.href = "#/"
            location.reload();
            
        })
        .catch(err=>{
            console.log(err)
            // console.log(TypeError)

            if(err.status === 403){
                alert("Acceso inválido, el usuario o contraseña ingresados no son correctos")
                console.log(err)
            }else if(err.status === 500){
                alert("Hay un problema de conexión con la base de datos")
                
            }else if(TypeError){
                alert("Hay un problema de conexión con la base de datos. Por favor, espere un momento y vuelva a intentar")
            }

            });

            
        }
        

        
        
            
    });
    

    


}