import Link from 'next/link'

export default function NavDrawerItem({ icon, target, text }) {
    return (
        <li className='px-5 py-2 flex items-center'>
            <div className='text-3xl w-20 text-neutral-600'>
                {icon}
            </div>
            <Link href={target}>{text}</Link>

        </li>
    );
}