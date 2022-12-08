import { AiOutlineMenu } from 'react-icons/ai'

export default function TopNav({ subcomponents }) {

    function generateSubcomponents() {
        let components = []
        for (var i = 0; i < subcomponents.length; i++) {
            components[i] = <li>{subcomponents[i]}</li>
        }
        return components;
    }

    return (
        <div>
            < nav className='py-5 mb-12 flex justify-between' >
                <ui className='flex items-center space-x-5'>
                    <AiOutlineMenu className='text-2xl cursor-pointer' />
                    <h1 className='text-lg font-bold'>Portfolio</h1>
                </ui>

                <ul className='flex items-center space-x-5'>
                    {generateSubcomponents()}
                </ul>
            </nav >
        </div>

    );
}