import { Routes, Route } from 'react-router-dom'
import App from './App'
import Services from './components/Services/Services'
import Navbar from './components/Navbar/Navbar'
import AppStore from './components/AppStore/AppStore'
import Testimonials from './components/Testimonials/Testimonials'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import { CartProvider } from './contexts/CartContext'
import CartPage from './components/Cart/CartPage';


const Routing = () => {
    return (
        <CartProvider>
            <Navbar />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/services' element={<Services />} />

                <Route path='/app-store' element={<AppStore />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
            <Footer />

        </CartProvider>
    )
}


export default Routing 