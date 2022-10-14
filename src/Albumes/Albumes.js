import { servicioSpoty } from "../services/servicioSpoty.js"
import { servicioTOKEN } from "../services/servicioTOKEN.js"
import { useState, useEffect } from "react"


export function Albumes (){


    //declarando  mi primer useState
    const[canciones,setCanciones]=useState(null)

    //useState para la carga de datos 
    const[carga,setCarga]=useState(true)

    //usando el use efect
    useEffect(function(){
        
        servicioSpoty()
    .then(function(respuesta){
        console.log(respuesta)
        setCanciones(respuesta.tracks)
        setCarga(false)
    })
    console.log(canciones)

    },[])

    if(carga==true){
        return(                       
            <>
                <h1>Estoy Cargando....</h1>
            </>
        )


    }else{

        return(
            <div className="row row-cols-1 row-cols-md-3 g-3">
            <>
                {
                    canciones.map(function(cancion){
                        return(
                            <>
                                <div className="col mt-5 h-100 mx-auto d-block">
                                    <div className="card h-100 ">
                                        <img src={cancion.album.images[0].url} className="img-fluid w-50 p-1 h-100 mx-auto d-block" alt="foto"/> 
                                        <h3 className="img-fluid w-25  p-1 h-25 mx-auto d-block">{cancion.name}</h3>
                                        <audio className="mx-auto d-block"src={cancion.preview_url} controls />                                                                       
                                                                 
                                    </div>
                                </div>
                            </>
                           
                         )
                    })
                }
            </>
            </div>
            
        )
                            
                            
    }


    
}