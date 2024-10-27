import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BookModel from '../../../models/BookModel';
import ReturnBook from './ReturnBook';
import SpringLoading from '../../Utilities/SpinnerLoading';

export default function Carousel() {
//     d-none: Bu sınıf, bileşeni tüm ekran boyutlarında gizler.
//     d-lg-block: Bu sınıf, bileşeni yalnızca geniş (large) ekranlarda blok şeklinde görünür hale getirir.
//     Yani bu öğe, mobil ve tablet ekranlarda görünmezken, geniş ekranlı cihazlarda (laptop, masaüstü gibi) görüntülenir.
//     d-lg-none: Bu sınıf, öğeyi sadece geniş ekranlarda gizler.
//  Yani, d-lg-none sınıfı ile bu öğe sadece geniş ekranlarda görünmez, diğer küçük ekranlarda görünür olur.

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(false);

    useEffect(()=>{
        const fetchBooks = async()=>{
            const baseUrl: string = "http://localhost:8080/api/books";
            const url: string = `${baseUrl}?page=0&&size=9`;
            //const response = await fetch(url);
            const response = await fetch('/api/books?page=0&&size=9');

            if(!response.ok){
                throw new Error("Something went wrong");
            }
            console.log("CArosel response: " + response)
            const responseJson = await response.json();
            const responseData = responseJson._embedded.books;

            console.log("Fetched Data:", responseData); 

            const loadedBooks: BookModel[] = [];
            for( const key in responseData){
                loadedBooks.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    author: responseData[key].author,
                    description: responseData[key].description,
                    copies: responseData[key].copies,
                    copiesAvailable: responseData[key].copiesAvailable,
                    category: responseData[key].category,
                    img: responseData[key].img,
                });
            }

            setBooks(loadedBooks);
            setIsLoading(false);

        };

        fetchBooks().catch((error: any)=>{
            setIsLoading(false);
            setHttpError(true);
        });

        
    },[]);

    // Log the books state whenever it changes
    useEffect(() => {
        console.log(books);
    }, [books]);

    if(isLoading){
        return(
            <div className='container m-5'>
                <SpringLoading/>
            </div>
        )
    }
    if(httpError){
        return(
        <div className='container m-5'>
            <p>{httpError}</p>
        </div>)
    }
  return (
    <div>
       <div className='container mt-5' style={{ height: 550 }}>
            <div className='homepage-carousel-title'>
                <h3>Find your next "I stayed up too late reading" book.</h3>
            </div>
            <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 
                d-none d-lg-block' data-bs-interval='false'>

                {/* Desktop */}
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            {/* {books.slice(0, 3).map(book => (
                                <ReturnBook book={book} key ={book.id} />
                            ))} */}
                            {/* <img src={require("./../../images/BooksImages/new-book-1.png")} style={{height:300, width:200}} alt="..."/> */}
                            {/* <ReturnBook/>
                            <ReturnBook/>
                            <ReturnBook/> */}
                                
                            {
                              

                                books.slice(0,3).map(book =>(
                                    <ReturnBook book={book} key={book.id} />
                                ))
                            }

                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            {/* {books.slice(3, 6).map(book => (
                                <ReturnBook book={book} key ={book.id} />
                            ))} */}
                             {/* <img src={require("./../../images/BooksImages/book-luv2code-1000.png")} style={{height:300, width:200}} alt="..."></img> */}
                             {/* <ReturnBook/> */}
                             {
                                books.slice(3,6).map(book =>(
                                    <ReturnBook book={book} key={book.id} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            {/* {books.slice(6, 9).map(book => (
                                <ReturnBook book={book} key ={book.id} />
                            ))} */}
                             {/* <img src={require("./../../images/BooksImages/new-book-2.png")} style={{height:300, width:200}} alt="..."></img> */}
                             {/* <ReturnBook/> */}
                             {
                                books.slice(6,9).map(book =>(
                                    <ReturnBook book={book} key={book.id} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <button className='carousel-control-prev' type='button'
                    data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button'
                    data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>

            {/* Mobile */}
            <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                    {/* <ReturnBook book={books[7]} key={books[7].id}/> */}
                    <ReturnBook book={books[7]} key={books[7].id}/>
                </div>
            </div>
           
            <div className='homepage-carousel-title mt-3 d-flex justify-content-center'>
                <Link className='btn btn-outline-secondary btn-lg' to='/search'>View More</Link>
            </div>
        </div>
    </div>
  )
}
