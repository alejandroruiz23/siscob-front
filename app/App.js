
import { Header } from "./components/Header.js";
import { Menu } from "./components/Menu.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { menuCC } from "./helpers/centroCostos.js";
import { Login } from "./components/Login.js";
import { login } from "./helpers/login.js";
import { page } from "./helpers/page.js";




export function App(){
    const d = document,
    $root = d.getElementById("root");

    $root.innerHTML = null;

    if(sessionStorage.getItem("auth")===null){
        window.location.replace("#/login")
    document.getElementById("root").innerHTML = Login()
    login();
    }else{
    $root.appendChild(Header());
    $root.appendChild(Menu());
    $root.appendChild(Main());
    $root.appendChild(Loader());
    page()
    Router();
    menuCC();
    
    }
    
    }