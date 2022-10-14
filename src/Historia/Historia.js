import'./Historia.css'
import{ Carousel } from '../Carousel/Carousel.js'
import { Integrantes } from '../Integrantes/Integrantes.js'
export function Historia(){

    return(
        <>
           <Carousel></Carousel>
           <div className='container'>
                <Integrantes></Integrantes>                
           </div>
        </>
    )
}