import { Link } from "react-router-dom";

export const Heros = () => {

//     d-none: Bu sınıf, öğeyi tamamen gizler (display: none). Yani, bu div mobil ekranlar için görünmez.
// d-lg-block: Bu sınıf, büyük ekranlarda (lg ve üzeri) öğeyi block (görünür) hale getirir. Bu yüzden bu div yalnızca büyük ekranlarda görünür.
// lead, Bootstrap'ta lead sınıfı, metni biraz büyüterek daha belirgin hale getirir. Genellikle açıklama metinlerinde kullanılır.
// d-lg-none, Bu sınıf, büyük ekranlarda (lg) öğeyi gizler, yani mobil ekranlar için kullanılmak üzere bu div büyük ekranlarda görünmez hale gelir.
    return (
        <div>
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-left'>
                        <img
                        src={require('./../../../images/PublicImages/image-1.jpg')}
                        className="img-fluid"
                        alt="book"
                    />
                        </div>
                    </div>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>What have you been reading?</h1>
                            <p className='lead'>
                                The library team would love to know what you have been reading.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                        
                                <Link type='button' className='btn main-color btn-lg btn-primary text-white m-3'
                                    to='search'>Explore top books </Link>
                                   <br />
                                
                                <Link className='btn main-color btn-lg btn-primary text-white ms-3' to='/login'>Sign up</Link>
                            
                        </div>
                    </div>
                </div>

                <div className='row g-0'>
                    <div className='col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                Try to check in daily as our collection is always changing! 
                                We work nonstop to provide the most accurate book selection possible 
                                for our Luv 2 Read students! We are diligent about our book selection 
                                and our books are always going to be our 
                                top priority.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'>
                        <img
                        src={require('./../../../images/PublicImages/image-4.jpg')}
                        className="img-fluid"
                        alt="book"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Heros */}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>What have you been reading?</h1>
                            <p className='lead'>
                                The library team would love to know what you have been reading.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                        
                                <Link type='button' className='btn main-color btn-lg text-white'
                                    to='search'>Explore top books</Link>
                                
                                <Link className='btn main-color btn-lg btn-primary text-white' to='/login'>Sign up</Link>
                        
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='col-image-right'></div>
                        <div className='mt-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                Try to check in daily as our collection is always changing! 
                                We work nonstop to provide the most accurate book selection possible 
                                for our Luv 2 Read students! We are diligent about our book selection 
                                and our books are always going to be our 
                                top priority.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}