function Drawer() {
    return (
        <div className=' min-h-screen w-screen flex z-40'>
            <div className='w-1/4 sm:w-1/2 h-screen backdrop-blur'></div>
            <div className='w-3/4 sm:w-1/2 h-screen bg-white'>
                <div className='grid grid-cols-3 p-8 gap-y-4'>
                    <div className='col-span-2'>New & Featured</div>
                    <svg
                        aria-hidden='true'
                        className='justify-self-end'
                        focusable='false'
                        viewBox='0 0 24 24'
                        role='img'
                        width='24px'
                        height='24px'
                        fill='none'
                    >
                        <path
                            stroke='currentColor'
                            strokeWidth='1.5'
                            d='M8.474 18.966L15.44 12 8.474 5.033'
                        ></path>
                    </svg>
                    <div className='col-span-2'>Men </div>
                    <svg
                        aria-hidden='true'
                        className='justify-self-end'
                        focusable='false'
                        viewBox='0 0 24 24'
                        role='img'
                        width='24px'
                        height='24px'
                        fill='none'
                    >
                        <path
                            stroke='currentColor'
                            strokeWidth='1.5'
                            d='M8.474 18.966L15.44 12 8.474 5.033'
                        ></path>
                    </svg>
                    <div className='col-span-2'>Women</div>
                    <svg
                        aria-hidden='true'
                        className='justify-self-end'
                        focusable='false'
                        viewBox='0 0 24 24'
                        role='img'
                        width='24px'
                        height='24px'
                        fill='none'
                    >
                        <path
                            stroke='currentColor'
                            strokeWidth='1.5'
                            d='M8.474 18.966L15.44 12 8.474 5.033'
                        ></path>
                    </svg>
                    <div className='col-span-2'>Kids</div>
                    <svg
                        aria-hidden='true'
                        className='justify-self-end'
                        focusable='false'
                        viewBox='0 0 24 24'
                        role='img'
                        width='24px'
                        height='24px'
                        fill='none'
                    >
                        <path
                            stroke='currentColor'
                            strokeWidth='1.5'
                            d='M8.474 18.966L15.44 12 8.474 5.033'
                        ></path>
                    </svg>
                    <div className='col-span-2'>Sale</div>
                    <svg
                        aria-hidden='true'
                        className='justify-self-end'
                        focusable='false'
                        viewBox='0 0 24 24'
                        role='img'
                        width='24px'
                        height='24px'
                        fill='none'
                    >
                        <path
                            stroke='currentColor'
                            strokeWidth='1.5'
                            d='M8.474 18.966L15.44 12 8.474 5.033'
                        ></path>
                    </svg>
                    <div className='col-span-2'>SNKRS</div>
                </div>
                <div className='p-8'>
                    <div className='text-xl font-semibold text-gray-600 '>
                        Become a Nike Member for the best product, and stories
                        in the sports.
                        <span className='text-bold text-gray-800'>
                            {' '}
                            Learn more
                        </span>
                    </div>
                    <div className='flex flex-row justify-around mt-10'>
                        <button className='bg-black text-white px-6 py-2 rounded-full'>
                            Join Us
                        </button>
                        <button className='bg-black text-white px-6 py-2 rounded-full'>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
