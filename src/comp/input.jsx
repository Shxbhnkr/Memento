export function Inputboxx({placeholder,value,onChange}){
    return<>
    <input placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.value)} className="border-[3px] outline-none  border-gray-300 bg-transparent rounded-xl font-semibold w-56 text-center py-[0.35rem]"/>

    </>
}