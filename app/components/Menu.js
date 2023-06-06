import api from "../helpers/sc_api.js";

export function Menu() {
  const $menu = document.createElement("aside");
  $menu.classList.add("menu_side");

  //cargo el contenido del menu lateral (con muchas mejoras por hacer)
  $menu.innerHTML = `
        <div class="name_page">
            <i class='bx bxs-business'></i>
            <h4>SISCOB</h4>
        </div>
        <div class="options_menu">
            <a href="#/documentos">
                <div class="option">
                    <i class='bx bx-file-blank' title="Documentos"></i>
                    <h4>Documentos</h4>
                </div>
            </a>
            <a href="#/reportes">
                <div class="option">
                    <i class='bx bxs-report' title="Reportes"></i>
                    <h4>Reportes</h4>
                </div>
            </a>
            <div class="option">
                <i class='bx bx-dots-horizontal-rounded'></i>
                <h3>Configuración</h3>
            </div>
            <a href="#/usuarios">
                <div class="option">
                    <i class='bx bx-user' title="Usuarios"></i>
                    <h4>Usuarios</h4>
                </div>
            </a>
            <a href="#/comprobantes">
                <div class="option">
                    <i class='bx bx-receipt' title="Comprobantes"></i>
                    <h4>Comprobantes</h4>
                </div>
            </a>
            <a href="#/terceros">
                <div class="option">
                    <i class='bx bx-group' title="Terceros"></i>
                    <h4>Terceros</h4>
                </div>
            </a>
            <a href="#/plan-cuentas">
                <div class="option">
                    <i class='bx bx-spreadsheet' title="Plan de cuentas"></i>
                    <h4>Plan de cuentas</h4>
                </div>
            </a>
            <a href="#/centro-costos">
                <div class="option">
                    <i class='bx bxs-folder-open' title="Centro de costos"></i>
                    <h4>Centro de costos</h4>
                </div>
            </a>
            <a href="#/empresas">
                <div class="option">
                    <i class='bx bxs-factory' title="Empresas"></i>
                    <h4>Empresas</h4>
                </div>
            </a>
            
        </div>
    `;
  
  return $menu;
}
