import React, { Component } from 'react'
import avtar13 from "../../images/avtar-13.jpg"
import avtar14 from "../../images/avtar-14.jpg"
import avtar15 from "../../images/avtar-15.jpg"

class Third1 extends Component {
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
                                <p class="font-small title-font mb-2 text-gray-900" style={{ 'fontSize': 12, 'color': 'grey' }}>WHAT PEOPLE SAY</p>
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">CLIENTS WORDS</h1>
                                <div class="h-1 w-20 bg-red-400 rounded" style={{
                                    'text-align': 'center',
                                    'margin': 'auto'
                                }}></div>
                            </div>
                        </div>


                        <div class="flex flex-wrap -m-4">
                            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div class="h-full text-center">
                                    <img alt="testimonial" class="w-22 h-25 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={avtar13} />
                                    <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                    <p class="text-gray-500">Senior Product Designer</p>
                                </div>
                            </div>
                            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div class="h-full text-center">
                                    <img alt="testimonial" class="w-22 h-25 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={avtar14} />
                                    <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                                    <p class="text-gray-500">UI Develeoper</p>
                                </div>
                            </div>
                            <div class="lg:w-1/3 lg:mb-0 p-4">
                                <div class="h-full text-center">
                                    <img alt="testimonial" class="w-22 h-25 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={avtar15} />
                                    <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                    <p class="text-gray-500">CTO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default Third1