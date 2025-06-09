import React from 'react'; // Good practice to import React

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600", // Renamed to 'bgColor' for clarity and Tailwind convention
    textColor = "text-white",
    className = "",
    ...props // To capture any other standard button props like onClick, disabled, etc.
}) {
    return (
        <button
            className={`
                inline-flex 
                items-center 
                justify-center
                px-6 py-3 
                rounded-lg
                font-semibold 
                text-base 
                shadow-md 
                transition-all duration-200 ease-in-out 
                focus:outline-none 
                focus:ring-2
                focus:ring-offset-2 
                focus:ring-current
                ${bgColor}
                ${textColor}
                hover:brightness-90 
                active:scale-95 
                disabled:opacity-50
                disabled:cursor-not-allowed
                ${className} 
            `}
            type={type}
            {...props} // Spread any additional props (like onClick, disabled)
        >
            {children}
        </button>
    );
}

export default Button;