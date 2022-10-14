export function Musicos(){

    //un arreglo de objetos es formato comun al consumir un api
    let musicos=[
        {
            nombre:"Till Lindemann",
            url:"https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/rammstein-portada.webp?alt=media&token=63a48741-6147-4ac3-9fdc-c87c0c0f8d3f",
        },
        {
            nombre:"Oliver Riedel",
            rol:"2005-2006",
            url:"https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/rammstein-3.png?alt=media&token=efb1058f-9e73-4256-b405-c5eec80fda29"


        },
        {
            nombre:"Richard Z. Kruspe",
            rol:"2020-2022",
            url:"https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/concierto-rammstein-cdmx-2022-02.webp?alt=media&token=67b75692-d892-4022-836f-6df0174868a3"

        },
        {
            nombre:"Christoph Schneider",
            rol:"2020-2022",
            url:"https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/rammstein-foro-sol.jpg?alt=media&token=8928460e-4b96-4103-9b06-45d552f9ce20"

        }
    ]

        let conciertosMemorables=[
            {
                fecha:"1999-2000",
                pais:"Alemania",
                descripcion:"En 1999 Rammstein obtuvo su primera nominación a los premios Grammy por «Du hast» y su segundo premio ECHO, esta vez por ser el grupo alemán más famoso en el extranjero . En agosto publicaron un doble álbum llamado Live aus Berlin, grabado en vivo el 22 y 23 de agosto de 1998 en el Volkspark Wuhlheide de Berlín. Los conciertos reunieron a 17 000 espectadores cada uno, la mayor cifra de afluencia a una actuación de Rammstein hasta la fecha.",
                foto:"https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/rammstein%20concierto%201.gif?alt=media&token=cf1b7e86-6703-45cd-b25d-0921c3170ec3",               

            },
            {
                fecha:"2001-2003",
                pais:"Alemania",
                descripcion:"En 2001, cuatro años después de su último disco de estudio, estrenaron contrato discográfico con Universal Music, al desligarse Motor Music de dicho consorcio. Con la multinacional editaron Mutter, disco que hizo a Rammstein alcanzar las mejores cifras de ventas de toda su carrera al lograr la categoría de doble platino.",
                foto:"https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/concierto2.gif?alt=media&token=8961db7a-59f9-455c-9579-73cbd451979e",               

            },

            {
                fecha:"2004-2005",
                pais:"Europa",
                descripcion:"En 2004 comienza en Málaga la grabación del cuarto álbum de estudio, que lleva por título Reise, Reise. El primer sencillo, «Mein Teil», recibió una nueva nominación a los premios Grammy. Al lanzamiento de Reise, Reise le sigue una larga gira titulada Ahoi Tour, por el continente europeo",
                foto:"https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/concierto%203.gif?alt=media&token=1cc8aa2b-d8ce-4a95-9d16-0d918162109f",               

            },

            {
                fecha:"2022 ",
                pais:"Europa",
                descripcion:"Para la gira LIFAD 2009-2010, el espectáculo pirotécnico recobró su fuerza, con nuevos efectos. En la base y techo del escenario hay lanzallamas. En «Benzin», un supuesto fanático se sube al escenario y es prendido en llamas. Para «Ich tu dir weh», Flake se mete en una bañera y Till simula arrojar metal líquido sobre él. En «Engel», Till usa un par de alas de aluminio que lanzan llamas.",
                foto:"https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/concieto%204.gif?alt=media&token=d5e69a8e-c137-4a6a-8d41-47f1a70caa69",               

            },

            {
                fecha:"2022",
                pais:"North American Stadium Tour 2022 ",
                descripcion:"En las últimas giras del grupo, la pirotecnia ha pasado a un segundo plano, poniéndose especial énfasis en la vertiente cómica de los espectáculos. Por ejemplo, en «Mein Teil» Lindemann «cocina» a «Flake» Lorenz en una olla gigante con un gran lanzallamas y le persigue por todo el escenario. Otro gag típico de los conciertos de Rammstein es subir a un miembro de la banda sobre un bote inflable y que este «navegue» sobre el público.",
                foto:"https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/concierto%205.gif?alt=media&token=233740b0-dda6-43cd-8d23-7c81a3090856",               

            },

        ]


    //mapeando un arreglo para hacer render 

    return(
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {
            musicos.map(function(musico){
                return(
                    <>
                    <div className="col mt-3">
                        <div className="card h-100">
                            <img src={musico.url} className="img-fluid w-100 h-100" alt="foto"/>
                            <h1 className="text-center">{musico.nombre}</h1>
                        </div>
                    </div>
                    </>
                )
            })
            }
            {
            conciertosMemorables.map(function(conciertoMemorable){
                return(
                    <>
                    <div className="col mt-3">
                        <div className="card h-100">
                            <img src={conciertoMemorable.foto} className="img-fluid w-100 h-100" alt="foto"/>
                            <h1 className="text-center">{conciertoMemorable.fecha}</h1>
                        </div>
                    </div>
                    </>
                )
            })
            }
        </div>

    )


}