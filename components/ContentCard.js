export default function ContentCard({ title, text, image, dark }) {
    return (
        <div className='p-10 lg:flex lg:items-center space-x-20 m-auto'>
            <div className='p-5'>
                {
                    title ?
                        <h2 className={'lg:text-7xl text-3xl font-medium leading-normal py-5' + (dark ? 'bg-zinc-800 text-white' : '')}>
                            {title}
                        </h2> :
                        null
                }
                {
                    text ?
                        <p className='leading-10'>
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