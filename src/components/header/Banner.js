import React, { Component } from 'react'
import blog from "../../../src/images/blog-img1.jpg"
import blog8 from "../../../src/images/latest-blog8.jpg"
import blog5 from "../../../src/images/latest-blog5.jpg"

// https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg
// https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg
// https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg


class Banner extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
                    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>

                    <div class="carousel-inner relative w-full overflow-hidden">
                        <div class="carousel-item active relative float-left w-full">
                            <img
                                src={blog5}
                                class="block w-full"
                                alt="..."
                            />
                            <div class="carousel-caption hidden md:block absolute text-center" style={{
                                'font-size': 25,

                            }} >
                                <h5 class="text-xl" style={{
                                    'font-size': 9,
                                    'word-spacing': 2
                                }}>WE WORK HARD, WE PLAY HARD</h5>
                                <p style={{ 'font-size': 50 }}>A print & digital <br />creative studio</p>
                                <button class="mt-2 mb-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">EXPLORE WORK</button>
                            </div>

                        </div>
                        <div class="carousel-item relative float-left w-full">
                            <img
                                src={blog8}
                                class="block w-full"
                                alt="..."
                            />
                            <div class="carousel-caption hidden md:block absolute text-center" style={{

                                'font-size': 25
                            }} >
                                <h5 class="text-xl" style={{
                                    'font-size': 9,
                                    'word-spacing': 2
                                }}>WE WORK HARD, WE PLAY HARD</h5>
                                <p style={{ 'font-size': 50 }}>We are a web <br /> design agency</p>
                                <button class="mt-2 mb-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">EXPLORE WORK</button>
                            </div>
                        </div>
                        <div class="carousel-item relative float-left w-full">
                            <img
                                src={blog}
                                class="block w-full"
                                alt="..."
                            />
                            <div class="carousel-caption hidden md:block absolute text-center" style={{
                                'font-size': 25
                            }} >
                                <h5 class="text-xl" style={{
                                    'font-size': 9,
                                    'word-spacing': 2
                                }}>WE WORK HARD, WE PLAY HARD</h5>
                                <p style={{ 'font-size': 50 }}>We are delivering <br /> beautiful products</p>
                                <button class="mt-2 mb-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">EXPLORE WORK</button>
                            </div>
                        </div>
                    </div>


                    <button
                        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Banner