import {useContext} from "react";
import {ShopContext} from "../context/ShopContext";
import {Link} from "react-router-dom";

const ProductItem = ({id, image, name, price}) => {
    const {currency} = useContext(ShopContext);

    return (
        <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
            <div className='overflow-hidden'>
                <img
                    className='hover:scale-110 transition ease-in-out w-36 h-40'
                    src={image[0]} // înlocuiește cu o imagine de rezervă
                    alt='' // folosește numele ca text alternativ
                />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>
                {price} {currency}
            </p>
        </Link>
    );
}

export default ProductItem;
