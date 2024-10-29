import React, { useState } from 'react';
import { FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import Title from "../components/Title.jsx"; // Icone pentru metodele de plată

const PlaceOrder = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });
    const [discountCode, setDiscountCode] = useState('');
    const [subtotal] = useState(200); // Exemplu de subtotal
    const [deliveryFee] = useState(10); // Exemplu de taxă de livrare
    const [discount, setDiscount] = useState(0); // Reducere inițială

    // Funcția pentru aplicarea codului promoțional
    const applyDiscount = () => {
        // Exemplu de validare a codului promoțional
        if (discountCode === "PROMO24") {
            const discountAmount = total * 0.10; // 10% discount
            setDiscount(discountAmount);
            setTotal(total - discountAmount); // actualizează totalul după discount
            alert("Codul promoțional a fost aplicat cu succes!");
        } else {
            alert("Cod promoțional invalid!");
        }
    };

    const total = subtotal + deliveryFee - discount; // Total final

    const handlePlaceOrder = () => {
        // Logica pentru plasarea comenzii
        alert("Comanda a fost plasată cu succes!");
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-7xl mx-auto">
            {/* Informații de livrare */}
            <div className="flex-1 bg-white p-6 rounded-lg ">
                <div className="text-xl font-semibold mb-4">
                    <Title text1={'Delivery'} text2={'Information'}/>
                </div>
                <form className="space-y-4">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-md"
                            placeholder="Nume"
                        />
                        <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-md"
                            placeholder="Prenume"
                        />
                    </div>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-md"
                            placeholder="Strada"
                        />
                        <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-md"
                            placeholder="Oraș"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Număr de Telefon"
                        />
                    </div>
                </form>
            </div>

            {/* Total coș și metode de plată */}
            <div className="flex-1 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-xl font-semibold mb-4">
                        <Title text1={'Cart'} text2={'Totals'}/>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                        <span>Subtotal:</span>
                        <span>{subtotal.toFixed(2)} MDL</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                        <span>Taxa de livrare:</span>
                        <span>{deliveryFee.toFixed(2)} MDL</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                        <span>Reducere:</span>
                        <span>{discount.toFixed(2)} MDL</span>
                    </div>
                    <div className="border-t my-2"></div>
                    <div className="flex justify-between text-lg font-semibold">
                        <span>Total:</span>
                        <span>{total.toFixed(2)} MDL</span>
                    </div>
                    <div className="mt-4 flex items-center">
                        <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-md"
                            placeholder="Cod Promoțional"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                        />
                        <button
                            onClick={applyDiscount}
                            className="ml-2 bg-amber-600 text-white py-2 px-4 rounded-md"
                        >
                            Aplică
                        </button>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-xl font-semibold mb-4">
                        <Title text1={'Payment'} text2={'Method'}/>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setPaymentMethod('card')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${paymentMethod === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            <FaCreditCard />
                            <span>Plată cu cardul</span>
                        </button>
                        <button
                            onClick={() => setPaymentMethod('cash')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${paymentMethod === 'cash' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            <FaMoneyBillWave />
                            <span>Cash la primire</span>
                        </button>
                    </div>
                    {/* Formular pentru introducerea detaliilor cardului */}
                    {paymentMethod === 'card' && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-300">
                            <h3 className="text-lg font-medium mb-2">Detalii Card</h3>
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Număr Card"
                                    value={cardDetails.cardNumber}
                                    onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                                />
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Data Expirării (MM/YY)"
                                    value={cardDetails.expiryDate}
                                    onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                                />
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="CVV"
                                    value={cardDetails.cvv}
                                    onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-black text-white py-3 rounded-lg shadow-lg hover:bg-gray-900 transition duration-200"
                >
                    Plasează Comanda
                </button>
            </div>
        </div>
    );
};

export default PlaceOrder;
