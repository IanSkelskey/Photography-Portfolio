export default function NavDrawer( { items } ) {

    return (
        <div className='w-full bg-neutral-200'>
            <ul className="lg:flex text-center">
                { items }
            </ul>
        </div>
    );
}