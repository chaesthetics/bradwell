const Store = () => {
    return(
        <div className="w-full flex sticky bottom-0 h-[70px] md:h-[100px] bg-[#1c1201]">
            <div className="w-full md:pl-28 pl-0 items-center flex justify-around"> 
                <div className="border-b-2 border-gray-500 hover:cursor-pointer">
                  <div className="flex space-x-2 md:space-x-8">
                    <div className="text-white text-sm md:text-lg">
                        <p className="font-semibold text-gray-400">For item availability</p>
                        <p className="font-bold">Choose a store</p>
                    </div>
                    <svg aria-hidden="true" class="w-6 valign-middle sb-caret-expander__icon ml2 text-white" fill="white" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path></svg>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="white" className="bi bi-bag w-6 md:w-10 hover:cursor-pointer hover:animate-bounce" viewBox="0 0 16 16"> <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/> </svg>
            </div>
        </div>
    )
}

export default Store;