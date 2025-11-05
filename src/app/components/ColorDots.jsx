const ColorDots = () => {
    return ( 
    <div className="dots_inner flex flex-col gap-8 items-center mr-8">
        <div className="dot navy w-4 h-4 rounded-full border-2 border-white cursor-pointer hover:scale-[150%]"></div>
        <div className="dot ocean w-4 h-4 rounded-full border-2 border-white cursor-pointer hover:scale-[150%]"></div>
        <div className="dot mint w-4 h-4 rounded-full border-2 border-white cursor-pointer hover:scale-[150%]"></div>
    </div> );
}
 
export default ColorDots;