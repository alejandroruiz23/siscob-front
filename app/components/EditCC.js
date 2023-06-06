export function EditarCC(){
    return`
    <div class="">
    <div id="formulario">
        <form action="#" id="editar-centro">
            <div id="texto-form">
                <label for="codigo-centro">Código: <input id="codigo-centro" type="text" placeholder="código"></label>
                <label for="nombre-centro">Nombre: <input id="nombre-centro" type="text" placeholder="nombre" ></label>
                Estado <input id="estado-centro" type="checkbox" name="estado" placeholder="estado">

            </div>
            
            
        </form>
    </div>
</div>
    `;
}