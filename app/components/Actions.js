export function Actions(){
    
    //al iniciio de acciones si quiero ponerle checkbox para seleccionar todo

    // <div id="checkAll">
    //                 <input type="checkbox" name="selectAll" id="selectAll" title="Seleccionar todo"> Seleccionar todo
    //             </div>
    return`
    <div class="acciones">
                
                
                    
                    <a href="#/agregar" class="acciones" id="btn-agregar">
                    <div>
                    <i class='bx bx-plus-circle' title="Agregar" id="btn-agregar"></i>
                    </div>
                    </a>
                
                    <a href="#/editar" class="acciones" id="btn-editar">
                    <div>
                        <i class='bx bx-edit' title="Editar" id="btn-editar"></i>
                        </div>
                    </a>
                
            
            <a href="#/borrar" class="acciones" id="btn-borrar">
                <div>
                    <i class='bx bxs-trash' title="Eliminar" id="btn-borrar"></i>
                    
                </div>
            </a>

            <a href="/exportar" class="acciones">
                <div>
                    <i class='bx bxs-file-export' title="Exportar"></i>
                    
                </div>
            </a>
        </div>
    `;
}