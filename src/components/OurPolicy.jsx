import {assets} from "../assets/assets.js";

const OurPolicy = () => {
    return (
        <div
            className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5'/>
                <p className='font-semibold'> Ușor de schimbat </p>

            </div>
            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5'/>
                <p className='font-semibold'> Politica de returnare în 24 de ore </p>
            </div>
            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5'/>
                <p className='font-semibold'> Suport individual </p>
            </div>

        </div>
    )
}

export default OurPolicy;