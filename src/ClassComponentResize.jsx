import React, { Component } from 'react';

class ClassComponentResize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0
        }
        this.handleWidthChange = this.handleWidthChange.bind(this);
    }

    handleWidthChange() {
        const windowWidth = window.innerWidth;
        this.setState({
            windowWidth: windowWidth
        });
    };
    componentDidMount() {
        window.addEventListener('resize', this.handleWidthChange);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWidthChange);
    }

    render() {
        return (
        <div>
            <h1>Class component</h1>
            <div>
                <p> The width of the document is : {this.state.windowWidth} </p>
            </div>
        </div>
        )
    }
}

export default ClassComponentResize;

