// import React from "react"; // not needed in React 17+
import { Link } from "react-router";


function Logo({ width = "40", height = "40" }) {
    return (
        <Link to="/">
        <div className="mg-5 flex items-center space-x-2">
            <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ec433220785489.562f11265811d.jpg"
                alt="TravelBlog Logo"
                width={width}
                height={height}
                className="object-contain rounded-full"
            />
        </div>
        </Link>
    );
}

export default Logo;
