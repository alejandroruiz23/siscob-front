export function Login(){

    return `
<form class="login" action="#/">

        <div class="title__index">
            <h1>SISCOB</h1>
            <h2>Sistema contable básico</h2>
            <h3>Ingrese los datos para conectarse</h3>
        </div>

        <div class="line-inputs">
            <label for="user" class="label">Usuario</label>
            <input name="user" type="text" class="data-user">
        </div>

        <div class="line-inputs">
            <label for="password" class="label">Contraseña</label>
            <input name="password" type="password" class="data-pass">
        </div>

        <div class="line-botones">
            <Button type="submit" value="Ingresar" class="button">Ingresar</Button>
        </div>

    </form>
    `;
}