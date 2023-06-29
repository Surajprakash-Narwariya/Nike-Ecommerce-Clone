import { useEffect, useState } from 'react';
import {
    AnimatePresence,
    motion,
    AnimateSharedLayout,
    easeInOut,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import { ProductCard } from './Product';
import { data, inAny, inBoth } from '../Asset/data';

// All the category of filters perform & ( AND) operation between them
// and all the item inside category perform || (OR) operation between them

function Shopping() {
    const windowSize = useWindowSize();
    const [cardData, setCardData] = useState(data);
    const [showFilterMenu, setShowFilterMenu] = useState(true);
    const [sort, setSort] = useState(false);

    const [genderFilterData, setGenderFilterData] = useState([]);
    const [priceFilterData, setPriceFilterData] = useState([]);
    const [brandFilterData, setBrandFilterData] = useState([]);

    useEffect(() => {
        const arr = inBoth(
            genderFilterData,
            inBoth(priceFilterData, brandFilterData)
        );
        if (arr.length === 0) {
            setCardData(data);
        } else {
            setCardData(arr);
        }
    }, [genderFilterData, priceFilterData, brandFilterData]);

    const sortByPrice = (text) => {
        if (text === 'Price: High - Low') {
            // sorting in descending order price
            let tempCardData = [...cardData].sort(
                (obj1, obj2) => obj2.price - obj1.price
            );
            setCardData(tempCardData);
        } else if (text === 'Price: Low - High') {
            // sorting in ascending order by price
            let tempCardData = [...cardData].sort(
                (obj1, obj2) => obj1.price - obj2.price
            );
            setCardData(tempCardData);
        }
    };

    const filterByBrand = (e) => {
        const { checked, value } = e.target;
        let filter = [];
        switch (value) {
            case 'Nike SportWear':
                if (checked) {
                    filter = data.filter((item) => item.name.includes('Nike'));
                    setBrandFilterData(inAny(brandFilterData, filter));
                } else {
                    filter = brandFilterData.filter(
                        (item) => !item.name.includes('Nike')
                    );
                    setBrandFilterData(filter);
                }
                break;
            case 'Jordan':
                if (checked) {
                    filter = data.filter((item) =>
                        item.name.includes('Jordan')
                    );
                    setBrandFilterData(inAny(brandFilterData, filter));
                } else {
                    filter = brandFilterData.filter(
                        (item) => !item.name.includes('Jordan')
                    );
                    setBrandFilterData(filter);
                }
                break;
            case 'Phantom':
                if (checked) {
                    filter = data.filter((item) =>
                        item.name.includes('Phantom')
                    );
                    setBrandFilterData(inAny(brandFilterData, filter));
                } else {
                    filter = brandFilterData.filter(
                        (item) => !item.name.includes('Phantom')
                    );
                    setBrandFilterData(filter);
                }
                break;
            case 'Premium':
                if (checked) {
                    filter = data.filter((item) =>
                        item.name.includes('Premium')
                    );
                    setBrandFilterData(inAny(brandFilterData, filter));
                } else {
                    filter = brandFilterData.filter(
                        (item) => !item.name.includes('Premium')
                    );
                    setBrandFilterData(filter);
                }
                break;
            case 'Pro Version':
                if (checked) {
                    filter = data.filter((item) => item.name.includes('Pro'));
                    setBrandFilterData(inAny(brandFilterData, filter));
                } else {
                    filter = brandFilterData.filter(
                        (item) => !item.name.includes('Pro')
                    );
                    setBrandFilterData(filter);
                }
                break;
        }
    };

    const filterByPrice = (e) => {
        const { checked, value } = e.target;
        let filter = [];
        switch (value) {
            case 'Under ₹2500.00':
                if (checked) {
                    filter = data.filter((item) => item.price <= 2500);
                    setPriceFilterData(inAny(priceFilterData, filter));
                } else {
                    filter = priceFilterData.filter(
                        (item) => !item.price <= 2500
                    );
                    setPriceFilterData(filter);
                }
                break;
            case '₹2501 - ₹7500':
                if (checked) {
                    filter = data.filter(
                        (item) => item.price > 2500 && item.price <= 7500
                    );
                    setPriceFilterData(inAny(priceFilterData, filter));
                } else {
                    filter = priceFilterData.filter(
                        (item) => !(item.price > 2500 && item.price <= 7500)
                    );
                    setPriceFilterData(filter);
                }
                break;
            case '₹7501 - ₹12999':
                if (checked) {
                    filter = data.filter(
                        (item) => item.price > 7500 && item.price <= 12999
                    );
                    setPriceFilterData(inAny(priceFilterData, filter));
                } else {
                    filter = priceFilterData.filter(
                        (item) => !(item.price > 7500 && item.price <= 12999)
                    );
                    setPriceFilterData(filter);
                }
                break;
            case 'Over ₹13000':
                if (checked) {
                    filter = data.filter((item) => item.price >= 13000);
                    setPriceFilterData(inAny(priceFilterData, filter));
                } else {
                    filter = priceFilterData.filter(
                        (item) => !item.price >= 13000
                    );
                    setPriceFilterData(filter);
                }
                break;
        }
    };

    const filterByGender = (e) => {
        const { checked, value } = e.target;
        console.log(checked, value);

        if (checked) {
            const filter = data.filter((item) =>
                value === 'Unisex'
                    ? !item.category.includes("Men's") &&
                      !item.category.includes("Women's")
                    : item.category.includes(value)
            );
            const either = inAny(filter, genderFilterData);
            setGenderFilterData(either);
        } else {
            // filter out the choosen data from the current data
            const filter = genderFilterData.filter((item) =>
                value === 'Unisex'
                    ? item.category.includes("Men's") ||
                      item.category.includes("Women's")
                    : !item.category.includes(value)
            );
            console.log(filter);
            // if (filter.length === 0) {
            //     setGenderFilterData(data);
            // } else {
            setGenderFilterData(filter);
            // }
        }
    };

    return (
        <div className='md:px-14 px-4'>
            <div className='flex flex-col md:flex-row md:items-center md:space-x-6 md:pt-4 sticky top-0 bg-white z-30'>
                {/* //! {This the Items when the screen size is greater than 768 pixels} */}
                <div className='font-semibold text-2xl py-3'>
                    Shoes ({cardData.length})
                </div>

                <div className='hidden md:flex md:flex-1'></div>
                <div
                    onClick={() => setShowFilterMenu(!showFilterMenu)}
                    className='hidden md:flex'
                >
                    <div>{showFilterMenu ? 'Hide Filter' : 'Show Filter'}</div>
                    <div>
                        <svg
                            aria-hidden='true'
                            className='icon-filter-ds'
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
                                d='M21 8.25H10m-5.25 0H3'
                            ></path>
                            <path
                                stroke='currentColor'
                                strokeWidth='1.5'
                                d='M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z'
                                clipRule='evenodd'
                            ></path>
                            <path
                                stroke='currentColor'
                                strokeWidth='1.5'
                                d='M3 15.75h10.75m5 0H21'
                            ></path>
                            <path
                                stroke='currentColor'
                                strokeWidth='1.5'
                                d='M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z'
                                clipRule='evenodd'
                            ></path>
                        </svg>
                    </div>
                </div>
                <div className='hidden md:flex'>
                    <div onClick={() => setSort(!sort)} className='flex'>
                        <div>Sort By</div>
                        <div>
                            <svg
                                className={sort ? '' : 'rotate-180'}
                                height='24'
                                viewBox='0 0 48 48'
                                width='24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z' />
                                <path d='M0 0h48v48h-48z' fill='none' />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* //! {This the Items when the screen size is smaller than 768 pixels} */}
                <div className='md:hidden flex overflow-x-auto py-2 mb-2 items-center  '>
                    {category &&
                        category.map((item) => (
                            <div
                                className='font-semibold text-gray-800 px-4 w-full whitespace-nowrap'
                                key={item}
                            >
                                {item}
                            </div>
                        ))}
                </div>
                <div className='flex md:hidden border-b my-3'></div>
                <div className='flex md:hidden flex-row items-center justify-between pb-3'>
                    <div className='text-gray-500'>117 Results</div>
                    <div className='flex border rounded-full px-4 py-1'>
                        <div className='font-medium'>Filter</div>
                        <div>
                            <svg
                                aria-hidden='true'
                                className='icon-filter-ds'
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
                                    d='M21 8.25H10m-5.25 0H3'
                                ></path>
                                <path
                                    stroke='currentColor'
                                    strokeWidth='1.5'
                                    d='M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z'
                                    clipRule='evenodd'
                                ></path>
                                <path
                                    stroke='currentColor'
                                    strokeWidth='1.5'
                                    d='M3 15.75h10.75m5 0H21'
                                ></path>
                                <path
                                    stroke='currentColor'
                                    strokeWidth='1.5'
                                    d='M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {sort && (
                        <motion.div
                            key='sort'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeInOut',
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    delay: 0.4,
                                    duration: 0.4,
                                    ease: 'easeInOut',
                                },
                            }}
                            className='bg-white overflow-hidden absolute w-36 rounded-xl right-0 mt-8 top-10 flex flex-col items-end space-y-1  '
                        >
                            {[
                                'Featured',
                                'Newest',
                                'Price: High - Low',
                                'Price: Low - High',
                            ].map((item, index) => (
                                <motion.div
                                    onClick={() => sortByPrice(item)}
                                    className='px-2 py-1 last:pb-3 overflow-hidden'
                                    initial={{ opacity: 0, y: '-10px' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.1,
                                    }}
                                    exit={{ opacity: 0, y: '-10px' }}
                                    key={item}
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div>
                <div id='shoppingContainer' className='flex '>
                    <AnimatePresence>
                        {windowSize >= 768 && showFilterMenu && (
                            <motion.div
                                variants={parentRight}
                                initial='initial'
                                animate='animate'
                                exit='exit'
                                key='filter'
                                className='md:flex flex-col sticky top-20 overflow-y-scroll h-[80vh] '
                            >
                                <motion.div
                                    className=''
                                    layout
                                    variants={children}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'
                                >
                                    <div
                                        id='category'
                                        className='flex flex-col'
                                    >
                                        <div className='hidden md:flex md:overflow-x-scroll md:flex-col md:justify-start md:space-y-2'>
                                            {category &&
                                                category.map((item) => (
                                                    <div
                                                        className='font-semibold text-gray-800 '
                                                        key={item}
                                                    >
                                                        {item}{' '}
                                                    </div>
                                                ))}
                                        </div>
                                    </div>

                                    <div className='border-b mb-2 mt-3'></div>
                                    <CheckBoxHandler
                                        data={{
                                            heading: 'Gender',
                                            array: [
                                                "Men's",
                                                "Women's",
                                                'Unisex',
                                            ],
                                        }}
                                        filter={filterByGender}
                                    />

                                    <CheckBoxHandler
                                        data={{
                                            heading: 'Shop By Price',
                                            array: [
                                                'Under ₹2500.00',
                                                '₹2501 - ₹7500',
                                                '₹7501 - ₹12999',
                                                'Over ₹13000',
                                            ],
                                        }}
                                        filter={filterByPrice}
                                    />
                                    <CheckBoxHandler
                                        data={{
                                            heading: 'Brand',
                                            array: [
                                                'Nike SportWear',
                                                'Jordan',
                                                'Phantom',
                                                'Premium',
                                                'Pro Version',
                                            ],
                                        }}
                                        filter={filterByBrand}
                                    />

                                    <div className='py-6'></div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className=' w-full '>
                        <div className='grid  sm:grid-cols-2 md:grid-cols-3 gap-4 w-full'>
                            {cardData &&
                                cardData.map((item, ind) => (
                                    <AnimatePresence key={item.name + ind}>
                                        <Link to='/productDetails' state={item}>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    scale: 1.2,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                // layout
                                                transition={{
                                                    duration: 0.1,
                                                    delay: 0.1 * ind,
                                                    ease: 'easeInOut',
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                    transition: {
                                                        duration: 0.1,
                                                        ease: 'easeInOut',
                                                    },
                                                }}
                                                key={ind + item.name}
                                                className='w-full'
                                            >
                                                <ProductCard data={item} />
                                            </motion.div>
                                        </Link>
                                    </AnimatePresence>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div onClick={scrollToTop} className='h-20 w-full bg-red-100'>
                Scroll To Top
            </div> */}
        </div>
    );
}

const CheckBoxHandler = (props) => {
    const { heading, array } = props.data;

    const handleTick = (e) => {
        props.filter(e);
    };
    return (
        <>
            <div id={heading}>
                <div className='flex flex-col'>
                    <div className='font-medium text-lg py-3'>{heading}</div>
                    <div className='flex flex-col justify-center  space-y-1'>
                        {array &&
                            array.map((item) => (
                                <div key={item} className='flex items-center'>
                                    <input
                                        onChange={(e) => handleTick(e)}
                                        type='checkbox'
                                        className='mr-2 w-4 h-4 accent-black'
                                        value={item}
                                    />
                                    <label>{item}</label>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className='border-b mb-2 mt-3'></div>
        </>
    );
};

const category = [
    'Lifestyle',
    'Jordan',
    'Running',
    'Basketball',
    'Football',
    'Training & Gym',
    'Skateboarding',
    'Golf',
    'Tennis',
    'Athletics',
    'Walking',
];

const parentUp = {
    initial: {
        y: '100%',
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.3,
            easing: 'easeInOut',
        },
    },
    exit: {
        y: '100%',
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

const parentRight = {
    initial: {
        width: 0,
    },
    animate: {
        width: '16rem',
        transition: {
            duration: 0.3,
            easing: 'easeInOut',
            staggerChildren: 0.5,
        },
    },
    exit: {
        width: 0,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

const children = {
    initial: {
        x: '-100px',
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
    exit: {
        x: '-100px',
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

export default Shopping;
