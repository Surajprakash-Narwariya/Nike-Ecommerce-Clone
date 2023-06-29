import { useEffect, useState } from 'react';
import HomeCard from './Home.Card';
import { Link } from 'react-router-dom';
import { animate, motion } from 'framer-motion';
import useWindowSize from '../hooks/useWindowSize';
import { SideScrollCard } from './Product';

function Home() {
    const [toggleOptions, setToggleOptions] = useState('');
    const windowSize = useWindowSize();

    const initial = (windowSize) => {
        if (windowSize < 768) {
            return {
                opacity: 0,
                height: 0,
            };
        }
    };

    const animatee = (isTrue, windowSize) => {
        if (isTrue && windowSize < 768) {
            return {
                opacity: 1,
                height: 'auto',
                transition: {
                    duration: 0.3,
                    ease: 'easeOut',
                },
            };
        } else if (windowSize >= 768) {
            return {
                opacity: 1,
                height: 'auto',
            };
        }
    };

    const handleToggle = (id) => {
        console.log(toggleOptions);
        if (toggleOptions === id) {
            setToggleOptions('');
            document.getElementById(id).classList.add('hidden');
        } else if (toggleOptions === '') {
            setToggleOptions(id);
            document.getElementById(id).classList.remove('hidden');
        } else {
            document.getElementById(toggleOptions).classList.add('hidden');
            document.getElementById(id).classList.remove('hidden');
            setToggleOptions(id);
        }
    };

    const scroller = [
        {
            image: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/9a3a1c1c-6ec9-4789-99ab-d912da331e75/dri-fit-all-over-print-short-sleeve-yoga-top-fHz8s2.png',
            ],
            name: 'Nike Dri-FIT',
            category: "Men's All-Over Print Short-Sleeve Yoga Top",
            price: 3695,
        },
        {
            image: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/bd7d9657-d0e9-478f-88ea-710e4d168434/yoga-dri-fit-18cm-unlined-shorts-RqMd5p.png',
            ],
            name: 'Nike Yoga Dri-FIT',
            category: "Men's 18cm (approx.) Unlined Shorts",
            price: 4695,
        },
        {
            image: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/db9998ea-de9b-4479-9463-f6ee182788df/dri-fit-alate-ellipse-support-padded-longline-sports-bra-pGZkJ3.png',
            ],
            name: 'Nike Dri-FIT Alate Ellipse',
            category: "Women's Medium-Support Padded Longline Sports Bra",
            price: 3495,
        },
        {
            image: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/d85578ff-ce35-470b-b73c-cac94ebbbb62/go-firm-support-high-waisted-7-8-leggings-with-pockets-frbRZ0.png',
            ],
            name: 'Nike Go',
            category:
                "Women's Firm-Support High-Waisted 7/8 Leggings with Pockets",
            price: 5795,
        },
        {
            image: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/74bf4da9-ff4e-433b-8ecd-559fe0f95020/yoga-dri-fit-jacket-qZFbcT.png',
            ],
            name: 'Nike Yoga Dri-FIT',
            category: "Men's Full-Zip Jacket",
            price: 3995,
        },
        {
            image: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/d53d050d-6029-4dbb-9d3a-b0573abf76ad/dri-fit-flex-tapered-yoga-trousers-2Qxgch.png',
            ],
            name: 'Nike Dri-FIT Flex',
            category: "Men's Tapered Yoga Trousers",
            price: 4295,
        },
        {
            image: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/6c6bdc2e-abbb-4b38-b57d-0a0d557b3f3f/yoga-dri-fit-luxe-cropped-tank-xvfQ34.png',
            ],
            name: 'Nike Yoga Dri-FIT Luxe',
            category: "Women's Cropped Tank",
            price: 2895,
        },
        {
            image: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/cd6b75ab-7087-44dc-8e6d-485878e18e7d/yoga-high-waisted-7-8-leggings-TN4Wd6.png',
            ],
            name: 'Nike Yoga',
            category: "Women's High-Waisted 7/8 Leggings",
            price: 3795,
        },
        {
            image: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/cdc89764-fe54-478c-a722-2cbe738e0d7b/yoga-dri-fit-top-fR3jt6.png',
            ],
            name: 'Nike Yoga Dri-FIT',
            category: "Women's Top",
            price: 1995,
        },
        {
            image: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/5aecabf5-8390-446a-96a2-0a8ebcabcf46/alate-light-support-padded-strappy-sports-bra-1HJfhZ.png',
            ],
            name: 'Nike Alate',
            category: "Women's Light-Support Padded Strappy Sports Bra",
            price: 3095,
        },
    ];

    return (
        <>
            {' '}
            <div
                id='banner'
                className='bg-[#f5f5f5] w-full h-16 flex flex-col items-center justify-center'
            >
                <div className='text-md font-medium'>
                    New Style on Sale : Upto 40% off
                </div>
                <div className='text-sm '>Shop all over new markdowns.</div>
            </div>
            <div className='px-4 md:px-14 w-full'>
                <div className='h-full w-full flex justify-center mb-14'>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ objectFit: 'cover' }}
                        className='h-[70vh]  md:w-full md:h-full'
                    >
                        <source
                            src='https://player.vimeo.com/external/356200184.sd.mp4?s=f528556cafba1d369984dc341104e7eef8bb71bb&profile_id=164&oauth2_token_id=57447761'
                            type='video/mp4'
                        />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
                <div
                    id='heading'
                    className='flex flex-col items-start md:items-center mb-14'
                >
                    <div className='font-semibold text-md'>Summer Kicks</div>
                    <div className='font-black text-5xl md:text-7xl tracking-tighter leading-10'>
                        STEP INTO SUMMER STYLE
                    </div>
                    <div className='font-medium mt-4 text-gray-600'>
                        For days when you need fresh kicks that can be keep up
                        with your move. #ChaseTheDay
                    </div>
                    <div className='w-4/6 md:w-auto md:flex md:flex-row md:items-center  mt-6 mx-auto md:mx-0 '>
                        <Link to='/shopping'>
                            <div className='bg-black text-white md:mr-2 px-4 py-1.5 rounded-full my-2 md:my-0 font-semibold text-center'>
                                Shop Kicks
                            </div>
                        </Link>
                        <Link to='shopping'>
                            <div className='bg-black text-white px-4 py-1.5 rounded-full font-semibold text-center'>
                                Shop Summer Styles
                            </div>
                        </Link>
                    </div>
                </div>
                <div id='trending' className='mb-20'>
                    <div className='text-2xl font-semibold mb-4'> Trending</div>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-2'>
                        <HomeCard
                            props={{
                                image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_673,c_limit/1998ada5-6caf-4819-ae0a-f03393afa04a/nike-just-do-it.png',
                                name: "Trending: That 90's Vibe with the Nike Max 90 Futura",
                                tag: "Stylin' Up with Wasu",
                                link: 'https://www.nike.com/sg/nike-app',
                                linkName: 'Read Now',
                            }}
                        />

                        <HomeCard
                            props={{
                                image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_666,c_limit/1f1f71bc-abc5-443f-8e60-abc56f8ea1e7/nike-just-do-it.png',
                                name: 'Nike Running',
                                tag: 'Featuring the Pegasus 40',
                                link: 'https://www.nike.com/sg/nike-app',
                                linkName: 'Shop Running Shoes',
                            }}
                        />
                    </div>
                </div>
                <div id='trending' className=''>
                    <div className='text-2xl font-semibold mb-4'> Featured</div>
                    <div className='grid grid-cols-1 '>
                        <HomeCard
                            props={{
                                image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1781,c_limit/587d5bbf-7a94-4f18-a468-8cfe375175d2/nike-just-do-it.png',
                                name: 'Nike Air Force 1',
                                tag: 'Join Forces',
                                link: 'https://www.nike.com/sg/nike-app',
                                linkName: 'Shop',
                            }}
                        />
                    </div>
                </div>
                <div className='text-2xl font-semibold mb-4 mt-20'>
                    Find Your Flow Fits
                </div>
                <div className='w-full '>
                    <div className='flex space-x-4 overflow-x-scroll'>
                        {scroller.map((item, index) => {
                            return <SideScrollCard key={index} data={item} />;
                        })}
                    </div>
                </div>
                <div className='text-2xl font-semibold mb-4 mt-20'>Gear Up</div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-2'>
                    <HomeCard
                        props={{
                            image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_700,c_limit/c1bb62a8-28b1-4415-bca4-b15066816839/nike-just-do-it.jpg',
                            name: 'Nike Golf',
                            tag: 'Fits to a Tee',
                            link: 'https://www.nike.com/sg/nike-app',
                            linkName: 'Shop',
                        }}
                    />

                    <HomeCard
                        props={{
                            image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_700,c_limit/7639bac5-4fa2-4438-9af0-3ceda5900f21/nike-just-do-it.jpg',
                            name: 'Nike Tennis',
                            tag: 'Ace Your Look',
                            link: 'https://www.nike.com/sg/nike-app',
                            linkName: 'Shop',
                        }}
                    />
                </div>
                <div className='text-2xl font-semibold mb-4 mt-20'>
                    Dont't Miss
                </div>
                <div className='grid md:gap-x-4 gap-y-2'>
                    <HomeCard
                        props={{
                            image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/0e09dd09-d677-41a9-b1ac-e047d84040b7/nike-just-do-it.jpg',
                            name: '',
                            tag: '',
                            link: '',
                            linkName: '',
                        }}
                    />
                </div>
                <div className='flex flex-col items-start md:items-center mb-14 mt-20'>
                    <div className='font-black text-5xl md:text-7xl tracking-tighter leading-10'>
                        LIVERPOOL FC 2023/24 HOME
                    </div>
                    <div className='font-medium mt-4 text-gray-600'>
                        An iconic design made modern, the Reds walks as one.
                    </div>
                    <div className='w-4/6 md:w-auto md:flex md:flex-row md:items-center  mt-6 mx-auto md:mx-0 '>
                        <Link to='/shopping'>
                            <div className='bg-black text-white md:mr-2 px-4 py-1.5 rounded-full my-2 md:my-0 font-semibold text-center'>
                                Shop
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='text-2xl font-semibold mb-4 mt-20'>
                    The Essentials
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-2'>
                    <HomeCard
                        props={{
                            image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_540,c_limit/69ded6b2-4b32-4f76-9dd0-2d5235a04953/nike-just-do-it.png',
                            name: '',
                            tag: '',
                            link: 'https://www.nike.com/sg/nike-app',
                            linkName: "Men's",
                        }}
                    />

                    <HomeCard
                        props={{
                            image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_540,c_limit/1c8b3b45-5c46-418e-8c62-37fc65eca37c/nike-just-do-it.png',
                            name: '',
                            tag: '',
                            link: 'https://www.nike.com/sg/nike-app',
                            linkName: "Women's",
                        }}
                    />

                    <HomeCard
                        props={{
                            image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_540,c_limit/70a7b831-bc34-4273-9790-6775c56667c0/nike-just-do-it.png',
                            name: '',
                            tag: '',
                            link: 'https://www.nike.com/sg/nike-app',
                            linkName: 'Kids',
                        }}
                    />
                </div>
                <div className='my-20'>
                    <div className='flex flex-col md:flex-row justify-evenly'>
                        <div>
                            <div
                                onClick={() => handleToggle('icons')}
                                className='font-semibold my-3 z-30'
                            >
                                Icons
                            </div>

                            <motion.div
                                initial={initial(windowSize)}
                                animate={animatee(
                                    toggleOptions === 'icons' ? true : false,
                                    windowSize
                                )}
                                exit={initial(windowSize)}
                                id='icons'
                                className='text-gray-600  hidden md:flex md:flex-col overflow-hidden'
                            >
                                <div>Air Force 1</div>
                                <div>Hurache</div>
                                <div>Air Max 90 </div>
                                <div>Air Max 95</div>
                            </motion.div>
                        </div>
                        <div>
                            <div
                                onClick={() => handleToggle('shoes')}
                                className='font-semibold my-3 z-30'
                            >
                                Shoes
                            </div>
                            <motion.div
                                id='shoes'
                                className='text-gray-600 hidden  md:flex md:flex-col overflow-hidden'
                                initial={initial(windowSize)}
                                animate={animatee(
                                    toggleOptions === 'shoes' ? true : false,
                                    windowSize
                                )}
                                exit={initial(windowSize)}
                            >
                                <div>All Shoes</div>
                                <div>Custom Shoes</div>
                                <div>Jordan Shoes</div>
                                <div>Running Shoes</div>
                            </motion.div>
                        </div>
                        <div>
                            <div
                                onClick={() => handleToggle('clothing')}
                                className='font-semibold my-3 z-30'
                            >
                                Clothing
                            </div>
                            <motion.div
                                initial={initial(windowSize)}
                                animate={animatee(
                                    toggleOptions === 'clothing' ? true : false,
                                    windowSize
                                )}
                                exit={initial(windowSize)}
                                id='clothing'
                                className='text-gray-600 hidden  md:flex md:flex-col overflow-hidden'
                            >
                                <div>All Clothing</div>
                                <div>Modest Wear</div>
                                <div>Hoodies and Poolovers</div>
                                <div>Shirts and Tops</div>
                            </motion.div>
                        </div>
                        <div>
                            <div
                                onClick={() => handleToggle('kids')}
                                className='font-semibold my-3 z-30'
                            >
                                Kids
                            </div>
                            <motion.div
                                initial={initial(windowSize)}
                                animate={animatee(
                                    toggleOptions === 'kids' ? true : false,
                                    windowSize
                                )}
                                exit={initial(windowSize)}
                                id='kids'
                                className='text-gray-600  hidden md:flex md:flex-col overflow-hidden'
                            >
                                <div>Infant & Toddlers Shoes</div>
                                <div>Kids' Shoes</div>
                                <div>Kids' Jordan Shoes</div>
                                <div>Kids' Basketball Shoes</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
