import { Topbar } from "../comp/top"

import {Button} from "../comp/buttons"
import { Link } from "react-router-dom"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export function Firstpage(){

    useGSAP(()=>{
        gsap.from(".borde",{
            opacity:0,
            duration:2
        })



        let tl=gsap.timeline({
            scrollTrigger:{
                trigger:".borde",
                start:"top+=330px 50% ",
                end:"+=4000",
                
                scrub:true,
                
                pin:true


            }


        });
        tl.to(".skull",{
            width:"300",
            height:"300",
            rotateX:"620deg",   
            duration:3,

        })
        tl.to(".skull",{
            width:"500",
            height:"500",
            rotateX:"120deg",
            duration:5,
            yoyo:true

        })
        tl.to(".skull",{
            width:"180",
            height:"180",
            rotateX:"1080deg",
            duration:3,

        })
        tl.to(".skull",{
            
            rotateY:"90.5deg",
            duration:2,

        })
        tl.to(".skull",{
            
            opacity:0,
            duration:0.5,

        });


        let tl2=gsap.timeline({
            scrollTrigger:{
                trigger:".main",
                start:"top+=330px 50% ",
                end:"+=2200",
                
                scrub:true,
                
                pin:true


            }


        });
        tl2.fromTo(".textcon",{
            scale:0.4,
            opacity:0
        },{
            scale:1,
            opacity: 100

        })
        tl2.fromTo(".shlok",{
            opacity:0
        },{
            opacity: 100,
            duration:2

        },"<")

    })
    return<>
    <div className="w-full z-30 h-screen relative py-1 bg-gray-100">
        <Topbar/>
        <div className="borde flex justify-center borde items-center h-[70%] z-50 mt-20 ">
            
                <img src="/skull3.jpg" className=" z-50 object-cover skull w-[10rem] h-[10rem] " alt="skull"/>

        </div>
    </div>
    <div className="w-full z-30 h-screen py-1 bg-gray-100"></div>
    <div className="w-full z-30 h-screen py-1 bg-gray-100"></div>
    <div className="w-full z-30 h-screen py-1 bg-gray-100"></div>
    <div className="w-full z-30 h-screen py-1 bg-gray-100"></div>
    
    
    <div className=' bg-gray-100 z-40 overflow-hidden h-[74%] '>
        <div className="main mt-[5rem]">
        <div className='shlok animate-marquee font-inter text-3xl text-gray-300 mt-[5rem] font-medium '>
            क्षणशः कणशश्चैव विद्यामर्थं च साधयेत् 
        </div>
        
        <div className='py-4'>
            <div className="textcon">
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
            </div>
            <div className='shlok animate-marquee2 font-inter text-3xl mb-[5rem] text-gray-300 font-medium m-14 '>जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च</div>
            
        </div>
    </div>
    </div>
    </>
}