
import { Link } from "react-router-dom";

export const Topbar=() =>{
    return<>
        <Link to="/">
        <div className='w-full flex justify-between py-5 px-16 z-50 bg-gray-100 fixed  ' >
        <div className='text-gray-300 text-2xl font-semibold font-gills'>Memento</div>
        
        <button className='mr-6'>
            <img width="34" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
        </button>
        
        </div>
        </Link>
    </>
}