export default function NavDrawerItem({ icon, link }) {
    return (
        <li className='py-5 flex items-center'>
            <div className='text-3xl w-20'>
                {icon}
            </div>
            <div>
                {link}
            </div>

        </li>
    );
}