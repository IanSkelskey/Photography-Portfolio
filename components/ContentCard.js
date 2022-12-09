export default function ContentCard({ title, text, image, dark }) {
    return (
        <div className={'p-10 lg:flex lg:items-center m-auto' + (dark ? ' bg-zinc-800 text-white flex-row-reverse' : '')} >
            <div className='lg:px-10 lg:w-1/2'>
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
            {
                image ?
                    image :
                    null

            }
        </div>
    );
}