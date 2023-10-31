// LoginComponent.tsx
import React, { FC, useState } from 'react';
import TextInput from "../../components/InputFields/TextInput";
import Password from "../../components/InputFields/Password";

interface Props {}

const LoginComponent: FC<Props> = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-dark-purple to-light-purple py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            {/*<input*/}
                            {/*    id="email-address"*/}
                            {/*    name="email"*/}
                            {/*    type="email"*/}
                            {/*    autoComplete="email"*/}
                            {/*    required*/}
                            {/*    value={email}*/}
                            {/*    onChange={(e) => setEmail(e.target.value)}*/}
                            {/*    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"*/}
                            {/*    placeholder="Email address"*/}
                            {/*/>*/}
                            <TextInput title={"User Name"} inputType={"text"}/>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <TextInput title={"Password"} inputType="password"/>
                            {/*<input*/}
                            {/*    id="password"*/}
                            {/*    name="password"*/}
                            {/*    type="password"*/}
                            {/*    autoComplete="current-password"*/}
                            {/*    required*/}
                            {/*    value={password}*/}
                            {/*    onChange={(e) => setPassword(e.target.value)}*/}
                            {/*    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"*/}
                            {/*    placeholder="Password"*/}
                            {/*/>*/}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
