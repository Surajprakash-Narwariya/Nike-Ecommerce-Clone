function Footer() {
    return (
        <div className='bg-black  text-white text-xs py-8 px-4 md:px-14'>
            <div className='flex justify-start space-x-28'>
                <div className='flex flex-col font-semibold space-y-4'>
                    <div>FIND A STORE </div>
                    <div>BECOME A MEMBER</div>
                    <div>Send Us Feedback</div>
                    <div>STUDENT DISCOUNT</div>
                </div>
                <div className=' hidden md:flex md:flex-col space-y-3'>
                    <div className='font-semibold'>GET HELP</div>
                    <div className='text-gray-400'>Order Status</div>
                    <div className='text-gray-400'>Delivery</div>
                    <div className='text-gray-400'>Returns</div>
                    <div className='text-gray-400'>Payment Options</div>
                    <div className='text-gray-400'>
                        Contact Us On Nike.com Inquiries
                    </div>
                    <div className='text-gray-400'>
                        Contact Us On all other Enquiries
                    </div>
                </div>
                <div className='hidden md:flex md:flex-col space-y-3'>
                    <div className='font-semibold'>About NIKE</div>
                    <div className='text-gray-400'>News</div>
                    <div className='text-gray-400'>Careers</div>
                    <div className='text-gray-400'>Investors</div>
                    <div className='text-gray-400'>Sustainability</div>
                </div>
            </div>
            <div className='flex text-gray-400 flex-col space-y-4 py-8 md:flex-row md:justify-start md:items-center md:space-x-10 '>
                <div>&#x24B8;2023 Nike, Inc. All Rights Reserved</div>
                <div>This is Nike Clone Mady By Surajprakash Narwariya</div>
                <div className='hidden md:flex md:flex-1'></div>
                <div>Guides</div>
                <div>Terms of Sale</div>
                <div>Term of Use</div>
                <div>Nike Privacy Policy</div>
            </div>
        </div>
    );
}

export default Footer;
