import React, { Component } from 'react'
import Image1 from "../../images/image-2.jpg"
import Image2 from "../../images/image-4.jpg"
import Image3 from "../../images/blog-img2.jpg"

class Third extends Component {
    render() {
        return (
            <div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap w-full mb-20" style={{
                            'text-align': 'center',
                            'justify-content': 'center'
                        }}>
                            <div class="lg:w-1/2 w-full mb-6 lg:mb-0" >
                                <p class="font-small title-font mb-2 text-gray-900" style={{ 'fontSize': 12, 'color': 'grey' }}>WHAT WE DO</p>
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">OUR SERVICES</h1>
                                <div class="h-1 w-20 bg-red-400 rounded" style={{
                                    'text-align': 'center',
                                    'margin': 'auto'
                                }}></div>
                            </div>
                        </div>

                        <div class="flex flex-wrap -m-4">
                            <div class="xl:w-1/3 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg">
                                    <img class="h-40 rounded w-full object-cover object-center mb-6" src={Image1} alt="content" style={{ 'height': '45vh', 'margin': 20 }} />
                                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-2">Design and Development </h2>
                                    <h3 class="tracking-widest text-center text-grey-500 text-xs font-medium title-font">600+ We created web design</h3>
                                </div>
                            </div>
                            <div class="xl:w-1/3 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg">
                                    <img class="h-40 rounded w-full object-cover object-center mb-6" src={Image2} alt="content" style={{ 'height': '45vh', 'margin': 20 }} />
                                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-2">Social Media Marketing </h2>
                                    <h3 class="tracking-widest text-center text-grey-500 text-xs font-medium title-font">475+ We completed marketing</h3>
                                </div>
                            </div>
                            <div class="xl:w-1/3 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg">
                                    <img class="h-40 rounded w-full object-cover object-center mb-6" src={Image3} alt="content" style={{ 'height': '45vh', 'margin': 20 }} />
                                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-2">Mobile App Development </h2>
                                    <h3 class="tracking-widest text-center text-grey-500 text-xs font-medium title-font">475+ We created mobile app</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


            </div>
        )
    }
}

export default Third