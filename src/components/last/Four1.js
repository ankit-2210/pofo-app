import React, { Component } from 'react'
import latest5 from "../../images/latest-blog5.jpg"
import latest6 from "../../images/latest-blog6.jpg"
import latest7 from "../../images/latest-blog7.jpg"
import latest8 from "../../images/latest-blog8.jpg"

class Four1 extends Component {
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
                                <p class="font-small title-font mb-2 text-gray-900" style={{ 'fontSize': 12, 'color': 'grey', 'fontWeight': 'bold' }}>PUBLISH WHAT YOU THINK</p>
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">LATEST BLOGS</h1>
                                <div class="h-1 w-20 bg-red-400 rounded" style={{
                                    'text-align': 'center',
                                    'margin': 'auto'
                                }}></div>
                            </div>
                        </div>



                        <div class="flex flex-wrap -m-4">
                            <div class="xl:w-1/4 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg">
                                    <img class="h-60 rounded w-full object-cover object-center mb-6" src={latest5} alt="content" />
                                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font" style={{ 'fontSize': 12, 'color': 'grey', 'marginBottom': 10 }}>25 APRIL 2017 | BY JAY BENJAMIN</h3>
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">I like the body. I like to design everything to do with the body.</h2>
                                    <p class="leading-relaxed text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text...</p>
                                </div>
                            </div>
                            <div class="xl:w-1/4 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg">
                                    <img class="h-60 rounded w-full object-cover object-center mb-6" src={latest6} alt="content" />
                                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font" style={{ 'fontSize': 12, 'color': 'grey', 'marginBottom': 10 }}>20 APRIL 2017 | BY HERMAN MILLER</h3>
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Styles come and go. Design is a language, not a style.</h2>
                                    <p class="leading-relaxed text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text...</p>
                                </div>
                            </div>
                            <div class="xl:w-1/4 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg">
                                    <img class="h-60 rounded w-full object-cover object-center mb-6" src={latest7} alt="content" />
                                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font" style={{ 'fontSize': 12, 'color': 'grey', 'marginBottom': 10 }}>15 MARCH 2017 | BY HUGH MACLEOD</h3>
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Recognizing the need is the primary condition for design.</h2>
                                    <p class="leading-relaxed text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text...</p>
                                </div>
                            </div>
                            <div class="xl:w-1/4 md:w-1/2 p-4">
                                <div class=" p-6 rounded-lg">
                                    <img class="h-60 rounded w-full object-cover object-center mb-6" src={latest8} alt="content" />
                                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font" style={{ 'fontSize': 12, 'color': 'grey', 'marginBottom': 10 }}>10 MARCH 2017 | BY JAY BENJAMIN</h3>
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Get in over your head as often and as joyfully as possible.</h2>
                                    <p class="leading-relaxed text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default Four1