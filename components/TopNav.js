import { AiOutlineMenu } from 'react-icons/ai'


/**
 * 
 * @param {*} subcomponents Array of components to be displayed on the right side of the nav bar.
 * @param {string} title Title to be displayed on the left of the nav bar.
 * @returns 
 */
export default function TopNav({ title, onBurgerMenuClicked, subcomponents }) {

    return (
        <div className='px-5 bg-neutral-100'>
            <nav className='py-4 flex justify-between' >
                <ul className='flex items-center space-x-5'>
                    <li><AiOutlineMenu className='text-2xl cursor-pointer' onClick={onBurgerMenuClicked}/></li>
                    <li><p className='text-lg font-bold'>{title}</p></li>
                </ul>

                <ul className='flex items-center space-x-5'>
                    {subcomponents}
                </ul>
            </nav >
        </div>

    );
}