import React, { Component } from 'react';

class HomePage extends Component {

    state = {
        date: new Date().toLocaleString().slice(0,10),
        time: new Date().toLocaleString().slice(11,20)
    }

    componentDidMount= () => {
        this.interval = setInterval(()=> {
            const date = new Date().toLocaleString().slice(0,10)
            const time = new Date().toLocaleString().slice(11,20)
            this.setState({
                date,
                time
            })
        },1000)
    }

    componentWillUnmount = () => {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className="homePage">
                <h1>{this.state.time} <span>{this.state.date}</span></h1>
            </div>
        );
    }
}

export default HomePage;
