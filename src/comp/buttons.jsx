import {ReactElement }from "react";

const sizeStyles = {
    sm: "px-10 py-4",
    md:"py-5 px-3"
    
}

const defaultstyle = "bg-gray-300 text-gray-100 rounded-md font-light font-inter    ";


export function Button({ title, size,onClick}) {
    
    
    return (
        <button onClick={onClick} className={` ${sizeStyles[size]} ${defaultstyle}`}>
            {title}
        </button>
    )
}   

