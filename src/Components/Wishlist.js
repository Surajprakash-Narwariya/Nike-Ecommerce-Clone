import { useSelector } from 'react-redux';
import { ProductCard, SideScrollElement } from './Product';
import { Link } from 'react-router-dom';

function Wishlist() {
    const wishlist = useSelector((state) => state.root.wishlist);
    console.log(wishlist);

    return (
        <>
            <div className='md:px-14 px-4'>
                <div className='text-xl font-medium my-8'>Favourites</div>
                <div className='grid md:grid-cols-3 gap-8'>
                    {Array.isArray(wishlist) &&
                        wishlist.map((item) => (
                            <div key={item.name}>
                                <Link to='/productDetails' state={item}>
                                    <ProductCard data={item} />
                                </Link>
                            </div>
                        ))}
                </div>
                <div className='my-6 font-semibold text-xl '>
                    Find Your Next Favourite
                </div>
                <SideScrollElement />
            </div>
        </>
    );
}

export default Wishlist;
