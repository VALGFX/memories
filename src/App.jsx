import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Orders from "./pages/Orders.jsx";
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShopContextProvider from "./context/ShopContext.jsx";


const App = () => {
    return (
        <ShopContextProvider>
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <ToastContainer />
            <Navbar />
            <SearchBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/order" element={<Orders />} />
                {/* Redirect to Home for any other path */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
        </ShopContextProvider>
    );
}

export default App;
