import React from 'react';
import Head from 'next/head';

const Header = () => {
    return (
        <>
            <Head>
                <title>WebApp</title> 
            </Head>
            <header className="bg-white shadow p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">WebApp</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#home" className="text-gray-700 hover:underline">Home</a></li>
                            <li><a href="#privacy" className="text-gray-700 hover:underline">Privacy</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
