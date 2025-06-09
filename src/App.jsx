import { useState, useEffect } from 'react';
import './App.css';
import "tailwindcss"; // Ensure Tailwind CSS is imported
import { useDispatch } from 'react-redux';
import authservice from './Appwrite/auth';
import { login, logout } from "../store/authSlice";
import { Header, Footer } from './components'; // Make sure Header and Footer are defined
import { Outlet, useLocation } from 'react-router-dom'; // Import useLocation

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const location = useLocation(); // Get the current route location

    useEffect(() => {
        authservice.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => setLoading(false));
    },[]); 

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                Loading Data...
            </div>
        );
    }

    const isAuthPage = location.pathname === '/login' || location.pathname === '/signUp';
    const appBgClass = isAuthPage ? 'bg-orange-100 dark:bg-gray-900' : 'bg-orange-300';

    return (
        <div className={`min-h-screen flex flex-col ${appBgClass}`}>
            {/* Header should be fixed or sticky to "float" over content */}
            <Header />

            {/* Main content area */}
            <main className="flex-grow flex flex-col items-center justify-center w-full pt-16">
                {/* pt-16 (or equivalent to your Header's height) pushes content below the fixed header */}
                {/* flex flex-col items-center justify-center will center the Outlet content */}
                <Outlet />
            </main>

            {/* Optionally, hide the Footer on auth pages if you want a cleaner look */}
            {!isAuthPage && <Footer />}
        </div>
    );
}

export default App;