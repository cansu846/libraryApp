import { Link } from "react-router-dom";

export const Footer = () => {
//     flex-wrap, Flex öğelerinin, satırda yeterli alan kalmadığında bir sonraki satıra taşınmasını sağlar. Bu sayede içerikler dar ekranlarda daha iyi görünür.
// justify-content-between, Flexbox düzeninde öğeleri yatayda iki uç noktaya dağıtır. Yani, bir öğe sola, diğer öğe sağa hizalanır. Bu sayede footer içindeki öğeler arasında boşluk bırakılır.
    return (
        <div className='main-color '>
            <footer className='container d-flex flex-wrap 
                justify-content-between align-items-center py-5 main-color border-top'>
                 
                <p className='col-md-4 mb-0 text-dark'>© Example Library App, Inc</p>
                <ul className='nav navbar-dark col-md-4 justify-content-end'>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-link px-2 text-dark'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/search' className='nav-link px-2 text-dark'>
                            Search Books
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}