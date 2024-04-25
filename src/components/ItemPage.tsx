import React from "react";
import home from '../assets/house-svgrepo-com.png';
import compass from '../assets/compass-svgrepo-com-2.png'
import searchIcon from '../assets/search-alt-2-svgrepo-com.png'
import rewards from '../assets/google-opinion-rewards-svgrepo-com.png'
import categories from '../assets/category-svgrepo-com.png'
import location from '../assets/location-pin-svgrepo-com.png'

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
                    Website
                    </button>
            </div>
            </nav>

            <div className="flex h-screen bg-gray-100">
                <div className="w-64 bg-white text-black">
                    <nav className="flex flex-col p-4">
                        <a href="#" className="mb-4 flex items-center">
                            <img className="w-8 h-8 mr-2" src={home} alt="Home" />Home
                        </a>

                        <a href="#" className="mb-4 flex items-center">
                            <img className="w-8 h-8 mr-2" src={compass} alt="Home" />Explore Now
                        </a>
                        <a href="#" className="mb-4 flex items-center">
                            <img className="w-8 h-8 mr-2" src={searchIcon} alt="Home" />Search
                        </a>
                        <a href="#" className="mb-4 flex items-center">
                            <img className="w-8 h-8 mr-2" src={rewards} alt="Home" />Rewards
                        </a>
                        <a href="#" className="mb-4 flex items-center">
                            <img className="w-8 h-8 mr-2" src={categories} alt="Home" />Categories
                        </a>
                        <a href="#" className="mb-4 flex items-center">
                            <img className="w-8 h-8 mr-2" src={location} alt="Home" />Location
                        </a>
                    </nav>
                </div>
                <div className="flex-1 p-10">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button
                        </button>
                    </div>
                </div>

                </div>
            </div>

        </div>
        




    )
}

export default ItemPage ;