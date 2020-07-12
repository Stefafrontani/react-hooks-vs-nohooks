import React, { useEffect, useState } from 'react';

function FunctionalComponentResize() {

    const [windowWidth, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWidthChange = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWidthChange);
        return () => {
            window.removeEventListener('resize', handleWidthChange);
        }
    })

    return (
        <div>
            <h1>Functional Component Resize</h1>
            <div>
                <p> The width of the document is : {windowWidth} </p>
            </div>
        </div>
    )
}

export default FunctionalComponentResize;

