import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ShopContext} from "../context/ShopContext.jsx";
import {assets} from "../assets/assets.js";

const Product = () => {
    const {productId} = useParams();
    const {products, currency,addToCart} = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState("");
    const [size,setSize] = useState();

    const fetchProductData = async () => {
        try {
            const product = products.find((item) => item._id === productId);
            if (product) {
                setProductData(product);
                setImage(product.image[0]); // folosește `product` în loc de `item`
                console.log(product);
            }
        } catch (error) {
            console.error("Eroare la obținerea datelor produsului:", error);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [productId]);

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

                {/* ------ Product images ------*/}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div
                        className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {productData.image.map((item, index) => (
                            <img
                                onClick={() => setImage(item)}
                                src={item}
                                key={index}
                                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                            />
                        ))}
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt='' />
                    </div>
                </div>

                {/* ------ Product information ------*/}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} className='w-3 5'/>
                        <img src={assets.star_icon} className='w-3 5'/>
                        <img src={assets.star_icon} className='w-3 5'/>
                        <img src={assets.star_icon} className='w-3 5'/>
                        <img src={assets.star_icon} className='w-3 5'/>
                        <p className='pl-2'>(10)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{productData.price} {currency}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'> {productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Alege Mărimea</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Adaugă în coș</button>
                    <hr className='mt-8 sm:w-4/5'/>
                </div>
            </div>
        </div>
    ) : (
        <div className='opacity-0'></div>
    );
};

export default Product;
