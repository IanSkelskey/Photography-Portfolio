import { BsPersonCircle } from 'react-icons/bs'
import { GiPartyPopper } from 'react-icons/gi'

export default function ServicesCard({ dark }) {
    return (
        {/** Decorator Container */ },
        <div className={'p-10 m-auto' + (dark ? ' bg-zinc-800 text-white' : '')} >
            <h2 className='lg:text-7xl text-4xl font-medium leading-normal py-5 text-center mb-12'>Services</h2>
            {/** Flex Container */}
            <div className="flex max-w-screen-2xl mx-auto justify-center gap-16">
                <div className='flex-col text-slate-600'>
                    <BsPersonCircle className='text-7xl' />
                    <p className='leading-10 mb-10 text-xl font-medium'>
                        Portraits
                    </p>
                </div>
                
                <div className='flex-col center text-slate-600'>
                    <GiPartyPopper className='text-7xl' />
                    <p className='leading-10 mb-10 text-xl font-medium'>
                        Events
                    </p>
                </div>
            </div>
        </div>
    );
}