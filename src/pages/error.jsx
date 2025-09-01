export function Showerror({text}){
    return<div className="w-full h-full relative">

            <img className="absolute top-[14rem] left-[45rem]" width="90" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
            <div className="absolute top-[20rem] left-[10rem] font-bold m-19 font-inter text-center text-5xl text-gray-300">{text}</div>
        </div> ;
    
}