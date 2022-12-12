export default function NavDrawer( { items } ) {

    function populateItemList() {
        let list = [];
        for (var i = 0; items.length; i ++) {
            list[i] = items[i]
        }
        return list;
    }

    return (
        <div className='float-left lg:w-56 w-full bg-neutral-200'>
            <ul>
                { populateItemList() }
            </ul>
        </div>
    );
}