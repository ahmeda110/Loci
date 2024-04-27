import React from "react";

function LandingPage(){
    return(
        <div>
            <nav className="bg-white px-4 py-2 flex justify-between items-center border-b-2 border-gray-300">
                
                // Left side (e.g., logo or title)
                <div className="flex items-center space-x-4">
                    <span className="text-4xl font-bold text-gray-800">Loci</span>
                </div>

                // Center buttons 
                <div className="flex-grow flex justify-center">
                    <button className="px-6 py-2 text-black font-bold hover:text-gray-500 focus:outline-none">
                        Trending
                    </button>
                    <button className="px-6 py-2 text-black font-bold hover:text-gray-500 focus:outline-none">
                        Testimonials
                    </button>
                    <button className="px-6 py-2 text-black font-bold hover:text-gray-500 focus:outline-none">
                        About
                    </button>
                </div>

                // Right side login and shop now buttons
                <div className="flex items-center gap-2">
                    <button className="px-6 py-2 text-black font-bold hover:text-gray-500 focus:outline-none">
                        Log in
                    </button>
                    <button className="px-6 py-2 rounded bg-purple-500 text-white font-bold hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple shadow-lg">
                        SHOP NOW
                    </button>
                </div>
            </nav>
        </div>

    )
}

export default LandingPage ;