import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import NavBar from './NavBar';

export default class RestaurantUpdate extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            address: null,
            rating: null,
        }
    }
    componentDidMount = () => {
        fetch('http://localhost:3000/restaurants/' + this.props.match.params.id)
            .then((response) => {
                response.json().then((result) => {
                    this.setState({
                        name: result.name,
                        address: result.address,
                        rating: result.rating,
                    })
                }
                )
            }
            )
    }
    updateHandle=()=>{
        fetch("http://localhost:3000/restaurants/"+this.props.match.params.id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((res) => {
            res.json().then((result) => alert('Updated'))
        });
    }
    render() {

        return (
            <>  <NavBar />
            <div className='container'>
                <h2 className="headings">Restaurant update</h2><br />

                <Form >
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={this.state.name} placeholder="Restaurant Name" type="text" name="name" onChange={(event) => { this.setState({ name: event.target.value }) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={this.state.address} placeholder="Restaurant Address" type="text" name="address" onChange={(event) => { this.setState({ address: event.target.value }) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Rating</Form.Label>
                        <Form.Control value={this.state.rating} placeholder="Restaurant Rating" type="text" name="rating" onChange={(event) => { this.setState({ rating: event.target.value }) }} />
                    </Form.Group>

                    <Button onClick={this.updateHandle} variant="secondary">Update</Button>
                </Form>

            </div>
        </>)
    }
}
