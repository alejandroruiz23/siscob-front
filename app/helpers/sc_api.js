const NAME = "localhost:8080",
DOMAIN = `http://${NAME}`,
SITE = `${DOMAIN}`,
CENTRO_COSTO=`${SITE}/modulo/centro-costo`,
AUTH_AUTHENTICATE = `${SITE}/api/v1/auth/authenticate`,
USERS = `${SITE}/modulo/usuarios`;


export default{
    NAME,
    DOMAIN,
    SITE,
    CENTRO_COSTO,
    AUTH_AUTHENTICATE,
    USERS
}