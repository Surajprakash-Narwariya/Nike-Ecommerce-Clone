function HomeCard(props) {
    const { image, link, linkName, name, tag } = props.props;
    // console.log(image, link, linkName);
    return (
        <div className='relative '>
            <img
                className='h-[30rem] md:h-[38rem] w-full object-cover '
                src={image}
            />
            <div className='absolute bottom-0 left-0 mx-10 mb-10'>
                <div className='text-md text-white font-medium'>{name}</div>
                <div className='text-2xl text-white font-semibold'>{tag}</div>
                <button className='text-lg bg-white font-medium text-black px-4 py-1 mt-4 rounded-full'>
                    <a href={`${link}`}> {linkName}</a>
                </button>
            </div>
        </div>
    );
}

export default HomeCard;
