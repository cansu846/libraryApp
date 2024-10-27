import React from 'react'
import { Link } from 'react-router-dom';
import BookModel from '../../../models/BookModel';


// <{book: BookModel}>: Bileşene geçirilmesi beklenen props'un türünü tanımlar.
// Bu durumda, bileşenin props'unda bir book özelliği bekleniyor ve bu book özelliğinin türü BookModel olmalıdır

const ReturnBook: React.FC<{ book: BookModel }> = (props) => {
    //     col-xs-6: Bu sınıf, en küçük ekran boyutunda (örneğin, telefon ekranları) sütunun ekranın yarısını kaplaması gerektiğini belirtir (%50 genişlik).
    // col-sm-6: Küçük ekranlarda (small devices - tabletler gibi) sütunun yine ekranın yarısını kaplamasını sağlar.
    // col-md-4: Orta boyutlu ekranlarda (medium devices - küçük dizüstü bilgisayarlar) sütunun ekranın 4'te birini kaplamasını sağlar (%33 genişlik).
    // col-lg-3: Büyük ekranlarda (large devices - geniş ekranlı bilgisayarlar) sütunun ekranın 3'te birini kaplamasını sağlar (%25 genişlik).
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                {props.book.img ?

                    <img
                        src={props.book.img}
                        width='151'
                        height='233'
                        alt="book"
                    />
                    :
                    <img
                        src={require('./../../../images/BooksImages/book-luv2code-1000.png')}
                        width='151'
                        height='233'
                        alt="book"
                    />
                }

                <h6 className='mt-2'></h6>
                <p></p>
                <Link className='btn btn-primary main-color text-white' to={"#"}>Reserve</Link>
            </div>
        </div>
    );
}

export default ReturnBook;