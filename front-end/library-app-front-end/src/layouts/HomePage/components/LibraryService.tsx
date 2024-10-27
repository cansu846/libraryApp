import { Link } from "react-router-dom";

export const LibraryServices = () => {

//     shadow-lg, Bu sınıf, büyük bir gölge ekleyerek elementin sayfada yukarıda duruyormuş gibi görünmesini sağlar. Bu, bileşenin daha belirgin ve 3 boyutlu görünmesini sağlar.
// col-lg-7, Büyük ekranlarda (large devices - laptoplar gibi) bu sütunun genişliğini 7 sütun olarak ayarlar. Bu, ekranın %7/12'sini kaplar.
// p-3, p (padding) sınıfı, elementin tüm kenarlarına 3 birim dolgu ekler.
// display-4, Bu sınıf, başlık (h1) için büyük bir font boyutu ayarlar. display- sınıfları genellikle başlıkların daha büyük ve dikkat çekici olması için kullanılır.
// d-grid, Flexbox'a alternatif olarak grid düzeni sağlar. İçerideki öğeleri grid yapısı ile hizalar.
// gap-2, Grid yapısındaki öğeler arasında 2 birim boşluk bırakır. Bu, grid elemanları arasındaki boşlukları ayarlar.    
// justify-content-md-start,Orta boyutlu ekranlarda (md) ve üzerindeki ekranlarda içerikleri yatayda sola hizalar.
// mb-lg-3: Sadece büyük ekranlarda alt tarafa 3 birim boşluk ekler. 
// me-md-2: Orta ve daha büyük ekranlarda butonun sağ tarafına 2 birim marjin ekler.
// col-lg-4: Büyük ekranlarda bu sütunun genişliğini 4 sütun olarak ayarlar (ekranın %4/12'sini kaplar).
// offset-lg-1: Büyük ekranlarda bu sütunun sol tarafına 1 sütunluk boşluk ekler. Bu, hizalamada ekstra boşluk bırakır.
return(
        <div className='container my-5'>
            <div className='row p-4 align-items-center border shadow-lg'>
                <div className='col-lg-7 p-3'>
                    <h1 className='display-4 fw-bold'>
                        Can't find what you are looking for?
                    </h1>
                    <p className='lead'>
                        If you cannot find what you are looking for, 
                        send our library admin's a personal message!
                    </p>
                    <div className='d-grid gap-2 justify-content-md-start mb-4 mb-lg-3'>
                        <Link to='/messages' type='button' className='btn main-color btn-lg px-4 me-md-2 fw-bold text-white btn-primary'>
                            Library Services
                        </Link>   
                        
                        <Link className='btn main-color btn-lg btn-primary text-white' to='/login'>
                            Sign up
                        </Link> 
                    

                    </div>
                </div>
                <div className='col-lg-4 offset-lg-1 shadow-lg lost-image'>
                <img
                        src={require('./../../../images/PublicImages/image-3.jpg')}
                        className="img-fluid"
                        alt="book"
                    />
                </div>
            </div>
        </div>
    );
}