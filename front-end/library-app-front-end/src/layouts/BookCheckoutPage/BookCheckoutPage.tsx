import React, { useEffect, useState } from 'react'
import BookModel from '../../models/BookModel';
import ReviewModel from '../../models/ReviewModel';
import SpinnerLoading from '../Utilities/SpinnerLoading';
import { StarsReview } from '../Utilities/StarsReview';
import { LatestReviews } from './LastReviews';
import { CheckoutAndReviewBox } from './CheckoutandReviewBox';

export default function BookCheckoutPage() {

  const [book, setBook] = useState<BookModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  // Review State
  const [reviews, setReviews] = useState<ReviewModel[]>([])
  const [totalStars, setTotalStars] = useState(0);
  const [isLoadingReview, setIsLoadingReview] = useState(true);

  const [isReviewLeft, setIsReviewLeft] = useState(false);
  const [isLoadingUserReview, setIsLoadingUserReview] = useState(true);

  //url döner
  const bookId = (window.location.pathname).split("/")[2];

  useEffect(() => {
    const fetchBook = async () => {
      const baseUrl: string = `http://localhost:8080/api/books/${bookId}`;
      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();

      const loadedBook: BookModel = {
        id: responseJson.id,
        title: responseJson.title,
        author: responseJson.author,
        description: responseJson.description,
        copies: responseJson.copies,
        copiesAvailable: responseJson.copiesAvailable,
        category: responseJson.category,
        img: responseJson.img,
      }

      setBook(loadedBook);
      setIsLoading(false);
    }

    fetchBook().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

  }, []);

  if (isLoading) {
    return (
      <div>
        <SpinnerLoading />
      </div>
    )

  }
  if (httpError) {
    return (
      <div className='container m-5'>
        <p>{httpError}</p>
      </div>
    )
  }

  return (
    <div>
      <div className='container d-none d-lg-block'>
        <div className='row mt-5'>
          <div className='col-sm-2 col-md-2'>
            {book?.img ?
              <img src={book?.img} width='226' height='349' alt='Book' />
              :
              <img src={require('./../../images/BooksImages/book-luv2code-1000.png')} width='226'
                height='349' alt='Book' />
            }
          </div>
          <div className='col-4 col-md-4 container'>
            <div className='ml-2'>
              <h2>{book?.title}</h2>
              <h5 className='text-primary'>{book?.author}</h5>
              <p className='lead'>{book?.description}</p>
              <StarsReview rating={4} size={32} />
            </div>
          </div>
          <CheckoutAndReviewBox book={book} mobile={false} currentLoansCount={0} isAuthenticated={undefined} isCheckedOut={false} checkoutBook={undefined} isReviewLeft={false} submitReview={undefined} />
        </div>
        <hr />
        <LatestReviews reviews={reviews} bookId={book?.id} mobile={false} />
      </div>
      <div className='container d-lg-none mt-5'>
        <div className='d-flex justify-content-center alighn-items-center'>
          {book?.img ?
            <img src={book?.img} width='226' height='349' alt='Book' />
            :
            <img src={require('./../../images/BooksImages/book-luv2code-1000.png')} width='226'
              height='349' alt='Book' />
          }
        </div>
        <div className='mt-4'>
          <div className='ml-2'>
            <h2>{book?.title}</h2>
            <h5 className='text-primary'>{book?.author}</h5>
            <p className='lead'>{book?.description}</p>
            <StarsReview rating={2} size={32} />
          </div>
        </div>
        <CheckoutAndReviewBox book={book} mobile={true} currentLoansCount={0} isAuthenticated={undefined} isCheckedOut={false} checkoutBook={undefined} isReviewLeft={false} submitReview={undefined}/>
                <hr />
                <LatestReviews reviews={reviews} bookId={book?.id} mobile={true} />
      </div>
    </div>
  )
}
