export default function ContentCard({ title, text, image, dark }) {
    return (
        {/** Decorator Container */},
        <div className={'m-auto' + (dark ? ' bg-zinc-800 text-white' : '')} >
            
            {/** Flex Container */}
            <div className={"lg:flex lg:items-center lg:max-w-screen-2xl mx-auto " + (dark ? 'flex-row-reverse' : '')}>

                {/** Text & Title Container */}
                <div className='p-5 lg:p-10 lg:w-1/2'>
                    {
                        title ?
                            <h2 className='lg:text-7xl text-4xl font-medium leading-normal py-5'>
                                {title}
                            </h2> :
                            null
                    }
                    {
                        text ?
                            <p className='leading-10 mb-10'>
                                {text}
                            </p> :
                            null
                    }
                </div>

                {/** Image */}
                {
                    image ?
                        image :
                        null

                }
            </div>

        </div>
    );
}