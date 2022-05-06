import React, { Component } from 'react'
import laptop from "../../images/laptop.jpg"
import EditOffOutlinedIcon from '@mui/icons-material/EditOffOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

class About extends Component {
    render() {
        return (
            <div>
                <section class="text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img class="object-cover object-center rounded" alt="hero" src={laptop} />
                        </div>
                        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left ">
                            <p style={{ 'color': '#ff0157', 'marginBottom': 10 }}>Easy way to build perfect websites</p>
                            <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">Beautifully handcrafted
                                <br class="hidden lg:inline-block" />templates for your website
                            </h1>
                            <p class="mb-8 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</p>
                            <div class="flex justify-center">
                                <div class="flex flex-col justify-center">
                                    <EditOffOutlinedIcon style={{ color: 'red', 'fontSize': 40 }} />
                                    <h2 style={{ 'font-weight': 'bold', 'marginBottom': 13, 'marginTop': 13 }}>Modern Framework</h2>
                                    <p style={{ 'width': '70%' }}>Lorem Ipsum is simply text the printing and typesetting standard industry</p>
                                </div>
                                <div class="flex flex-col justify-center">
                                    <LibraryBooksOutlinedIcon style={{ color: 'red', 'fontSize': 40 }} />
                                    <h2 style={{ 'font-weight': 'bold', 'marginBottom': 13, 'marginTop': 13 }}>Live Website Builder</h2>
                                    <p style={{ 'width': '70%' }}>Lorem Ipsum is simply text the printing and typesetting standard industry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About