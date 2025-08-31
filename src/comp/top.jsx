import { useState } from "react";
import { Link } from "react-router-dom";

export const Topbar=() =>{
    return<div>
        <Link to="/">
        <div className='flex justify-between py-5 px-16 ' >
        <div className='text-gray-300 text-2xl font-semibold font-gills'>Memento</div>
        
        <button className='mr-6'>
            <img width="34" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
        </button>
        
        </div>
        </Link>
    </div>
}