import React from 'react';
import { assets } from "../assets/assets.js";
import Title from "../components/Title.jsx";

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">

            <div className="flex flex-col lg:flex-row items-center">
                {/* Partea stângă: imaginea */}
                <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
                    <img
                        src={assets.contact_img} // Asigură-te că ai imaginea în acest folder
                        alt="Contactează-ne"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Partea dreaptă: detaliile de contact */}
                <div className="flex-1">
                    <div className="text-2xl font-semibold mb-4">
                        <Title text1={'Contactele'} text2={'Noastre'}/>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                            <strong className="block text-lg font-bold">Adresă</strong>
                            <p className="text-lg text-gray-700">str. Sarmizegetusa 48, oficiul 113, mun. Chișinău</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                            <strong className="block text-lg font-bold">Număr de Telefon</strong>
                            <p className="text-lg text-gray-700">067553659</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                            <strong className="block text-lg font-bold">Adresă de Email</strong>
                            <p className="text-lg text-gray-700">parfum.memories@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
