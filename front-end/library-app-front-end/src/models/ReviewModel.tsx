class Review{
    id: number;
    userEmail: string;
    date: Date;
    bookId: number;
    rating: number;
    description: string;

    constructor(id: number, 
        userEmail: string, 
        date: Date, 
        bookId: number, 
        rating: number,
        description: string){
            this.id=id;
            this.userEmail=userEmail;
            this.date=date;
            this.bookId=bookId;
            this.description=description;
            this.rating=rating;
    }

}

export default Review;