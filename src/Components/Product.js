import { data } from '../Asset/data';

function SideScrollCard(props) {
    const { image, name, category, price } = props.data;
    return (
        <div className='flex flex-col'>
            <img className='bg-[#F5F5F5]' src={image[0]} />
            <div className='flex flex-col item-start mt-4 pb-6 w-80 md:w-96'>
                <div className='font-medium '>{name}</div>
                <div className=' text-gray-500 text-sm'>{category}</div>
                <div className='font-semibold text-md mt-1'>
                    MRP : ₹ {price}
                </div>
            </div>
        </div>
    );
}

function SideScrollElement() {
    const start = Math.floor(Math.random() * 150);
    return (
        <>
            <div className='flex space-x-4 overflow-x-scroll'>
                {data.slice(start, start + 10).map((item, index) => {
                    return <SideScrollCard key={index} data={item} />;
                })}
            </div>
        </>
    );
}

function ProductCard(props) {
    const { name, category, price, image } = props.data;

    return (
        <div className='flex flex-col mb-8 w-full'>
            <img className='bg-[#f6f6f6]' src={image[0]} />

            <div className='flex flex-col mt-2'>
                <div className='font-semibold text-md text-gray-800'>
                    {name}
                </div>
                <div className='text-gray-500'>{category}</div>
                <div className='text-gray-500'>
                    {props.data.image.length} Colors
                </div>
                <div className='font-semibold mt-3 text-gray-900'>
                    MRP : &#8377; {price}.00
                </div>
            </div>
        </div>
    );
}

export { SideScrollCard, ProductCard, SideScrollElement };
