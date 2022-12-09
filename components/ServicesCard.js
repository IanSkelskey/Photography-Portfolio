import { BsPersonCircle } from 'react-icons/bs'
import { GiPartyPopper } from 'react-icons/gi'

export default function ServicesCard({ dark }) {
    return (
        {/** Decorator Container */ },
        <div className={'p-10 m-auto' + (dark ? ' bg-zinc-800 text-white' : '')} >
            <h2 className='lg:text-7xl text-4xl font-medium leading-normal py-5 text-center mb-12'>Services</h2>
            {/** Flex Container */}
            <div className="flex max-w-screen-2xl mx-auto justify-center gap-16 items-center flex-col lg:flex-row">
                <div className='flex-col text-center text-slate-600 max-w-md'>
                    <BsPersonCircle className='mx-auto text-7xl' />
                    <p className='leading-10 mb-10 text-xl font-medium'>
                        Portraits
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin convallis quam mollis suscipit faucibus.
                        Phasellus vel ligula eget quam sodales iaculis eu sed dui.
                    </p>
                </div>

                <div className='flex-col text-center text-slate-600 max-w-md'>
                    <GiPartyPopper className='mx-auto text-7xl' />
                    <p className='leading-10 mb-10 text-xl font-medium'>
                        Events
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin convallis quam mollis suscipit faucibus.
                        Phasellus vel ligula eget quam sodales iaculis eu sed dui.
                    </p>
                </div>
            </div>
        </div>
    );
}