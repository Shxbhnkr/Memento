import { useState } from "react";

const MessVariant = {
    right: "absolute left-6 ",
    left: "absolute right-9 ",
    
    };


function Helper({ title, variant }) {
    return (
        <div className={`${MessVariant[variant]} font-inter ml-2 -mt-5  px-3 py-2 rounded-lg bg-gray-300 text-gray-100 whitespace-nowrap`}>
        {title}
        </div>
    );
    }

export function Popup({ title, variant }) {
    const [showHelper, setShowHelper] = useState(false);

    return (
        <div className="relative inline-block px-2 py-[10px] items-center">
            <div
            className="w-4 h-4 rounded-full border-gray-300 border-[3px] cursor-pointer"
            onMouseEnter={() => setShowHelper(true)}
            onMouseLeave={() => setShowHelper(false)}
        />
            {showHelper && <Helper title={title} variant={variant} />}
        </div>
    );
    }   

