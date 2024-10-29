import React, {useContext, useState} from "react";
import {ShopContext} from "../context/ShopContext";
import {useNavigate} from "react-router-dom";
import Title from "../components/Title.jsx";

const Cart = () => {
    const {cartItems, removeFromCart, updateCartItemQuantity, products} = useContext(ShopContext);
    const [promoCode, setPromoCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const navigate = useNavigate();

    // Fetch product details
    const getProductDetails = (itemId) => products.find((product) => product._id === itemId);

    // Calculate the cart total before discount
    const getCartTotal = () => {
        return Object.keys(cartItems).reduce((total, itemId) => {
            const product = getProductDetails(itemId);
            const itemTotal = Object.keys(cartItems[itemId].sizes).reduce((sizeTotal, size) => {
                const quantity = cartItems[itemId].sizes[size];
                return sizeTotal + product.price * quantity;
            }, 0);
            return total + itemTotal;
        }, 0);
    };

    // Handle checkout
    const handleCheckout = () => {
        navigate("/place-order");
    };

    return (
        <div className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
            {/* Product List on the Left */}
            <div className="lg:w-2/3">
                <div className="text-2xl font-semibold mb-4">
                    <Title text1={'Coș de'} text2={'Cumpărături'}/>
                </div>
                {Object.keys(cartItems).length === 0 ? (
                    <p className="text-gray-500">Coșul este gol.</p>
                ) : (
                    <div>
                        {Object.keys(cartItems).map((itemId) => {
                            const product = getProductDetails(itemId);
                            return (
                                <div key={itemId} className="border-b border-gray-300 py-4 flex">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-24 h-24 object-cover mr-4"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium text-lg">{product.name}</h3>
                                        {Object.keys(cartItems[itemId].sizes).map((size) => (
                                            <div key={size} className="flex justify-between items-center mt-2">
                                                <p>Mărime: {size}</p>
                                                <div className="flex items-center">
                                                    <button
                                                        onClick={() => updateCartItemQuantity(itemId, size, cartItems[itemId].sizes[size] - 1)}
                                                        className="bg-gray-300 hover:bg-gray-400 rounded px-2"
                                                        disabled={cartItems[itemId].sizes[size] <= 1}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="mx-2">{cartItems[itemId].sizes[size]}</span>
                                                    <button
                                                        onClick={() => updateCartItemQuantity(itemId, size, cartItems[itemId].sizes[size] + 1)}
                                                        className="bg-gray-300 hover:bg-gray-400 rounded px-2"
                                                    >
                                                        +
                                                    </button>
                                                    <button
                                                        onClick={() => removeFromCart(itemId, size)}
                                                        className="ml-4 text-red-500 hover:text-red-700"
                                                    >
                                                        Elimină
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Order Summary on the Right */}
            <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg">
                <div className="text-lg font-semibold mb-4">
                    <Title text1={'Detalii'} text2={'Comandă'}/>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <p>Total:</p>
                    <p className="font-semibold">{getCartTotal()} MDL</p>
                </div>
                <button
                    onClick={handleCheckout}
                    className="bg-black text-white w-full py-3 mt-4 rounded-lg hover:bg-gray-900 transition duration-200"
                >
                    Finalizează Comanda
                </button>
            </div>
        </div>
    );
};

export default Cart;
