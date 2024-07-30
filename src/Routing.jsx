import {Routes, Route} from 'react-router-dom'
import App from './App'
import Services from './components/Services/Services'
import Navbar from './components/Navbar/Navbar'


const Routing = () => {
    return(
        <>
            <Navbar /> 
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/services' element={<Services />} />    
            </Routes>
        </>
    )
}


export default Routing 