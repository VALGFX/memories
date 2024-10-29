import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/assets";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(true);
    const [filterProducts, setFilterProducts] = useState(products);
    const [sortOption, setSortOption] = useState('relevante');
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setCategory(prev => [...prev, e.target.value]);
        }
    };

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setSubCategory(prev => [...prev, e.target.value]);
        }
    };

    useEffect(() => {
        let filteredProducts = products;

        // Filtrarea pe baza termenului de căutare
        if (search) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Filtrarea pe baza categoriilor
        if (category.length > 0) {
            filteredProducts = filteredProducts.filter(product => category.includes(product.category));
        }

        // Filtrarea pe baza subcategoriilor
        if (subCategory.length > 0) {
            filteredProducts = filteredProducts.filter(product => subCategory.includes(product.subCategory));
        }

        // Sortarea produselor
        if (sortOption === 'mare-mic') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'mic-mare') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        setFilterProducts(filteredProducts);
    }, [products, search, category, subCategory, sortOption]); // Adaugă 'search' în dependințe

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            {/* Opțiuni de filtrare */}
            <div className="min-w-60">
                <p
                    onClick={() => setShowFilter(!showFilter)}
                    className="my-2 text-xl flex items-center cursor-pointer gap-2"
                >
                    Filtru
                    <img
                        className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
                        src={assets.dropdown_icon}
                    />
                </p>
                {/* Categoriile de filtrare */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium"> CATEGORIE </p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value="Men" onChange={toggleCategory} /> Bărbați
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value="Women" onChange={toggleCategory} /> Femei
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value="Unisex" onChange={toggleCategory} /> Unisex
                        </p>
                    </div>
                </div>
                {/* Subcategorii */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium"> Tipul </p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value="Winter" onChange={toggleSubCategory} /> Iarnă
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value="Spring" onChange={toggleSubCategory} /> Primăvara
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value="Summer" onChange={toggleSubCategory} /> Vara
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value="Autumn" onChange={toggleSubCategory} /> Toamna
                        </p>
                    </div>
                </div>
            </div>
            {/* Sortarea produselor */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'Toate'} text2={'Colecțiile'} />
                    {/* Produsele sortate */}
                    <select
                        className='border-2 border-gray-300 text-sm px-2'
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value='relevante'>Sortează după: Relevant</option>
                        <option value='mic-mare'>Sortează după: Mic la Mare</option>
                        <option value='mare-mic'>Sortează după: Mare la Mic</option>
                    </select>
                </div>

                {/* Produsele */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {filterProducts.length > 0 ? (
                        filterProducts.map((item, index) => (
                            <ProductItem
                                key={index}
                                name={item.name}
                                price={item.price}
                                id={item._id}
                                image={item.image}
                            />
                        ))
                    ) : (
                        <p className="text-center">Nu sunt produse disponibile.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Collection;
