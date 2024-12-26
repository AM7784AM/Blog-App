import React from 'react'

function Buttons({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor =  'text-white',
    className = '',
    ...props    //used for transferring some other properties as well


}) {

    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>
    );
}

export default Buttons
