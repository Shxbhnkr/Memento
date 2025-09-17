import { Topbar } from "../comp/top"

import {Button} from "../comp/buttons"
import { Link } from "react-router-dom"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export function Firstpage(){
    useEffect(()=>{
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
            window.scrollTo(0, 0);
    }, []);
    
    useGSAP(()=>{
        

        gsap.from(".borde",{
            opacity:0,
            duration:2
        })

        
        

        let tl=gsap.timeline({
            
            scrollTrigger:{
                trigger:".borde",
                start:"top+=300px 50% ",
                end:"+=2400",
                
                scrub:1,
                
                pin:true


            }


        });
        tl.to(".skull",{
            width:"300",
            height:"300",
            rotateX:"+=820",   
            duration:1,

        })
        tl.to(".skull",{
            width:"500",
            height:"500",
            rotateX:"+=250deg",
            duration:2,
        })
        tl.to(".skull",{
            width:"180",
            height:"180",
            rotateX:"+=550deg",
            duration:2,

        })
        tl.to(".skull",{
            
            scale:0,
            duration:1,

        })
        


        let tl2=gsap.timeline({
            scrollTrigger:{
                trigger:".main",
                start:"top+=330px 50% ",
                end:"+=1000",
                
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
        
    });
    

    
    return<>
    <div className="w-full z-30 h-screen relative py-1 bg-gray-100">
        <Topbar/>
        <div className="borde flex justify-center borde items-center h-[70%] z-40 mt-20 ">
            
                <img src="/skull3.jpg" className=" z-50 object-cover skull w-[10rem] h-[10rem] " alt="skull"/>

        </div>
        <div className=" text-gray-300 lg:text-2xl text-xl z-50 font-normal font-inter absolute top-44 left-1/2 lg:-ml-28 -ml-24"> Scroll to flip the coin</div>
    </div>
    <div className="w-full z-30 h-screen py-1 bg-gray-100"></div>
    <div className="w-full z-30 h-screen py-1 bg-gray-100"></div>
    
    
    <div className=' bg-gray-100 z-300 overflow-hidden h-[74%] '>
        <div className="main mt-[5rem]">
        <div className='shlok animate-marquee font-inter lg:text-3xl text-xl text-gray-300 lg:mt-14 mt-28 font-medium '>
            क्षणशः कणशश्चैव विद्यामर्थं च साधयेत् 
        </div>
        
        <div className='py-4'>
            <div className="textcon">
                <div className='flex justify-center text-gray-300 lg:text-[7rem] text-[2.5rem] mt-8 lg:mt-0 -mb-10 font-semibold tracking-wider font-inter'>
                REMEMBER
                </div>
                <div className='flex justify-center '>
                    <div className='text-gray-300 lg:text-[8rem] text-[3rem] font-semibold font-inter lg:leading-none mt-6 ml-8 lg:ml-0 lg:mt-0'>
                    you*must*
                    </div>
                    <div className='italic font-inter font-bold lg:text-[9rem] mt-8 lg:mt-0 text-[3rem] text-gray-300 leading-none -mb-2 bg-gradient-to-b w-[18rem] from-gray-300 to-gray-100 bg-clip-text text-transparent '>
                    DIE
                    </div>
                </div>
                <div className='flex justify-center text-gray-300 lg:text-2xl text-l font-normal text-center font-inter lg:mt-8 lg:mb-8  mb-14 lg:mx-8 mx-14'>
                A Reminder to ignite the Urgency in you.
                </div>
                <div className='flex justify-center'>
                <Link to="/second">
                <Button size="sm" title="READY!" />
                </Link>
                </div>
            </div>
            <div className='shlok animate-marquee2 font-inter lg:text-3xl text-xl mb-[5rem] text-gray-300 font-medium m-14 '>जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च</div>
            
        </div>
    </div>
    </div>
    </>
}