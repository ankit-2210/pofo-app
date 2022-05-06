import React, { Component } from 'react'
import image from "../../images/image.jpg"
import img from "../../images/img.jpg"

class Four extends Component {
    render() {
        return (
            <div>

                <section class="text-gray-600 body-font">
                    <div class="container py-24 mx-auto" style={{ 'marginBottom': 50 }}>

                        <div class="flex flex-wrap -m-4">
                            <div class="xl:w-1/4 md:w-1/2">
                                <div class="bg-gray-100">
                                    <img class="h-60 rounded w-full object-cover object-center" src={image} alt="content" style={{ 'height': '450px' }} />
                                </div>
                            </div>
                            <div class="xl:w-1/4 md:w-1/2">
                                <div class="bg-gray-100" style={{
                                    'height': '450px', 'textAlign': 'center', 'padding': 58, 'background': 'black'
                                }}>
                                    <h3 class="text-left tracking-widest text-gray-400 text-xs font-medium title-font pb-3"> Build perfect websites</h3>
                                    <h2 class="text-left text-lg text-gray-900 font-medium title-font mb-4" style={{ 'color': 'white' }}>Unlimited power and customization possibilities</h2>
                                    <p class="text-left leading-relaxed text-base text-gray-400" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</p>
                                    <button class="mt-3 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read More</button>
                                </div>
                            </div>
                            <div class="xl:w-1/4 md:w-1/2">
                                <div class="bg-gray-100">
                                    <img class="h-40 rounded w-full object-cover object-center" src={img} alt="content" style={{ 'height': '450px' }} />

                                </div>
                            </div>
                            <div class="xl:w-1/4 md:w-1/2">
                                <div class="bg-gray-100" style={{
                                    'height': '450px', 'textAlign': 'center', 'padding': 58, 'background': 'black'
                                }}>
                                    <h3 class="text-left tracking-widest text-gray-400 text-xs font-medium title-font pb-3">Unique digital experiences</h3>
                                    <h2 class="text-left text-lg text-gray-900 font-medium title-font mb-4" style={{ 'color': 'white' }}>Pixel perfect design and clear code delivered to you</h2>
                                    <p class="text-left leading-relaxed text-base text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.
                                    </p>
                                    <button class="mt-3 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        )
    }
}

export default Four