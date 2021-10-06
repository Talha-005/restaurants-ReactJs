import React, { Component } from 'react'
import NavBar from './NavBar';
import { Carousel } from 'react-bootstrap'
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';
import img7 from '../Images/img7.jpg';
import img8 from '../Images/img8.jpg';

export default class Home extends Component {
    render() {
        return (
            <div className='App'>
                <NavBar />
                <h3 className="headings">Welcome to Restaurants API</h3>
                <br /><br />
                <Carousel>
                    <Carousel.Item>
                        <img src={img1} alt="res_Images" width="500px" height='400px' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img2} alt="res_Images" width="500px" height='400px' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} alt="res_Images" width="500px" height='400px' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img4} alt="res_Images" width="500px" height='400px' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img5} alt="res_Images" width="500px" height='400px' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img6} alt="res_Images" width="500px" height='400px' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img7} alt="res_Images" width="500px" height='400px' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img8} alt="res_Images" width="500px" height='400px' />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
