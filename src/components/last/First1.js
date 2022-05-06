import React, { Component } from 'react'

class First1 extends Component {
    render() {
        return (
            <div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4 text-center">
                            <div class="p-4 sm:w-1/4 w-1/2 flex">
                                <span class="material-symbols-outlined" style={{ 'fontSize': 50, 'paddingBottom': 20 }} >
                                    desktop_windows
                                </span>
                                <div class="pl-5">
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">350</h2>
                                    <p class="leading-relaxed">HAPPY CLIENTS</p>
                                </div>
                            </div>
                            <div class="p-4 sm:w-1/4 w-1/2 flex">
                                <span class="material-symbols-outlined" style={{ 'fontSize': 50, 'paddingBottom': 20 }}>
                                    photo_camera
                                </span>
                                <div class="pl-5">
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">780</h2>
                                    <p class="leading-relaxed">PHOTO CAPTURE</p>
                                </div>
                            </div>
                            <div class="p-4 sm:w-1/4 w-1/2 flex">
                                <span class="material-symbols-outlined" style={{ 'fontSize': 50, 'paddingBottom': 20 }}>
                                    laptop_chromebook
                                </span>
                                <div class="pl-5">
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">850</h2>
                                    <p class="leading-relaxed">WORK COMPLETED</p>
                                </div>
                            </div>
                            <div class="p-4 sm:w-1/4 w-1/2 flex">
                                <span class="material-symbols-outlined" style={{ 'fontSize': 50, 'paddingBottom': 20 }}>
                                    tv
                                </span>
                                <div class="pl-5">
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">650</h2>
                                    <p class="leading-relaxed">TELEPHONE TALK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default First1