

import React, { useState } from 'react';

function FunctionalComponentInput(props) {
    const [name, setName] = useState('Tano');

    function handleNameChange(e) {
        let value = e.target.value;
        setName(value);
    }

    return(
        <React.Fragment>
            <h1> Functional component - hooks ;) </h1>
            <div>
                <label> Name: </label>
                <input value={name}
                       onChange={handleNameChange}
                />
                <p>{ name }</p>
            </div>
        </React.Fragment>
    );
};

export default FunctionalComponentInput;

