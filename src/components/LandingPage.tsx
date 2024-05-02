import React from "react";
import login1 from '../assets/log-in-page-image-1.png';
import login2 from '../assets/log-in-page-image-2.png';
import '../LandingPage.css'; // Importing the CSS file for styles

function LandingPage() {
    return (
        <div>
            {/* Navigation bar */}
            <nav className="bg-white px-4 py-2 flex justify-between items-center border-b-2 border-gray-300">
                {/* Left side nav */}
                <div className="flex items-center space-x-4">
                    <a href="#top">
                        <span className="text-4xl font-bold text-gray-800">Loci</span>
                    </a>
                </div>

                {/* Centered buttons */}
                <div className="flex-grow flex justify-center space-x-4">
                    <a href="#trending">
                        <button className="px-6 py-2 text-black font-bold hover:text-gray-500 focus:outline-none">
                            Trending
                        </button>
                    </a>
                    <a href="#testimonials">
                        <button className="px-6 py-2 text-black font-bold hover:text-gray-500 focus:outline-none">
                            Testimonials
                        </button>
                    </a>
                    <a href="#about">
                        <button className="px-6 py-2 text-black font-bold hover:text-gray-500 focus:outline-none">
                            About
                        </button>
                    </a>
                </div>

                {/* Right side nav */}
                <div className="flex items-center gap-2">
                    <button className="px-6 py-2 text-black font-bold hover:text-gray-500 focus:outline-none">
                        Log in
                    </button>
                    <button className="px-6 py-2 rounded bg-purple-500 text-white font-bold hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple shadow-lg">
                        SHOP NOW
                    </button>
                </div>
            </nav>

            {/* Content sections */}
            <div id="top" className="pt-12">
                {/* Top of the page */}
                <div className="flex justify-between pl-16 pr-16">
                    {/* Text on the left */}
                    <div className="text-left w-3/4">
                        <h1 style={{ lineHeight: '1.1' }} className="text-6xl font-bold text-gray-800">
                            ONLINE
                            <br />
                            SHOPPING
                            <br />
                            MADE{" "}
                            <span className="text-purple-600 underline">
                                EASY
                            </span>
                        </h1>

                        {/* Smaller text underneath */}
                        <p className="text-2xl font-bold text-gray-500 mt-2 leading-none">
                            Browse thousands of stores with the 
                            push of a button.
                        </p>

                        <button className="px-8 py-4 rounded bg-purple-500 text-white font-bold hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple shadow-lg mt-6 text-3xl">
                        SHOP NOW
                        </button>
                    </div>

                    {/* Container for the images */}
                    <div className="flex items-start justify-end md:ml-auto md:pr-4">
                        {/* Add right margin and gap between the images */}
                        <img src={login2} alt="login2" className="w-1/4 mr-4" />
                        <img src={login1} alt="login1" className="w-1/4 ml-2 md:ml-4" style={{ marginTop: '80px' }} />
                    </div>
                </div>
            </div> 

            {/* Footer with dark blue rectangle and scrolling text
            <div className="fixed bottom-0 left-0 w-full bg-dark-blue text-white">
                <div className="scrolling-text py-2 text-center">
                    <span> SHOP TOUSANDS OF BRANDS AT ONCE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PROUDLY LOCAL </span>
                    <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SHOP TOUSANDS OF BRANDS AT ONCE  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROUDLY LOCAL </span>
                </div>
            </div> */}


            <div id="trending">
                {/* Trending section */}
            </div>

            <div id="testimonials" className="py-8 bg-gray-100">
                {/* Container for the testimonial section */}
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Left half for the testimonial */}
                    <div className="w-full md:w-1/2 text-center md:text-left px-4">
                        <p className="text-3xl font-bold text-gray-800">
                            365 orders in the last 2 days
                        </p>
                    </div>

                    {/* Right half for any other content (you can add content here) */}
                    <div className="w-full md:w-1/2 px-4">
                        {/* You can add other content here */}
                    </div>
                </div>
            </div>

            <div id="about">
                {/* About section */}
            </div>

            {/* Add any other content here */}
        </div>
    );
}

export default LandingPage;
