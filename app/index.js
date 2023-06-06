import { App } from "./App.js";
import { Login } from "./components/Login.js";
import { login } from "./helpers/login.js";
import { page } from "./helpers/page.js";


    //cargo los componentes
    document.addEventListener("DOMContentLoaded", App);
    window.addEventListener("hashchange",App);

