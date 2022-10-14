import'./Home.css'
import {SubMenu} from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js'
export function Home(){

    let descripcionBanda="Es una banda alemana de metal industrial formada en 1994 por los músicos Till Lindemann, Richard Z. Kruspe, Oliver Riedel, Paul Landers, Christian Lorenz y Christoph Schneide,​ Su música se basa en una corriente surgida en su país en los años 1990 llamada Neue Deutsche Härte del que son su exponente más popular y al que también pertenecen, entre otros, Oomph! y Die Krupps. Ellos mismos han denominado en alguna ocasión esta mezcla con el apelativo de Tanzmetall («metal de baile»)"

    return(
        <>
            <div className="banner">

            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Ramstanin</h1>
                        <p class="text-center">{descripcionBanda}</p>
                    </div>
                </div>
            </div> 
            <div>
                <SubMenu></SubMenu>    
            </div> 
            <div>
                <Footer></Footer>    
            </div>   
        </>
    )  
}