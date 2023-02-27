import React from 'react'

const Navbar: React.FC<{ data: string }> = (prop) => {
    return (
        <div className='bg-orange-400 h-[4rem] flex justify-between'>
            <div className=' text-white text-[2rem] mx-8'>{prop.data}</div>
            <div className=' text-blue-600 text-[2rem] mx-8'>Cart</div>
        </div>
    )
}

export default Navbar