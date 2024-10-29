const NewsletterBox = () => {

    const onSubmitHadler = (event) =>{
        event.preventDefault();
    }
    return (

        <div className='text-center '>
            <p className='text-2xl font-mediu text-gray-800'>
                Abonați-vă acum și obțineți voucher de 500 MDL
            </p>
        <p className='text-gray-400 mt-3'>

        </p>
        <form onSubmit={onSubmitHadler} className='w-full sm:1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Introdu email-ul tău' required/>
            <button type="submit" className='bg-black text-white text-xs px-10 py-4'>Abonați-vă </button>
        </form>
        </div>)
}

export default NewsletterBox;