import React from 'react'

const Dataitem: React.FC<{ id: number, title: string }> = (prop) => {
    return (
        <div className='border flex justify-around p-5 '>
            <div className='text-2xl  w-48 flex justify-between '>
                <span> {prop.title}</span>
                <span>1</span>
            </div>
            <div className='text-2xl rounded-[1rem] bg-blue-200'>
                <button className='border mx-4 rounded-[0.2rem] px-1 bg-yellow-500 text-white'>+</button>
                <button className='border mx-4 rounded-[0.2rem] px-2 bg-yellow-500 text-white'>-</button>
            </div>
        </div>
    )
}

export default Dataitem