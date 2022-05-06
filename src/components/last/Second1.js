import React, { Component } from 'react'
import back from "../../images/back.png"
import down from "../../images/download.jpg"

class Second1 extends Component {
    render() {
        const myStyle = {
            backgroundImage: `url(${down})`,
            // height: '100vh',
        }

        return (
            <div>
                <section class="text-gray-600 body-font" style={myStyle}>
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            {/* <img class="object-cover object-center rounded" alt="hero" /> */}
                            <img src={back} alt="" class="w-100" />
                        </div>
                        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-1000" style={{ 'color': 'white' }}>Unique, truly responsive
                                <br class="hidden lg:inline-block" /> and functional websites
                            </h1>
                            <p class="mb-8 leading-relaxed" style={{ 'fontWeight': 'bold' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div class="flex justify-center">
                                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">GET TO KNOW US</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Second1