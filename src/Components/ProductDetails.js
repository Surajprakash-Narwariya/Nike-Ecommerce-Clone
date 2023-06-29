import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../Asset/data';
import { SideScrollElement } from './Product';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/WishlistSlice';
import { addToBag } from '../Redux/BagSlice';

function ProductDetails(props) {
    const [shoesSize, setShoesSize] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const random = Math.floor(Math.random() * 30);

    const [showNotification, setShowNotification] = useState(false);

    const wishlist = useSelector((state) => state);
    console.log(wishlist);
    const dispatch = useDispatch();
    const location = useLocation();

    const { name, price, image, details, category } = location.state;
    const [showImageURL, setShowImageURL] = useState(image[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onHoverImage = (e) => {
        setShowImageURL(e.target.src);
    };

    const handleAddWishlist = () => {
        dispatch(
            addToWishlist({
                ...location.state,
                shoesSize: shoesSize,
            })
        );
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);
    };

    const handleAddToBag = () => {
        if (shoesSize) {
            setErrorMessage('');
            dispatch(
                addToBag({
                    ...location.state,
                    shoesSize: shoesSize,
                })
            );
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
        } else {
            setErrorMessage('Please Select Shoes Size');
        }
    };

    return (
        <div className='py-20 px-4 md:px-20'>
            <div className='flex flex-col md:flex-row justify-center '>
                <div
                    className=' w-full md:w-1/2 md:h-screen md:overflow-auto'
                    id='images'
                >
                    <div className='flex flex-row  md:h-screen overflow-auto'>
                        <div className='flex flex-col space-y-2  no-scrollbar max-h-screen overflow-y-auto'>
                            {image.map((item) => (
                                <img
                                    onMouseEnter={(e) => onHoverImage(e)}
                                    key={item}
                                    className={`bg-[#F5F5F5] h-16 w-16 ${
                                        item === showImageURL
                                            ? 'bg-gray-300'
                                            : ''
                                    }`}
                                    src={item}
                                />
                            ))}
                        </div>
                        <div className='w-full flex items-center justify-center max-h-screen bg-[#F5F5F5] rounded-lg  ml-2 md:mr-14'>
                            <img className=' ' src={showImageURL} />
                        </div>
                    </div>
                </div>
                <div
                    className='w-full mt-14 md:mt-0 md:w-1/3 flex no-scrollbar flex-col md:max-h-screen md:overflow-auto'
                    id='pricingDetails'
                >
                    <div className='flex flex-col justify-center  items-start '>
                        <div className='font-medium text-2xl'>{name}</div>
                        <div className='font-medium text-md'>{category}</div>
                        <div className='mt-5 flex flex-col md:flex-row md:space-x-4 font-medium  text-md'>
                            <span className=''>&#8377; {price}.00 </span>
                            <span className='text-[#757575]'>
                                MRP: &#8377;{' '}
                                {Math.floor(price + (price * 29) / 100)}
                                .00
                            </span>
                            <span className='text-[#118A0A] '>29% off</span>
                        </div>
                        <div className='text-[#757575] mt-1'>
                            incl.of all taxes
                        </div>
                        <div className='text-[#757575]'>
                            (Also includes all applicable duties)
                        </div>
                    </div>
                    <div className='my-10 '>
                        <div className='font-medium'>Select Size</div>
                        <div className='grid grid-cols-3 gap-1 mt-2'>
                            {[
                                2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5,
                                7.0, 7.5, 8.0, 8.5, 9.0, 9.5,
                            ].map((item) => (
                                <div
                                    className={`h-14 hover:border-black text-md text-gray-700 flex items-center justify-center border  rounded-lg ${
                                        shoesSize === item ? 'border-black' : ''
                                    }`}
                                    key={item}
                                    onClick={() => setShoesSize(item)}
                                >
                                    UK {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex my-10 flex-col w-full space-y-4 '>
                        <div className='text-red-500 text-sm'>
                            {errorMessage}
                        </div>
                        <div
                            onClick={() => handleAddToBag()}
                            className='bg-black text-white rounded-full h-14 font-semibold flex items-center justify-center hover:opacity-60'
                        >
                            Add to Bag
                        </div>
                        <div
                            onClick={() => handleAddWishlist()}
                            className='border border-gray-300 hover:border-gray-600 rounded-full h-14 font-semibold flex items-center justify-center'
                        >
                            Favourite
                        </div>
                    </div>
                    <div className=' my-8'>
                        <div>{details}</div>
                    </div>
                    <div className='border-b'></div>
                    <div className='flex flex-col'>
                        <div className='text-xl font-medium my-4'>
                            Delivery & Returns
                        </div>
                        <div className='my-2 flex flex-col space-y-4'>
                            <div>
                                Free delivery for purchases above ₹14,000.00
                            </div>
                            <li>Standard delivery 4–9 Business Days</li>
                            <div>
                                Orders are processed and delivered Monday–Friday
                                (excluding public holidays)
                            </div>
                            <div>
                                Nike Members enjoy
                                <span className='font-medium'>
                                    free returns.
                                </span>
                            </div>
                        </div>
                        <div className='border-b my-4'></div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-20 mb-6 p font-semimedium text-xl'>
                    {' '}
                    You Might Also Like{' '}
                </div>

                <SideScrollElement />
            </div>
            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        // key='notification'
                        initial={{ opacity: 0, y: -200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        exit={{
                            opacity: 0,
                            y: -200,
                            transition: {
                                duration: 0.3,
                                ease: 'easeInOut',
                            },
                        }}
                        id='AddNotification'
                        className='fixed top-10 z-50 right-10 rounded-lg backdrop-blur  p-1  md:p-4  font-bold text-gray-500 border backdrop-brightness-90 text-md md:text-3xl '
                    >
                        Added ✔️
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
export default ProductDetails;
