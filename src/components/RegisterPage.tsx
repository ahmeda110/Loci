import React from "react";

function RegisterPage() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const email = form.email.value;
        const password = form.password.value;
        const passwordConfirm = form.passwordConfirm.value;

        const emailRegex = /\S+@\S+\.\S+/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Password must contain at least one upper case letter, one lower case letter, one number, one symbol ( @$!%?& ), and be at least 8 characters long.");
            return;
        }

        if (password !== passwordConfirm) {
            alert("Passwords do not match.");
            return;
        }

        form.submit(); 
    };

    return (
        <div>
            <h2 className="text-4xl font-thin mb-8 mt-14 text-center">Create an Account</h2>
            <form action="/register" method="POST" onSubmit={handleSubmit}>
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
                        <p className="text-xs text-gray-500 mb-2"> Password must contain at least one upper case letter, one lower case letter, one number, one symbol, and be at least 8 characters long. </p>
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
