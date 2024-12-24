import React from 'react';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Авторизация</h1>
            <form className="bg-white p-6 rounded shadow-md w-80">
                <div className="mb-4">
                    <label htmlFor="login" className="block text-gray-700 font-medium mb-2">Логин:</label>
                    <input
                        type="text"
                        id="login"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Введите логин"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Введите пароль"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Войти
                </button>
            </form>
        </div>
    );
};

export default Login;
