export function page(){

    window.addEventListener("click",(e)=>{
        
        if (e.target.matches("#logout")) {
            e.preventDefault();
            sessionStorage.removeItem("auth")
            location.reload()
        }
        
        
    });

//SE EJECUTA PARA DARLE FUNCIONALIDAD AL MENU LATERAL PRINCIPAL



//ejecutar en evento clic

const side_menu = document.querySelector(".menu_side"),
btnOpen = document.getElementById("btn-open"),
body = document.getElementById("root");


//Mostrar ocultar menu
//toggle para aplicar al icono 

function openCloseMenu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_side_move");

}

//ejecuto el evento en click
btnOpen.addEventListener("click",openCloseMenu);

//si el ancho es menor a 760px oculta el menu al recargar la pagina

//menu responsive

window.addEventListener("resize",function(){
    if(this.window.innerWidth > 760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu_side_move");
    }
    if(window.innerWidth < 760){
        body.classList.add("body_move");
        side_menu.classList.add("menu_side_move");
    }


});

}



