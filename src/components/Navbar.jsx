import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch ,getCartCount } = useContext(ShopContext);
    const navigate = useNavigate();

    const handleSearchIconClick = () => {
        setShowSearch(true);  // Setează căutarea ca vizibilă
        navigate("/collection");  // Redirecționează la pagina Collection
    };

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <img src={assets.logo} className='w-36' alt="" />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink className='flex flex-col item-center gap-1' to='/'>
                    <p>Acasă</p>
                    <hr className="w-2/4 mx-auto border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink className='flex flex-col item-center gap-1' to='/collection'>
                    <p>Colecție</p>
                    <hr className="w-2/4 mx-auto border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink className='flex flex-col item-center gap-1' to='/about'>
                    <p>Despre Noi</p>
                    <hr className="w-2/4 mx-auto border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink className='flex flex-col item-center gap-1' to='/contact'>
                    <p>Contact</p>
                    <hr className="w-2/4 mx-auto border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                {/* Iconița de căutare */}
                <img onClick={handleSearchIconClick} src={assets.search_icon} className='w-5 cursor-pointer' alt="Search Icon" />
                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="Profile Icon" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 bg-slate-100 text-gray-500 rounded-lg'>
                            <p className='cursor-pointer hover:text-black'>Profilul Meu</p>
                            <p className='cursor-pointer hover:text-black'>Comenzi</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5' alt="Cart Icon" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu Icon" />
            </div>

            {/* Sidebar pentru ecran mic */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="Dropdown Icon" />
                        <p>Înapoi</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>Acasă</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>Colecție</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>Despre Noi</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
