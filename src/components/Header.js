import Image from 'next/image'
import logo from '@/img/logo.png'
const Header = () => {
    return(
        <nav className="flex w-full items-center py-2 md:py-4 px-[5%] backdrop-blur-sm border-b-[1px] justify-between shadow-md"> 
            <div className='flex items-center'>
                <Image 
                    src={logo}
                    width={70}
                    height={70}
                    className='mt-1 md:mt-2'
                />
                <p className='font-light italic text-2xl md:text-3xl text-indigo-950 font-sans'>Bradwell</p>
            </div>
            <button className='px-5 py-2 rounded-full text-sm font-bold text-yellow-700 border-[1px] border-yellow-600'>Explore</button>
        </nav>
    );
}

export default Header;