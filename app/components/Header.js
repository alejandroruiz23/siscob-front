export function Header(){
    const $header = document.createElement("header");
    $header.innerHTML=`
    <div class="icon_menu">
            <i class='bx bx-menu' id="btn-open"></i>
        </div>

        <a href="" class="logout" id="logout">
            <div class="icon_logout">
                <i class='bx bx-log-out-circle' title="Salir" id="logout"></i>           
            </div>
        </a>   
    `;

    return $header;
}