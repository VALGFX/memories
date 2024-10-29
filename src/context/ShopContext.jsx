import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/assets"; // Verifică acest import
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Crearea contextului
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'MDL';
    const delivery_fee = 3;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    // Funcția pentru a adăuga un articol în coș
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Selectează Mărimea Produsului');
            return;
        }
        let cartData = structuredClone(cartItems); // Clonare obiect

        if (cartData[itemId]) {
            if (cartData[itemId].sizes[size]) {
                cartData[itemId].sizes[size] += 1;
            } else {
                cartData[itemId].sizes[size] = 1;
            }
        } else {
            cartData[itemId] = { sizes: { [size]: 1 }, price: products.find(product => product._id === itemId).price, image: products.find(product => product._id === itemId).image }; // Asigură-te că obții prețul și imaginea
        }
        setCartItems(cartData);
        toast.success('Produsul a fost adăugat în coș!');
    };

    // Funcția pentru a elimina un articol din coș
    const removeFromCart = (itemId, size) => {
        let cartData = structuredClone(cartItems); // Clonare obiect

        if (cartData[itemId] && cartData[itemId].sizes[size]) {
            cartData[itemId].sizes[size] -= 1;

            if (cartData[itemId].sizes[size] <= 0) {
                delete cartData[itemId].sizes[size];
            }
            if (Object.keys(cartData[itemId].sizes).length === 0) {
                delete cartData[itemId];
            }
        }
        setCartItems(cartData);
        toast.info('Produsul a fost eliminat din coș!');
    };

    // Funcția pentru a obține numărul total de articole din coș
    const getCartCount = () => {
        let count = 0; // Asigură-te că variabila este inițializată corect
        for (const item in cartItems) {
            if (cartItems[item]) {
                for (const size in cartItems[item].sizes) {
                    count += cartItems[item].sizes[size];
                }
            }
        }
        return count;
    };

    // Funcția pentru a actualiza cantitatea unui articol din coș
    const updateCartItemQuantity = (itemId, size, quantity) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };
            if (quantity <= 0) {
                delete updatedItems[itemId].sizes[size]; // Elimină mărimea dacă cantitatea este 0
                if (Object.keys(updatedItems[itemId].sizes).length === 0) {
                    delete updatedItems[itemId]; // Elimină produsul dacă nu mai are mărimi
                }
            } else {
                updatedItems[itemId].sizes[size] = quantity; // Actualizează cantitatea
            }
            return updatedItems;
        });
    };

    // Funcția pentru a obține totalul coșului
    const getTotal = () => {
        return Object.keys(cartItems).reduce((total, itemId) => {
            const itemPrice = cartItems[itemId].price; // Prețul produsului
            const itemCount = Object.keys(cartItems[itemId].sizes).reduce((count, size) => count + cartItems[itemId].sizes[size], 0);
            return total + itemPrice * itemCount;
        }, 0);
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        showSearch,
        setShowSearch,
        setSearch,
        cartItems,
        addToCart,
        removeFromCart, // Adăugăm metoda de eliminare
        getCartCount,
        updateCartItemQuantity, // Adăugăm metoda de actualizare a cantității
        getTotal, // Adăugăm metoda pentru a obține totalul
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children} {/* Folosește props.children */}
        </ShopContext.Provider>
    );
};

// Definirea PropTypes
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Adaugă validarea pentru children
};

export default ShopContextProvider;
