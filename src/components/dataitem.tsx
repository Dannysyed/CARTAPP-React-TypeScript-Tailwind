import React from 'react'

const Dataitem: React.FC<{ id: number, title: string }> = (prop) => {
    return (
        <div className='border flex justify-around p-5 '>
            <div className='text-2xl'>
                {prop.title}
            </div>
            <div className='text-2xl'>
                <button className='border mx-4'>+</button>
                <button className='border mx-4'>-</button>
            </div>
        </div>
    )
}

export default Dataitem