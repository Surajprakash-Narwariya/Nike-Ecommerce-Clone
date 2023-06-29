//  Responsive
import { useState } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import Drawer from './Drawer';
import Home from './Home';
import { Link } from 'react-router-dom';

const parentVariant = {
    visible: {
        height: 'auto',
        transition: {
            duration: 0.3,
            staggerChildren: 0.3,
        },
    },
    hidden: {
        height: 0,
    },
};

const childVariant = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3,
            duration: 0.3,
        },
    },
    hidden: {
        opacity: 0,
        y: -10,
    },
};

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    const handleMouseEnter = () => {
        setShowMenu(true);
    };
    const handleMouseExit = () => {
        setShowMenu(false);
    };

    const handleSearch = () => {
        // Animations are
        // size of the width increase,
        // got the background component that takes the whole width
        // show the releven option in the carts below
    };
    return (
        <>
            <div className='onTop'>
                <div
                    id='topbar'
                    className='hidden md:flex items-center  text-xs space-x-4 font-medium py-1 bg-[#F5F5F5] px-12'
                >
                    <div className=''>
                        <svg
                            height='24px'
                            width='24px'
                            fill='#111'
                            viewBox='0 0 26 32'
                        >
                            <path d='M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z'></path>
                        </svg>
                    </div>
                    <div className='flex-1'></div>

                    <div>Find A Store</div>
                    <div> I</div>
                    <div>Help</div>
                    <div> I</div>
                    <div>Join Us</div>
                    <div> I</div>
                    <div>Sign In</div>
                </div>
                <div
                    id='navbar'
                    className='flex items-center px-4 md:px-14 w-full'
                >
                    <div className='-ml-2 -my-1'>
                        <svg
                            aria-hidden='true'
                            className='h-16 w-16'
                            focusable='false'
                            viewBox='0 0 24 24'
                            role='img'
                            width='24px'
                            height='24px'
                            fill='none'
                        >
                            <path
                                fill='currentColor'
                                fillRule='evenodd'
                                d='M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z'
                                clipRule='evenodd'
                            ></path>
                        </svg>
                    </div>
                    <div className='flex-1'></div>
                    <div className='hidden  md:flex flex-row grow  md:left-20 justify-center items-center space-x-6  w-full font-semibold '>
                        <motion.div
                            onMouseOver={handleMouseEnter}
                            onMouseOut={handleMouseExit}
                            className=' h-full py-4 hover:underline hover:decoration-black hover:underline-offset-[22px]'
                        >
                            <div className=''>New & Featured</div>
                            <AnimatePresence>
                                {showMenu && (
                                    <motion.div
                                        key='modal'
                                        initial='hidden'
                                        animate='visible'
                                        variants={parentVariant}
                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        className='absolute left-0 mt-[17px] bg-white w-screen z-50'
                                        id='details'
                                    >
                                        <motion.div
                                            variants={childVariant}
                                            className='flex flex-row justify-center items-start space-x-20 text-gray-600 overflow-hidden '
                                        >
                                            <div className='flex flex-col text-sm font-normal leading-6 py-10'>
                                                <motion.div className='text-md font-medium text-gray-800 py-2'>
                                                    New and Featured
                                                </motion.div>
                                                <div>New Arrivals</div>
                                                <div>Latest Shoes</div>
                                                <div>Latest Clothing</div>
                                                <div>SNKRS Launch Calender</div>
                                                <div>Get Em' in SNKRS</div>
                                                <div>
                                                    Customise with Nike By You
                                                </div>
                                                <div>Nike App Exclusive</div>
                                                <div>BestSellers</div>
                                                <div>Member Exclusive</div>
                                                <div>Summer Essentials</div>
                                                <div>
                                                    Top Kicks under Rs.8000
                                                </div>
                                            </div>
                                            <div className='flex flex-col text-sm font-normal leading-6 py-10'>
                                                <div className='text-md font-medium text-gray-800 py-2'>
                                                    Shop Icons
                                                </div>
                                                <div>Air Force 1</div>
                                                <div>Air Jordan 1</div>
                                                <div>Air Max</div>
                                                <div>Dunk </div>
                                                <div>Blazer</div>
                                                <div>Pegasus</div>
                                            </div>
                                            <div className='flex flex-col text-sm font-normal leading-6 py-10'>
                                                <div className='text-md font-medium text-gray-800 py-2'>
                                                    New For Men
                                                </div>
                                                <div>Shoes</div>
                                                <div>Clothings</div>
                                                <div>Accessories</div>
                                                <div>Shop All New </div>
                                            </div>
                                            <div className='flex flex-col text-sm font-normal leading-6 py-10'>
                                                <div className='text-md font-medium text-gray-800 py-2'>
                                                    New For Women
                                                </div>
                                                <div>Shoes</div>
                                                <div>Clothings</div>
                                                <div>Accessories</div>
                                                <div>Shop All New </div>
                                            </div>
                                            <div className='flex flex-col text-sm font-normal leading-6 py-10'>
                                                <div className='text-md font-medium text-gray-800 py-2'>
                                                    New For Kids
                                                </div>
                                                <div>Shoes</div>
                                                <div>Clothings</div>
                                                <div>Accessories</div>
                                                <div>Shop All New </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <div className='hover:underline hover:decoration-black hover:underline-offset-[22px]'>
                            Men
                        </div>

                        <div className='hover:underline hover:decoration-black hover:underline-offset-[22px]'>
                            Women
                        </div>
                        <div className='hover:underline hover:decoration-black hover:underline-offset-[22px]'>
                            Kids
                        </div>
                        <div className='hover:underline hover:decoration-black hover:underline-offset-[22px]'>
                            Sale
                        </div>
                        <div className='hover:underline hover:decoration-black hover:underline-offset-[22px]'>
                            SNKRS
                        </div>
                    </div>

                    <div className='hidden md:flex md:relative md:left-8 bg-[#f5f5f5] hover:bg-[#e5e5e5] rounded-full z-10'>
                        <svg
                            id='searchBtn'
                            aria-hidden='true'
                            focusable='false'
                            viewBox='0 0 24 24'
                            role='img'
                            width='30px'
                            height='30px'
                            fill='none'
                        >
                            <path
                                stroke='currentColor'
                                strokeWidth='1.5'
                                d='M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853'
                            ></path>
                        </svg>
                    </div>
                    <div className='hidden md:flex '>
                        <input
                            type='text'
                            onChange={handleSearch}
                            className='border rounded-2xl py-1 pl-9 bg-[#f5f5f5] hover:bg-[#e5e5e5] w-36 '
                            placeholder='Search'
                        />
                    </div>

                    <div className='mx-6'>
                        <Link to='/wishlist'>
                            <svg
                                aria-hidden='true'
                                className='pre-nav-design-icon'
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
                                    d='M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451'
                                ></path>
                            </svg>
                        </Link>
                    </div>
                    <div>
                        <Link to='/cart'>
                            <svg
                                aria-hidden='true'
                                className='pre-nav-design-icon'
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
                                    d='M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5'
                                ></path>
                            </svg>
                        </Link>
                    </div>
                    <div
                        onClick={() => setShowDrawer(!showDrawer)}
                        className='md:hidden ml-6 '
                    >
                        <svg
                            aria-hidden='true'
                            className='pre-nav-design-icon'
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
                                d='M21 5.25H3M21 12H3m18 6.75H3'
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
            {/* <div className='h-24 w-screen bg-slate-200'></div> */}
            <div className='fixed top-10'>
                <AnimatePresence>
                    {showDrawer && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            exit={{ opacity: 0, x: '100%' }}
                        >
                            <Drawer />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Navbar;
