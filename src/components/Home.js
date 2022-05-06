import React, { Component } from 'react'
import Navbar from './header/Navbar'
import Banner from './header/Banner'
import About from './services/About';
import Service from './services/Service';
import First from './threesecondlast/First'
import Second from './threesecondlast/Second'
import Third from './threesecondlast/Third'
import Four from './threesecondlast/Four'

import First1 from './last/First1'
import Second1 from './last/Second1'
import Third1 from './last/Third1'
import Four1 from './last/Four1'
import Five from './last/Five'
import Six1 from './last/Six1'

import Footer from './header/Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <About />
                <Service />

                <First />
                <Second />
                <Third />
                <Four />


                <Second1 />
                <First1 />
                <Third1 />
                <Four1 />
                <Five />
                <Six1 />

                <Footer />
            </div>
        );
    }
}

export default Home