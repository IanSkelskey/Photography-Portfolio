/**
 * 
 * @param {string} title Title of the content.
 * @param {string} text The body text for the content card.
 * @param {'next/image'} image The image to be displayed in the content card.
 * @param {boolean} dark Whether the content card should be displayed with black background and white text.
 * 
 * @returns A content card populated based on the parameters.
 */
export default function ContentCard({ title, text, image, dark }) {
    return (
        {/** Decorator Container */ },
        <div className={'m-auto' + (dark ? ' bg-zinc-800 text-white' : '')} >

            {/** Flex Container */}
            <div className={"lg:flex lg:items-center lg:max-w-screen-2xl mx-auto " + (dark ? 'flex-row-reverse' : '')}>

                {/** Text & Title Container */}
                <div className='p-5 lg:p-10 lg:w-1/2'>
                    {
                        title ?
                            <h2>
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
                <div className='lg:p-5 lg:w-3/5'>
                    {/** Image */}
                    {
                        image ?
                            image :
                            null

                    }
                </div>

            </div>

        </div>
    );
}