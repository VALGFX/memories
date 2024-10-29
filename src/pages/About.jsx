import React from 'react';
import { assets } from "../assets/assets.js";
import Title from "../components/Title.jsx";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Titlul despre noi */}
            <div className="text-4xl font-bold text-center mb-6">
                <Title text1={'Despre'} text2={'Noi'}/>
            </div>

            <div className="flex flex-col lg:flex-row items-center">
                {/* Partea stângă: imaginea */}
                <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
                    <img
                        src={assets.about_img}
                        alt="Despre Noi"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Partea dreaptă: textul despre companie */}
                <div className="flex-1">
                    <p className="text-lg text-gray-700 mb-4">
                        La Memories, ne dedicăm furnizării celor mai bune produse și servicii pentru clienții noștri. Misiunea noastră este de a aduce calitate și satisfacție prin fiecare experiență pe care o oferim.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Înființată în 2024, compania noastră este în preces de creștere constantă, extinzându-ne gama de produse și îmbunătățindu-ne serviciile pentru a răspunde nevoilor clienților noștri.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Ne mândrim cu echipa noastră dedicată de profesioniști care lucrează neîncetat pentru a asigura calitate și inovație. Credem în construirea relațiilor pe termen lung cu clienții noștri și ne străduim să depășim așteptările.
                    </p>
                </div>
            </div>

            {/* Secțiune despre de ce să ne alegi */}
            <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
                <div className="text-2xl font-semibold mb-4 text-center">
                    <Title text1={'De ce'} text2={'să ne alegi?'}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col items-start bg-gray-200 p-4 rounded-lg shadow-sm border-b border-gray-300">
                        <div>
                            <strong className="block text-lg font-bold">Friendly Staff</strong>
                            <p className="text-lg text-gray-700">
                                Echipa noastră amabilă și profesionistă este dedicată satisfacerii nevoilor tale. Oferim servicii de calitate, promptitudine și o experiență plăcută, asigurându-ne că fiecare client se simte apreciat.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start bg-gray-200 p-4 rounded-lg shadow-sm border-b border-gray-300">
                        <div>
                            <strong className="block text-lg font-bold">Fast Delivery</strong>
                            <p className="text-lg text-gray-700">
                                Nu puteți ridica comanda de la biroul nostru? Ne asigurăm că produsul comandat va fi livrat în siguranță la ușa dumneavoastră în cel mai scurt timp posibil!
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start bg-gray-200 p-4 rounded-lg shadow-sm border-b border-gray-300">
                        <div>
                            <strong className="block text-lg font-bold">Guarantee</strong>
                            <p className="text-lg text-gray-700">
                                Uită de orice fel de îngrijire! Va oferim certificat de garanție pentru toate produsele pe care le avem în magazinul nostru!
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start bg-gray-200 p-4 rounded-lg shadow-sm">
                        <div>
                            <strong className="block text-lg font-bold">Certified Quality</strong>
                            <p className="text-lg text-gray-700">
                                Magazinul nostru vă oferă o experiență de neuitat și o calitate foarte bună a produselor. Toate produsele sunt verificate în serviciul nostru.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
