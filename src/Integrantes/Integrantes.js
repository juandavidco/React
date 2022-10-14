import'./Integrantes.css'
import 'animate.css';
import WOW from 'wowjs';

import { useEffect } from 'react';




export function Integrantes (){

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])
    
    return(
        <>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/emigrate-el-proyecto-de-richard-z-kruspe-rammstein-publica-el-video-de-freeze-my-mind.jpg?alt=media&token=6e442008-bb04-4e9a-9302-4a2af915d18d" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__fadeInLeft" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__fadeInTopLeft'>
                    <h2>Damon Albarn</h2>
                    <h3>Vocalista</h3>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-end animate__animated animate__fadeInTopLeft'>
                    <h2>Jamie Hewlett</h2>
                    <h3>Historietista</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/till-lindemann.gif?alt=media&token=b1548cfb-7cac-44d0-96ae-ac718d39699d" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__fadeInLeft" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
            </div>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/band.jpg?alt=media&token=810c4d29-a4c4-4257-8d24-e8fa79329f0f" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__fadeInLeft" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__fadeInTopLeft'>
                    <h2>Mike Smith</h2>
                    <h3>Musico</h3>
                </div>
            </div>
            
                
            

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                             Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
    

    
}