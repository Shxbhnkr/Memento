import { useLocation } from "react-router-dom";
import { Topbar } from "../comp/top";
import { useState, useEffect } from "react";
import { Showerror } from "../comp/error";


export function Resultcomp(){
    const { state } = useLocation();
    const { Country,Gender,Dob } = state || {};
    
    if (!state || !Country || !Gender || !Dob) {
        return <Showerror text="Incomplete Input . Fill them all"/>
        
    }
    const formattedGender = Gender.toLowerCase();
    if (formattedGender !== "m" && formattedGender !== "f") {
    return <Showerror text="Gender input wrong . Select m/f"/>
}

    
    const countries = new Map([
        ["india", { m: 69, f: 72 }],
        ["china", { m: 75, f: 80 }],
        ["russia", { m: 68, f: 78 }],
        ["pakistan", { m: 65,f: 67 }],
    ]);
    const formattedcountry = Country.toLowerCase();
    if (!countries.has(formattedcountry)){
        return <Showerror text="Country input wrong.Hover over the circle to get the hint"/>
    }
    
    const lifeExpectancy = countries.get(formattedcountry)[formattedGender];

    if (!lifeExpectancy) {
        return <Showerror text="Invalid country or Gender"/>
    }

    const parts = Dob.split("-");
    if (parts.length !== 3) {
        return <Showerror text="Invalid date Format (dd-mm-yyyy)"/>
    }
    
    const today2=new Date
    const Currentyear=today2.getFullYear()
    const Currentmonth=today2.getMonth()+1
    const Currentday=today2.getDate()
    const [day, month, year] = parts;
    const birthDate = new Date(year, month - 1, day);
    if (isNaN(birthDate.getTime())) {
        return <Showerror text="Invalid date value"/>
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    const moremonths=[2,4,6,9,11]
    if(day>31||day==0||month==0||month>12||year>Currentyear||(year==Currentyear && (month>Currentmonth||(month==Currentmonth && day>Currentday)))||((moremonths.includes (month)) && day>30)||(month == 2 && ((isLeapYear(year) && day > 29) || (!isLeapYear(year) && day > 28)))
    ){
        return<Showerror text="Smartas*es die sooner fyi. Try again"/>
    }
    const Age=Currentyear-year
    if(Age>lifeExpectancy){
        return <Showerror text="You have already lived more than expected.REST IN PIECE"/>}


    if (
        String(month).includes(".") ||String(day).includes(".") ||String(year).includes(".")
    ) {
        return <Showerror text="Smartas*es die sooner fyi. Try again"/>
    }

    

    const deathYear = birthDate.getFullYear() + lifeExpectancy;
    const expectedDeathDate = new Date(deathYear, birthDate.getMonth(), birthDate.getDate());

    const today = new Date();
    
    const timeLeft = expectedDeathDate - today;
    const secondsleft=Math.floor( timeLeft /1000 ) ;
    const hourleft=Math.floor( timeLeft /(1000*60*60) ) ;
    const peher=Math.floor(timeLeft / (1000 * 60 * 60 * 12));
    const weeksleft=Math.floor( timeLeft /(1000 * 60 * 60 * 24 * 7) ) ;
    const Summerleft=Math.floor( timeLeft /(1000 * 60 * 60 * 12 * 365) ) ;
    const Winterleft=Math.floor( timeLeft /(1000 * 60 * 60 * 12 * 365) ) ;
    
 
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
        onMouseOut={() => setShowdays(false)}
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
        onMouseOut={() => setShownights(false)}
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