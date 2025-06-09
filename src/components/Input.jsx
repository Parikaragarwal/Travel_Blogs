import { useId, forwardRef } from "react";

const Input = forwardRef(
function Input({label,type = "text",className = "",...props}, ref) 
{
    const id = useId();

    return (
        <div className="mb-4">
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-blue-700 dark:text-blue-300 mb-1"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                ref={ref}
                className={`w-full px-4 py-2 rounded-md border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 ${className}`}
                {...props}
            />
        </div>
    );
});

export default Input;
