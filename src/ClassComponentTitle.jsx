import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial Name'
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    componentDidMount() {
        document.title = this.state.name;
    }
    componentDidUpdate() {
        document.title = this.state.name;
    }

    render() {
        return (
        <div>
            <h1>ClassComponentTitle</h1>
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

