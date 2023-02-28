import React from 'react'

const AddItem = () => {
    return (
        <div className='bg-red-400 absolute left-60 w-[30vw] h-[50vh] '>
            <form>
                <div className='flex flex-col items-center justify-center my-4 '>
                    <label>Add Item</label>
                    <select>
                        <option>Pizza</option>
                        <option>Burger</option>
                        <option>Tiika</option>
                        <option>veg</option>
                        <option>Nonveg</option>
                        <option>Allu</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default AddItem