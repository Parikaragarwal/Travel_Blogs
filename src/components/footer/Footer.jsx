import { Link } from 'react-router-dom';

const Footer = () => {
return (
<footer className="bg-blue-900 text-white py-6">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold">Travel Blog</h3>
            <p className="text-sm">Your go-to travel guide</p>
        </div>
        
        <div className="flex space-x-6">
            <Link to="/" className="hover:text-orange-400">Home</Link>
            <Link to="/about" className="hover:text-orange-400">About</Link>
            <Link to="/all-posts" className="hover:text-orange-400">Blogs</Link>
            <Link to="/contact" className="hover:text-orange-400">Contact</Link>
        </div>
        
        <div className="mt-4 sm:mt-0 text-center sm:text-right">
            <p className="text-sm">© 2025 Travel Blog. All rights reserved.</p>
        </div>
    </div>
</footer>
);
};

export default Footer;
