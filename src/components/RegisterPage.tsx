import React from "react";

function RegisterPage() {
    return (
        <div>
            <h2 className="text-4xl font-thin mb-8 mt-14 text-center">Create an Account</h2>
            <form action="/register" method="POST">
                <div className="mb-4 flex justify-center">
                    <div className="w-1/3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name"
                        />
                    </div>
                </div>
                <div className="mb-4 flex justify-center">
                    <div className="w-1/3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="mb-4 flex justify-center">
                    <div className="w-1/3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div className="mb-6 flex justify-center">
                    <div className="w-1/3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="repassword">
                            Re-enter Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="repassword"
                            type="password"
                            name="passwordConfirm"
                            placeholder="Re-enter Password"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-1/3">
                        <button
                            className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-2 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;
