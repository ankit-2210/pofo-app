import React, { Component } from 'react'
import logo1 from "../../images/logo-1.png"
import logo2 from "../../images/logo-2.png"
import logo3 from "../../images/logo-3.png"
import logo4 from "../../images/logo-4.png"

class Six1 extends Component {
    render() {
        return (
            <div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">

                        <div class="flex flex-wrap -m-4">
                            <div class="xl:w-1/4 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg">
                                    <img class="h-30 rounded w-full object-cover object-center mb-6" src={logo1} alt="content" />

                                </div>
                            </div>
                            <div class="xl:w-1/4 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg">
                                    <img class="h-30 rounded w-full object-cover object-center mb-6" src={logo2} alt="content" />

                                </div>
                            </div>
                            <div class="xl:w-1/4 md:w-1/2 p-4">
                                <div class="p-6 rounded-lg">
                                    <img class="h-30 rounded w-full object-cover object-center mb-6" src={logo3} alt="content" />

                                </div>
                            </div>
                            <div class="xl:w-1/4 md:w-1/2 p-4">
                                <div class=" p-6 rounded-lg">
                                    <img class="h-30 rounded w-full object-cover object-center mb-6" src={logo4} alt="content" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>

        )
    }
}

export default Six1