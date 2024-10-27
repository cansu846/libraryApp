import React from 'react'
import ExploreTopBooks from './components/ExploreTopBooks'
import Carousel from './components/Carousel'
import { Heros } from './components/Heros'
import { LibraryServices } from './components/LibraryService'
import SearchBooksPage from '../SearchBooksPage/SearchBooksPage'

export default function HomePage() {
    return (
        <div>
            <ExploreTopBooks />
            <Carousel />
            <Heros />
            <LibraryServices />
        
        </div>
    )
}
