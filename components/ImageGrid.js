import Image from 'next/image';

import rainbow from '../public/photos/iceland/rainbow.png'
import church from '../public/photos/iceland/church.png'

export default function ImageGrid() {
    return (
        <div className='mx-auto text-center grid grid-cols-4'>
            <div className='p-5 bg-slate-200'>
                <Image src={rainbow} />
                Description
            </div>
            <div className='p-5 bg-slate-200'>
                <Image src={church} />
                Description
            </div>
            <div className='p-5 bg-slate-200'>
                <Image src={rainbow} />
                Description
            </div>
            <div className='p-5 bg-slate-200'>
                <Image src={church} />
                Description
            </div>
            <div className='p-5 bg-slate-200'>
                <Image src={rainbow} />
                Description
            </div>
            <div className='p-5 bg-slate-200'>
                <Image src={church} />
                Description
            </div>
            <div className='p-5 bg-slate-200'>
                <Image src={rainbow} />
                Description
            </div>
            <div className='p-5 bg-slate-200'>
                <Image src={church} />
                Description
            </div>
        </div>
    );
}