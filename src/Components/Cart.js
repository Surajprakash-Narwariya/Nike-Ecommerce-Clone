import { useSelector } from 'react-redux';
import { SideScrollElement } from './Product';
import { removeFromBag } from '../Redux/BagSlice';
import { useDispatch } from 'react-redux';

function Cart(props) {
    const bag = useSelector((item) => item.root.bag);

    console.log(bag);

    let totalPrice = 0;
    bag.forEach((element) => (totalPrice += element.price));
    // return <div>Helo</div>;

    return (
        <div className='px-4  md:px-14 '>
            <div className='flex flex-col md:flex-row md:justify-center md:space-x-14'>
                <div className='w-full md:w-1/2'>
                    <div className='font-medium my-4 md:my-10 text-xl'>Bag</div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        {bag.map((item) => (
                            <div key={item.name} className='w-full'>
                                <BagItem data={item} />
                            </div>
                        ))}
                        {bag.length === 0 ? 'Cart is EMPTY!' : ''}
                    </div>
                </div>
                <div className='w-full md:w-1/3'>
                    <div className='font-medium text-xl my-4 md:my-10'>
                        Summary
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <div className='flex justify-between'>
                            <div>Subtotal</div>
                            <div>&#8377; {totalPrice}.00</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Estimated Delivery and Handling</div>
                            <div>Free</div>
                        </div>
                        <div className='flex-1 border-b my-2'></div>
                        <div className='flex justify-between'>
                            <div>Total</div>
                            <div> &#8377; {totalPrice}.00</div>
                        </div>
                        <div className='flex-1 border-b my-2'></div>
                    </div>
                </div>
            </div>
            <div className='my-8'>
                <div className='my-8 text-xl font-medium'>
                    {' '}
                    You Might Also Like{' '}
                </div>
                <SideScrollElement />
            </div>
        </div>
    );
}

const BagItem = (props) => {
    const dispatch = useDispatch();
    const { name, category, shoesSize, image, price } = props.data;
    console.log(shoesSize);
    return (
        <>
            <div className='flex flex-row w-full'>
                <div className='flex md:h-36 w-36 justify-center bg-[#f5f5f5] items-center'>
                    <img src={image[0]} />
                </div>
                <div className='flex mx-4  flex-col space-y-1.5 justify-center w-full'>
                    <div className='flex flex-col md:flex-row font-semibold '>
                        <div className=' '>{name}</div>
                        <div className='flex flex-1'></div>
                        <div className=''>MRP: &#8377; {price}</div>
                    </div>

                    <div className='text-gray-500'>{category}</div>
                    <div className='flex text-gray-500 space-x-6'>
                        <div>Size : {shoesSize}</div>
                        <div>Quantity : 1</div>
                    </div>
                    <div className='flex space-x-6 pt-4'>
                        <div
                            onClick={() => dispatch(removeFromBag(props.data))}
                            id='deleteFromBag'
                            className='h-6 w-5'
                        >
                            <svg
                                aria-hidden='true'
                                focusable='false'
                                viewBox='0 0 24 24'
                                role='img'
                                fill='none'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-miterlimit='10'
                                    stroke-width='1.5'
                                    d='M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3'
                                ></path>
                            </svg>
                        </div>
                        <div className='h-6 w-5'>
                            <svg
                                aria-hidden='true'
                                focusable='false'
                                viewBox='0 0 24 24'
                                role='img'
                                fill='none'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-width='1.5'
                                    d='M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451'
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b my-6'></div>
        </>
    );
};

export default Cart;
