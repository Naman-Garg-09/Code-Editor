import React from 'react'

function NavBar() {
    return (
        <div className='nav lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-4'>
            <div className="left flex text-white items-center  gap-2 ml-[20px]">
                <div className='name text-2xl font-bold '>CODE EDITOR -</div>
                <div className='moto font-semibold mt-[3px]'> One stop coding solution</div>
            </div>
            <div className='right text-white flex font-semibold gap-4 mr-[20px]'>
                <button className='cursor-pointer'>HTML</button>
                <button className='cursor-pointer'>CSS</button>
                <button className='cursor-pointer'>JS</button>
            </div>
        </div>
    )
}

export default NavBar
