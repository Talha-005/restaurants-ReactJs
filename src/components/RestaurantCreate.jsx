import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import NavBar from './NavBar';

export default class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            address: null,
            rating: null,
        }
    }
    createHandle = () => {
        fetch("http://localhost:3000/restaurants", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((res) => {
            res.json().then((result) => alert('Created'))
        });

    }

    render() {
        return (
            <>
            <NavBar />
            <div className='container'>
                <h2 className="headings">Restaurant Create</h2>
                <br />
                <div>
                    <Form >
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Restaurant Name" type="text" name="name" onChange={(event) => { this.setState({ name: event.target.value }) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Restaurant Address" type="text" name="address" onChange={(event) => { this.setState({ address: event.target.value }) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Rating</Form.Label>
                            <Form.Control placeholder="Restaurant Rating" type="text" name="rating" onChange={(event) => { this.setState({ rating: event.target.value }) }} />
                        </Form.Group>

                        <Button onClick={this.createHandle} variant="secondary">Create</Button>
                    </Form>
                </div>

            </div>
            </>
        )
    }
}
