import React, { Component, useState } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        const [name, setName] = useState();
        return (
        <div>
            <h1>Class component</h1>
            <div>
                <label> Name: </label>
                <input value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <p> You write tha name: {this.state.name} </p>
            </div>
        </div>
        )
    }
}

export default ClassComponent;

