import React, { Component } from 'react'
import { Form, Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';

export default class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null,
            noData: false,
            lastSearch: null
        }
    }

    deleteHandle = (id) => {
        fetch('http://localhost:3000/restaurants/' + id, {
            method: 'DELETE',
        }).then((res) => {
            res.json().then((result) => {
                alert('deleted')
                this.searchHandle(this.state.lastSearch)
            })
        })
    }

    searchHandle = (key) => {
        this.setState({ lastSearch: key });
        fetch('http://localhost:3000/restaurants?q=' + key)
            .then((data) => (data.json().then((res) => {
                if (res.length > 0) {
                    this.setState({ searchData: res, noData: false });
                }
                else {
                    this.setState({ noData: true, searchData: null })
                }
            })))
    }
    render() {
        return (
            <>
                <NavBar />
                <Container>
                    <h2 className="headings">Restaurant Search</h2><br />

                    <Form >
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="Search Restaurant" type="text" name="search" onChange={(event) => this.searchHandle(event.target.value)} />
                        </Form.Group></Form>


                    <div>
                        {
                            this.state.searchData ?
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Sr No.</th>
                                            <th>Name</th>
                                            <th>Rating</th>
                                            <th>Address</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.searchData.map((item, i) =>
                                            (<tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                                {localStorage.getItem('login') ?
                                                    <>
                                                        <td><Link to={'/update/' + item.id} ><FontAwesomeIcon icon={faEdit} /></Link>&emsp;<span style={{ cursor: 'pointer' }} onClick={() => this.deleteHandle(item.id)}><FontAwesomeIcon icon={faTrash} color='red' /></span></td></> : null
                                                }
                                            </tr>)
                                            )
                                        }
                                    </tbody>
                                </Table> : ""
                        }
                        {
                            this.state.noData ? <><br /><h4>Data not found</h4></> : null
                        }
                    </div>
                </Container></>
        )
    }
}
