import {FaInstagram, FaFacebook, FaTiktok} from 'react-icons/fa';
import {assets} from "../assets/assets.js";

const Footer = () => {
    return (
        <footer className='py-16'>
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                <img src={assets.logo} alt="Memories Logo" className="h-12 mb-4 sm:mb-0"/>

                <div className="text-center text-sm">
                    <p>COPYRIGHT © 2024</p>
                    <p>MEMORIES. ALL RIGHTS ARE RESERVED</p>
                </div>

                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                       className="text-dark hover:text-gray-400">
                        <FaInstagram size={20}/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                       className="text-dark hover:text-gray-400">
                        <FaFacebook size={20}/>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                       className="text-dark hover:text-gray-400">
                        <FaTiktok size={20}/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
