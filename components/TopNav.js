import TextButton from "./TextButton";

export default function TopNav(props) {

    return (
        <div>
            {/** Main Navigation */}
            < nav className='py-5 mb-12 flex justify-between' >
                <h1 className='text-lg font-bold'>Portfolio</h1>
                <ul className='flex items-center'>
                    <li>
                        <TextButton color='amber'/>
                    </li>
                </ul>
            </nav >
        </div>

    );
}