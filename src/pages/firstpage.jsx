import { Topbar } from "../comp/top"

import {Button} from "../comp/buttons"
import { Link } from "react-router-dom"

export function Firstpage(){

    return<>
    <div className='bg-gray-100 overflow-hidden min-h-screen'>
        <Topbar/>
        <div className=' animate-marquee font-inter text-3xl text-gray-300 font-medium '>
            क्षणशः कणशश्चैव विद्यामर्थं च साधयेत् 
        </div>
        
        <div className='py-4'>
            
        <div className='flex justify-center text-gray-300 text-[7rem] -mb-10 font-semibold tracking-wider font-inter'>
            REMEMBER
        </div>
        <div className='flex justify-center '>
            <div className='text-gray-300 text-[8rem] font-semibold font-inter leading-none'>
            you*must*
            </div>
            <div className='italic font-inter font-bold text-[9rem] text-gray-300 leading-none -mb-2 bg-gradient-to-b w-[18rem] from-gray-300 to-gray-100 bg-clip-text text-transparent '>
            DIE
            </div>
        </div>
        <div className='flex justify-center text-gray-300 text-2xl font-normal font-inter m-8 '>
            A Tool to ignite the Urgency in you.
        </div>
        <div className='flex justify-center'>
            <Link to="/second">
            <Button size="sm" title="READY!" />
            </Link>
        </div>
        <div className='animate-marquee2 font-inter text-3xl text-gray-300 font-medium m-14 '>जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च</div>
            
    </div>
    </div>
    </>
}