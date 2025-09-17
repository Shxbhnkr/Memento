export function Showerror({text}){
    return<div className="w-full h-screen pt-48 bg-gray-100">
            <div className="flex justify-center">
            <img width="80" src="https://img.icons8.com/laces/64/skull.png" alt="skull"/>
            </div>
            <div className="lg:font-bold font-semibold m-19 font-inter text-center lg:text-5xl text-xl text-gray-300">{text}</div>
        </div> ;
    
}