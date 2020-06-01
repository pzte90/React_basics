import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class LoginPage extends Component {

    state = {
        login:'',
        password: '',
        pass: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.login === 'admin' && this.state.password === 'admin'){
            this.setState({
                pass: true
            })
            this.props.pass()
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Route render={()=> (
                this.state.pass?
                <Redirect to='/'/>:
                <form className="loginPage" onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="login">Login: <input id="login" name="login" type="text" value={this.state.login} onChange={this.handleChange}/></label><span style={{color:'red', fontSize:10}}> wpisz admin</span>
                    <br/>
                    <label htmlFor="password">Hasło: <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/></label> <span style={{color:'red', fontSize:10}}> wpisz admin</span>
                    <br/>
                    <button>Zaloguj</button>
                    </div>
                </form>
            )}/>
        );
    }
}

export default LoginPage;
