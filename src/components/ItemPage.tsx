import React from "react";
import home from '../assets/house-svgrepo-com.png';
import compass from '../assets/compass-svgrepo-com-2.png'
import searchIcon from '../assets/search-alt-2-svgrepo-com.png'
import rewards from '../assets/google-opinion-rewards-svgrepo-com.png'
import categories from '../assets/category-svgrepo-com.png'
import location from '../assets/location-pin-svgrepo-com.png'
import watches from '../assets/watchpng.parspng.com-10.png'
import camera from '../assets/25480_D800_left.png'
import shoe from '../assets/custom-nike-dunk-high-by-you-shoes.png'

function ItemPage(){
    return(
        <div>
            <nav className="bg-white px-4 py-2 flex justify-between items-center border-b-2 border-gray-300">
  
            <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-gray-800">Loci</span>
                <div className="border-l-2 border-gray-300 h-8"></div>
                <div className="flex items-center">
                <span className="font-bold text-xl text-gray-800 mr-2">37</span>
                <div className="flex flex-col text-sm">
                    <span className="text-gray-600">Orders</span>
                    <span className="text-gray-400">Last 2 Days</span>
                </div>
            </div>
            </div>
                <div className="flex items-center gap-2"> 
                    <button className="px-6 py-2 rounded-full bg-gray-300 focus:outline-none shadow">
                    Dashboard
                    </button>
                    <button className="px-6 py-2 -ml-4 rounded-full bg-white focus:outline-none shadow-xl z-10">
                    Welcome name!
                    </button>
            </div>
            </nav>

            <div className="flex h-screen bg-gray-100">
                <div className="w-74 bg-white text-black">
                    <nav className="flex flex-col p-4">
                        <a href="/landing" className="mb-4 flex items-center">
                            <img className="w-8 h-8 mr-2" src={home} alt="Home" />Home
                        </a>

                        <a href="/landing" className="mb-4 flex items-center">
                            <img className="w-8 h-8 mr-2" src={compass} alt="Home" />Explore Now
                        </a>
                        <a href="/landing" className="mb-4 flex items-center">
                            <img className="w-8 h-8 mr-2" src={searchIcon} alt="Home" />Search
                        </a>
                        <a href="/landing" className="mb-4 flex items-center">
                            <img className="w-8 h-8 mr-2" src={rewards} alt="Home" />Rewards
                        </a>
                        <a href="/landing" className="mb-4 flex items-center">
                            <img className="w-8 h-8 mr-2" src={categories} alt="Home" />Categories
                        </a>
                        <a href="/landing" className="mb-4 flex items-center">
                            <img className="w-8 h-8 mr-2" src={location} alt="Home" />Location
                        </a>
                    </nav>
                </div>
                <div className="flex flex-col h-screen bg-gray-100">
            {/* Navbar remains unchanged */}

            {/* Main content section */}
            <div className="flex flex-1 overflow-x-auto">
                {/* Sidebar remains unchanged */}

                {/* Cards container */}
                <div className="flex-grow p-10 space-x-6 overflow-auto">
                    {/* Card 1 */}
                    <div className="inline-block w-80 h-auto bg-custom-salmon rounded-2xl shadow-2xl p-6 text-white relative">
                        <p className="text-sm mb-4">Cheap Luxury</p>
                        <h2 className="font-bold text-3xl mb-2">From Affordable To Designer</h2>
                        <button className="bg-button-salmon hover:bg-pink-700 text-white font-bold py-2 px-4 rounded text-sm shadow-2xl">
                            Shop by Category
                        </button>
                        <img className="w-48 h-48 object-contain absolute bottom-4 right-4" src={watches} alt="Watches"/>
                    </div>

                    {/* Card 2 */}
                    <div className="inline-block w-80 h-auto bg-custom-purple rounded-2xl shadow-2xl p-6 text-white relative">
                        <img className="w-48 h-48 object-contain absolute bottom-4 right-4" src={camera} alt="Camera"/>
                        <p className="text-sm mb-4">Photography</p>
                        <h2 className="font-bold text-3xl mb-2">Nikon DSLR D-800</h2>
                        <button className="bg-button-purple hover:bg-pink-700 text-white font-bold py-2 px-4 rounded text-sm shadow-2xl">
                            Shop by Category
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="inline-block w-80 h-auto bg-custom-green rounded-2xl shadow-2xl p-6 text-white relative">
                        <p className="text-sm mb-4">Bring Bold Fashion</p>
                        <h2 className="font-bold text-3xl mb-2">Shop Nike, Adidas & More</h2>
                        <button className="bg-button-green hover:bg-pink-700 text-white font-bold py-2 px-4 rounded text-sm shadow-2xl">
                            Shop by Category
                        </button>
                        <img className="w-48 h-48 object-contain absolute bottom-4 right-4" src={shoe} alt="Shoes"/>
                    </div>
                </div>
            </div>
        </div>

            </div>
        </div>
    )
}

export default ItemPage ;