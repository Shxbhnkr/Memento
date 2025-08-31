import { useLocation } from "react-router-dom";
import { Topbar } from "../comp/top";
import { useState, useEffect } from "react";


export function Resultcomp(){
    const { state } = useLocation();
    const { Country,Gender,Dob } = state || {};
    
    if (!state || !Country || !Gender || !Dob) {
        return <div className="w-full h-full relative bg-gray-100">

            <img className="absolute top-[14rem] left-[45rem]" width="90" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
            <div className="absolute top-[20rem] left-[25rem] font-inter text-center text-5xl text-gray-300">Incomplete Input . Fill them all</div>
        </div> ;
        
    }
    const formattedGender = Gender.toLowerCase();
    if (formattedGender !== "m" && formattedGender !== "f") {
    return <div className="w-full h-full relative bg-gray-100">

            <img className="absolute top-[14rem] left-[45rem]" width="90" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
            <div className="absolute top-[20rem] left-[25rem] font-inter text-center text-5xl text-gray-300">Gender input wrong . Select m/f</div>
        </div> ;
}

    
    const countries = new Map([
        ["india", { m: 69, f: 72 }],
        ["china", { m: 75, f: 80 }],
        ["russia", { m: 68, f: 78 }],
        ["pakistan", { m: 65,f: 67 }],
    ]);
    const formattedcountry = Country.toLowerCase();
    if (!countries.has(formattedcountry)){
        return <div className="w-full h-full relative bg-gray-100">

            <img className="absolute top-[14rem] left-[45rem]" width="90" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
            <div className="absolute top-[20rem] left-[25rem] font-inter text-center text-5xl text-gray-300">Country input wrong.Hover over the circle to get the hint</div>
        </div> ;
    }

    const lifeExpectancy = countries.get(formattedcountry)[formattedGender];

    if (!lifeExpectancy) {
        return <div className="w-full h-full relative bg-gray-100">

            <img className="absolute top-[14rem] left-[45rem]" width="90" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
            <div className="absolute top-[20rem] left-[25rem] font-inter text-center text-5xl text-gray-300">Invalid country or Gender</div>
        </div> ;
    }

    const parts = Dob.split("-");
    if (parts.length !== 3) {
        return <div className="w-full h-full relative bg-gray-100">

            <img className="absolute top-[14rem] left-[45rem]" width="90" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
            <div className="absolute top-[20rem] left-[25rem] font-inter text-center text-5xl text-gray-300">Invalid date Format (dd-mm-yyyy)</div>
        </div> ;
    }
    
    const today2=new Date
    const Currentyear=today2.getFullYear()
    const Currentmonth=today2.getMonth()
    const Currentday=today2.getDay()
    const [day, month, year] = parts;
    const birthDate = new Date(year, month - 1, day);
    if (isNaN(birthDate.getTime())) {
        return <div className="w-full h-full relative bg-gray-100">

            <img className="absolute top-[14rem] left-[45rem]" width="90" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
            <div className="absolute top-[20rem] left-[25rem] font-inter text-center text-5xl text-gray-300">Invalid date value</div>
        </div> ;
    }
    const moremonths=[2,4,6,9,11]
    if(day>31||month>12||year>Currentyear||year==Currentyear &&(month>Currentmonth||day>Currentday)||(month in moremonths && day>30)||(month==2 && day>29)){
        return<div className="w-full h-full relative bg-gray-100">

            <img className="absolute top-[14rem] left-[45rem]" width="90" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
            <div className="absolute top-[20rem] left-[25rem] font-inter text-center text-5xl text-gray-300">Smartas*es die sooner fyi. Try again</div>
        </div> ;
    }
    const Age=Currentyear-year
    if(Age>lifeExpectancy){
        return <div className="w-full h-full relative bg-gray-100">

            <img className="absolute top-[14rem] left-[45rem]" width="90" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
            <div className="absolute top-[20rem] left-[25rem] font-inter text-center text-5xl text-gray-300">You have already lived more than expected.REST IN PIECE</div>
        </div> ;
    }
    if(month||day||year.includes(".")){
        return<div className="w-full h-full relative bg-gray-100">

            <img className="absolute top-[14rem] left-[45rem]" width="90" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
            <div className="absolute top-[20rem] left-[25rem] font-inter text-center text-5xl text-gray-300">Smartas*es die sooner fyi. Try again</div>
        </div> ;;
    
    }
    
    

    const deathYear = birthDate.getFullYear() + lifeExpectancy;
    const expectedDeathDate = new Date(deathYear, birthDate.getMonth(), birthDate.getDate());

    const today = new Date();
    
    const timeLeft = expectedDeathDate - today;
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const secondsleft=Math.floor( timeLeft /1000 ) ;
    const hourleft=Math.floor( timeLeft /(1000*60*60) ) ;
    const peher=Math.floor(timeLeft / (1000 * 60 * 60 * 12));
    const weeksleft=Math.floor( timeLeft /(1000 * 60 * 60 * 24 * 7) ) ;
    const Summerleft=Math.floor( timeLeft /(1000 * 60 * 60 * 12 * 365) ) ;
    const Winterleft=Math.floor( timeLeft /(1000 * 60 * 60 * 12 * 365) ) ;
    const Yearsleft=Math.floor( timeLeft /(1000 * 60 * 60 * 24 * 365) )
 
    const dusrapeher=peher-1
    const [timeLeft2, setTimeLeft] = useState(expectedDeathDate - new Date());
    const [showdays, setShowdays] = useState(false);
    const [shownights, setShownights] = useState(false);


    useEffect(() => {
    const interval = setInterval(() => {
        setTimeLeft(expectedDeathDate - new Date());
    }, 1000);

        return () => clearInterval(interval); // cleanup
    }, [expectedDeathDate]);


    

    function Showday() {
        return (
        <div
        className="font-inter text-gray-300 text-center text-2xl font-bold"
        onMouseEnter={() => setShowdays(true)}
        onMouseLeave={() => setShowdays(false)}
    >
        { showdays ? (
        <span>{peher} mornings</span>
        ) : (
        <button>
        <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/sun--v1.png"
            alt="sun"
        />
        </button>
    )}
    </div>
);
}

function Shownight() {
        return (
        <div
        className="font-inter text-gray-300 text-center text-2xl font-bold"
        onMouseEnter={() => setShownights(true)}
        onMouseLeave={() => setShownights(false)}
    >
        { shownights ? (
        <span>{dusrapeher} nights</span>
        ) : (
        <button>
        <img width="36" height="36" src="https://img.icons8.com/fluency-systems-regular/48/crescent-moon.png" alt="crescent-moon"/>
        </button>
    )}
    </div>
);
}



    return<>
    <div className='bg-gray-100 overflow-hidden min-h-screen'>
    <Topbar/>
    <div className="text-center font-inter text-6xl font-medium tracking-wide text-gray-300 mt-8 ">
        <span>YOU</span>
        <span className="ml-8">HAVE</span>
    </div>
    <div className="flex justify-center">
    <div className="w-[52rem] h-[6.5rem] item-center mt-6 rounded-[8rem] bg-gray-100 shadow-[0px_3px_20px_rgba(1,18,1,0.5)] text-center font-inter text-[2.5rem] text-gray-300 pt-6 ">
        <div><b>{weeksleft}</b> w  - <b>{hourleft}</b> hrs  - <b>{secondsleft} </b> s</div>
    </div>
        
    </div>
    <div className="flex justify-center items-center">
        <div className="w-[11rem] h-[12rem] m-16 rounded-3xl bg-gray-100 shadow-[0px_3px_20px_rgba(1,18,1,0.5)] p-2">
            <div className="  h-16 p-4 font-inter text-gray-300 text-center text-2xl font-bold">
                Winter
            </div>
            <div className="  font-inter text-gray-300 text-center text-7xl font-bold">
                {Summerleft}
            </div>
        </div>

        <div className="w-[17rem] h-[16rem] rounded-full m-8 bg-gray-100 shadow-[0px_3px_20px_rgba(1,18,1,0.5)] ">
            <div className="h-[8rem] bg-red-00 flex justify-center items-center">
            <Showday/>
            </div>
            <div className="h-[8rem] bg-red-00 flex justify-center items-center">
            <Shownight/>
            </div>
            
        </div>
        <div className="w-[11rem] h-[12rem] m-16 rounded-3xl bg-gray-100 shadow-[0px_3px_20px_rgba(1,18,1,0.5)] p-2 ">
            <div className="  h-16 p-4 font-inter text-gray-300 text-center text-2xl font-bold">
                Summer
            </div>
            <div className="font-inter text-gray-300 text-center text-7xl font-bold">
                {Winterleft}
            </div>
        </div>
    </div>


    <div className="text-center mt-5">
        <span className="font-inter text-xl text-gray-300">and now its stuck to you forever!</span>
    </div>
    </div>
    </>
}