export async function servicioTOKEN(){


    //URI
    const URI="https://accounts.spotify.com/api/token"
    //Datos
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=2e720ef69f514fb4a0fa4bbeb6ef7ab3"
    const DATO3="client_id=1f7f0bc52122445ea46f4bbf1c43ba08"

    //peticion
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3
    }


    //fetch
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token;

    return datos



}