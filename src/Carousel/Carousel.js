export function Carousel(){
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/16648398882428.jpg?alt=media&token=6c3c4a1f-b3c2-4b30-b958-aabf86a7114f" class="d-block w-100" className="w-100" height="800" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/Rammstein.jpeg?alt=media&token=fb90fb34-2d95-4679-9e4a-3785df025d10" class="d-block w-100" className="w-100" height="800" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/tienda-final-8b7dc.appspot.com/o/band.jpg?alt=media&token=810c4d29-a4c4-4257-8d24-e8fa79329f0f" class="d-block w-100" className="w-100" height="800" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </>
    )
}