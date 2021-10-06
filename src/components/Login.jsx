import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import NavBar from './NavBar';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            password: null,
            isRegister: false,
            title: 'Login'
        }
    }
    loginHandle = () => {

        fetch('http://localhost:3000/login?name=' + this.state.name + '&password=' + this.state.password)
            .then((data) => (data.json().then((res) => {
                if (res.length > 0) {
                    localStorage.setItem('login', JSON.stringify(res));
                    this.props.history.push('list');
                }
                else {
                    alert('Invalid Email or password');
                }
            })))
    }

    registerHandle = () => {

        let sData = {
            name: this.state.name,
            password: this.state.password
        }
        console.log(sData);
        fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sData)
        }).then((res) => {
            res.json().then((result) => alert('User has Registered'));
            this.setState({ isRegister: false, title: 'Login' });
            this.props.history.push('login');
        });
    }

    render() {
        return (
            <>
                <NavBar />
                <Container>
                    <h2 className="headings">{this.state.title}</h2><br />
                    <Form><Form.Group className="mb-3" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Enter Username" type="text" name="name" onChange={(event) => { this.setState({ name: event.target.value }) }} required />
                    </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control  placeholder="Enter Password" type="password" name="password" onChange={(event) => { this.setState({ password: event.target.value }) }} required />
                        </Form.Group>

                        {
                            !this.state.isRegister ?
                                <><Button onClick={this.loginHandle} variant="secondary">Login</Button>
                                    <br /><br /><p>Not a member yet?  <span className='span' onClick={() => this.setState({ isRegister: true, title: 'Register' })} variant="secondary" >Register</span></p>
                                </>
                                : <><Button onClick={this.registerHandle} variant="secondary">Register</Button>
                                    <br /><br /><p>Already registered?  <span className='span' onClick={() => this.setState({ isRegister: false, title: 'Login' })}  >Login</span></p>
                                </>
                        }
                    </Form>

                </Container>
            </>)
    }
}
