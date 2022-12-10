import { useEffect, useState } from 'react';

export default function CardBorder() {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function generateBorder() {
        let triangles = []
        let triangleCount = 4;
        let triangleWidth = windowSize.innerWidth/triangleCount;

        for (let i = 0; i < triangleCount; i++) {
            triangles.push(<div className={'w-0 h-0 border-l-[50px] border-l-transparent border-b-[25px] border-b-neutral-800 border-r-[50px] border-r-transparent'}
            ></div>)
        }
        return triangles;
    }

    return (
        <div className='flex max-w-max'>
            {generateBorder()}
        </div>

    );
}