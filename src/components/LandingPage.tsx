import React, { useRef, useEffect } from 'react';
import login1 from '../assets/log-in-page-image-1.png';
import login2 from '../assets/log-in-page-image-2.png';
import cart from '../assets/shopping-cart.png';
import fire from '../assets/fire-icon.png';
import '../LandingPage.css';

function LandingPage() {
    const testimonialContainerRef = useRef<HTMLDivElement>(null);

    // Set up autoscroll interval
    useEffect(() => {
        const autoscrollInterval = setInterval(() => {
            if (testimonialContainerRef.current) {
                testimonialContainerRef.current.scrollLeft += testimonialContainerRef.current.offsetWidth;
                if (
                    testimonialContainerRef.current.scrollLeft >=
                    testimonialContainerRef.current.scrollWidth - testimonialContainerRef.current.offsetWidth
                ) {
                    testimonialContainerRef.current.scrollLeft = 0;
                }
            }
        }, 3000); // Autoscroll every 3 seconds

        return () => clearInterval(autoscrollInterval);
    }, []);

    // Get the current date
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    const scrollToTestimonials = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const testimonialsSection = document.getElementById('testimonials');
        if (testimonialsSection) {
            testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const scrollToTrending = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const trendingSection = document.getElementById('trending');
        if (trendingSection) {
            trendingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

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
                    <a href="#trending" onClick={scrollToTrending}>
                        <button className="px-6 py-2 text-black font-bold hover:text-gray-500 focus:outline-none">
                            Trending
                        </button>
                    </a>
                    <a href="#testimonials" onClick={scrollToTestimonials}>
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
            <div id="top" className="pt-12 mb-12">
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

            <div id="trending" className="border-black border mt-20 ml-10 mr-10">
                {/* Trending section */}
                {/* Container for the two parts */}
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center" style={{ height: '40vw' }}>
                    {/* Left half */}
                    <div className="w-full h-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-center px-4 bg-dark-blue">
                        {/* Large navy blue square with "Trending" */}
                        <img src={fire} alt="Fire Icon" className="mx-auto" style={{ width: '100px', height: '100px', marginTop: '30px', marginBottom: '-30px'}} />
                        <div className="trending-title bg-navy-blue text-white py-8">
                            <h1 className="text-7xl font-bold mb-4">Trending</h1>
                            <h2 className="text-4xl font-thin"> BRANDS & PRODUCTS </h2>
                        </div>
                    </div>

                    {/* Right half */}
                    <div className="w-full md:w-1/2 px-4">
                        {/* Current date */}
                        <div className="current-date">
                            <p className="text-2xl">
                                {month} {day}, {year}
                            </p>
                        </div>

                        <div className="flex justify-between mt-2">
                            <div className="placeholder-square bg-gray-400 h-60 w-1/2"></div>
                            <div className="placeholder-square bg-black h-60 w-1/2"></div>
                            <div className="placeholder-square bg-gray-400 h-60 w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="testimonials" className="py-8 bg-gray-100">
                {/* Container for the testimonial section */}
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Left half for the testimonial */}
                    <div className="w-full md:w-1/2 text-center md:text-center px-4">
                        {/* Add the image of the shopping cart */}
                        <img src={cart} alt="Shopping Cart" className="mx-auto" style={{ width: '200px', height: '200px', marginBottom: '-50px' }} />

                        {/* Text for 365 orders in the last 2 days */}
                        <p className="text-9xl font-bold text-gray-800">
                            365
                        </p>

                        <p className="text-7xl font-thin text-gray-800">
                            Orders
                        </p>

                        <p className="text-5xl font-thin text-gray-800">
                            In The Last 2 Days
                        </p>
                    </div>

                    {/* Right half for testimonials */}
                    <div className="w-full md:w-1/2 px-4 relative">
                        {/* Container for testimonials */}
                        <div
                            className="testimonials-container bg-blue-500 p-4 rounded-lg mt-16 mb-16"
                            ref={testimonialContainerRef}
                            style={{ overflowX: 'hidden', width: '30rem', height: '30rem', display: 'flex', position: 'relative' }}
                        >
                            {/* Testimonial items */}
                            <div className="testimonial-content" style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>
                                <div className="testimonial-item w-full text-white" style={{ minWidth: '30rem' }}>
                                    <p className="text-2xl">"This is an amazing service! I highly recommend it!"</p>
                                </div>
                                <div className="testimonial-item w-full text-white" style={{ minWidth: '30rem' }}>
                                    <p className="text-2xl">"Outstanding quality and great customer support."</p>
                                </div>
                                <div className="testimonial-item w-full text-white" style={{ minWidth: '30rem' }}>
                                    <p className="text-2xl">"I've never had such a smooth shopping experience!"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about" className="bg-dark-blue w-full h-32 md:h-48">
                {/* About section */}
            </div>
        </div>
    );
}

export default LandingPage;
