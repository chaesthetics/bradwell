import Image from 'next/image'
import logo from '@/img/logo.png'
const Header = () => {
    return(
        <nav className="flex w-full items-center py-2 md:py-4 px-10 backdrop-blur-sm border-b-[1px] justify-between shadow-sm"> 
            <div className='flex items-center space-x-8'>
                <Image 
                    src={logo}
                    width={66}
                    height={66}
                    className='mt-1 md:mt-2'
                />
                <p className='font-bold italic text-2xl md:text-3xl text-indigo-950 font-sans hidden md:block'>Bradwell</p>
            </div>
            <div className='p-2 hover:bg-gray-200 hover:cursor-pointer animation-300 duration-300 rounded-full'>
                <svg aria-hidden="true" className="md:hidden valign-middle absoluteCenter w-[24px] h-[24px] overflow-visible" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path class="sb-hamburgerButton-middleLine-CLOSED sb-hamburgerButton-animation" d="M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z"></path><path class="sb-hamburgerButton-topLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines" d="M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z"></path><path class="sb-hamburgerButton-bottomLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines" d="M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z"></path><circle class="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle></svg>
            </div>
            <div className='flex items-center space-x-8 hidden md:flex'>
                <div className='flex items-center space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
                    <p className='font-semibold text-sm'>Find a store</p>
                </div>
                <div className='space-x-3'> 
                    <button className='px-5 py-[6px] rounded-full text-sm font-bold text-yellow-700 border-[1px] border-yellow-600 hover:bg-gray-50 animation-100 duration-100'>Sign in</button>
                    <button className='px-5 py-[6px] rounded-full text-sm font-bold text-white border-[1px] bg-black hover:bg-gray-600 animation-100 duration-100'>Explore</button>
                </div>
            </div>

        </nav>
    );
}

export default Header;