import React, { Component } from 'react'
import business from "../../images/business.jpg"
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

class Second extends Component {
    render() {
        return (
            <div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap">

                        <div class="flex flex-col flex-wrap lg:py-6 mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center pl-10">
                            <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900 lg:pb-10 text-left">We are delivering
                                <br /> beautiful digital <br />products for you
                            </h1>
                            <div class="flex flex-col mb-10 lg:items-start items-center text-left">
                                <div class="flex">
                                    <div class="w-12 h-12 mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-3">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <DesktopWindowsOutlinedIcon />
                                        </svg>
                                    </div>
                                    <div class="flex-grow lg:text-left w-50">
                                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Powerful Website Builder</h2>
                                        <p class="leading-relaxed text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>

                                    </div>
                                    <div class="pl-10"></div>

                                </div>
                            </div>
                            <div class="flex flex-col mb-10 lg:items-start items-center text-left">
                                <div class="flex">
                                    <div class="w-12 h-12 mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-3">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <CameraAltOutlinedIcon />
                                        </svg>
                                    </div>
                                    <div class="flex-grow lg:text-left w-50">
                                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Different Layout Type</h2>
                                        <p class="leading-relaxed text-base ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>

                                    </div>

                                </div>
                            </div>
                            <div class="flex flex-col mb-10 lg:items-start items-center text-left">
                                <div class="flex">
                                    <div class="w-12 h-12  mr-10  inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-3">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <MenuBookOutlinedIcon />
                                        </svg>
                                    </div>
                                    <div class="flex-grow lg:text-left w-50">
                                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">True Responsiveness</h2>
                                        <p class="leading-relaxed text-base ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>

                                    </div>

                                </div>
                            </div>
                            <div class="flex flex-col mb-10 lg:items-start items-center text-left">
                                <div class="flex">
                                    <div class="w-12 h-12  mr-10  inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-3">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <BusinessCenterOutlinedIcon />
                                        </svg>
                                    </div>
                                    <div class="flex-grow lg:text-left w-50">
                                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">True Responsiveness</h2>
                                        <p class="leading-relaxed text-base ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                            <img alt="feature" class="object-cover object-center h-full w-full" src={business} />
                        </div>


                    </div>
                </section>
            </div>
        )
    }
}

export default Second