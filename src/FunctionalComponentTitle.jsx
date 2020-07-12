import React, { useEffect, useState } from 'react';

function FunctionalComponentTitle() {

    const [checked, setChecked] = useState(false);
    function handleChecked() {
        const newCheckedStatus = !checked;
        setChecked(newCheckedStatus);
    }

    const [count, setCount] = useState(0);
    // Effect to update count
    const newCount = count + 1;
    const handleCount = () => setCount(newCount);
    useEffect(() => {
        console.log('Use Effect callback');
        document.title = count;
    }, [count]);

    return (
        <div>
            <h1>Functional Component Resize</h1>
            <div>
                <div>
                    <button onClick={handleCount}> Increase Count </button>
                    <p>{ count }</p>
                </div>
                <div>
                    <button onClick={handleChecked}> Press here </button>
                    <p>{ checked ? 'TRUE' : 'FALSE' }</p>
                </div>
            </div>
        </div>
    )
}

export default FunctionalComponentTitle;