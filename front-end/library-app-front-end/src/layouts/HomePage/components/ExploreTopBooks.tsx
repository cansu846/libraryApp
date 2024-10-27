import { Link } from "react-router-dom";

export default function ExploreTopBooks() {
    return (
        // d-flex, Elementi flex konteyner yapar ve içerideki öğeleri esnek bir düzende hizalar.
        // justify-content-center, Flex öğeleri yatayda ortalar.
        // align-items-center, flex öğeleri dikeyde ortalar
        // display-5, h1 etiketine göre font büyüklüğü verir
        // fw-bold, yazı kalınlıgı boyutu
        // col-md-8, 12 kolonluk gridte, 8 lik kolon kaplar
        // fs-4, yazı boyutu 
        <div>
            <div className='p-5 mb-4 bg-dark header'>
                <div className='container-fluid py-5 text-white 
                d-flex justify-content-center align-items-center'>
                    <div>
                        <h1 className='display-5 fw-bold'>Find your next adventure</h1>
                        <p className='col-md-8 fs-4'>Where would you like to go next?</p>
                        <Link type='button' className='btn main-color btn-lg text-white btn-primary' to="/search">
                        Explore top books</Link> 
                    </div>
                </div>
            </div>
        </div>
    );
}