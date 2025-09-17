import { Button } from "../comp/buttons";
import { Inputboxx } from "../comp/input";
import { Topbar } from "../comp/top";
import { Popup } from "../comp/popup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export function Choosecomp(){
        const[Country,setcountry]= useState("")
        const[Gender,setgender]= useState("")
        const[Dob,setdob]= useState("")

        const navigate= useNavigate();


        const Eventhandler=(e)=>{
            e.preventDefault();
    
            navigate("/result",{state:{Country,Gender,Dob}})
            
        }
    
    return<>
    <div className='bg-gray-100 overflow-hidden min-h-screen'>
        <Topbar/>
        <div className="font-inter text-gray-300 text-7xl font-normal tracking-wide flex justify-center mt-[10rem] m-10">--/ ??? /--</div>
        <div className="flex justify-center">
        <div className="bg-transparent my-1  w-1/4 h-96 ">
        <div className="flex ">
            <Inputboxx placeholder="country" value={Country} onChange={setcountry} />
            <Popup title="Choose [India,Pakistan,Russia,China]" variant="right"/>
            
        </div>
        <div className="my-12 flex justify-end">
            <Popup title="No lgbt+ pls" variant="left"/>
            <Inputboxx placeholder="gender(m/f) " value={Gender} onChange={setgender} />
            
        </div>
        <div className="my-12 flex">
        <Inputboxx placeholder="BirthDate(dd-mm-yyyy)" value={Dob} onChange={setdob}/>
        <Popup title="Nothing here- just match the format" variant="right"/>

        </div>
        <div className="flex justify-center py-8">
        <Button onClick={Eventhandler} size="sm" title="Calculate"/>
        </div>


        </div>
        
        </div>
        </div>
        

    </>
}