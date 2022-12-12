export default function NavDrawerItem({ icon, link }) {
    return (
        <li className='px-5 py-5 flex items-center'>
            <div className='text-3xl w-20 text-neutral-600'>
                {icon}
            </div>
            <div>
                {link}
            </div>

        </li>
    );
}