import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';

export default class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch('http://localhost:3000/restaurants')
            .then((response) => {
                response.json().then((result) => { this.setState({ list: result }) }
                )
            })
    }

    deleteHandle = (id) => {
        fetch('http://localhost:3000/restaurants/' + id, {
            method: 'DELETE',
        }).then((res) => {
            res.json().then((result) => {
                alert('deleted')
                this.getData()
            })
        })
    }

    render() {
        return (
            <>
                <NavBar />
                <div className='container'>
                    <h2 className="headings">Restaurant List</h2>
                    <br />
                    {
                        this.state.list ?
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
                                        this.state.list.map((item, i) =>
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
                            </Table> : <p>Please wait.....</p>
                    }
                </div></>
        )
    }
}
