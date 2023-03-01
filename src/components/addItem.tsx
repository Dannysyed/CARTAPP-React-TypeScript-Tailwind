import React, { useState } from 'react'
import itemData from '../models/itemType'

const AddItem: React.FC<{ Getdata: (data: itemData) => void, openform: (data: boolean) => void }> = (prop) => {
    let [ItemTitle, setItemtitle] = useState<string>('')
    let [comment, setComment] = useState<string>('')
    let [quantity, setquantity] = useState<number>(0)

    let onchangeItem = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log(event.target.value)
        setItemtitle(event.target.value)

    }
    let SumbitHandle = (event: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
        event.preventDefault()
        console.log(ItemTitle, comment, quantity)
        let newData: itemData = { id: Math.floor(Math.random() * 1000), title: ItemTitle, quantity: quantity }
        prop.Getdata(newData)
    }
    return (
        <div className='bg-red-400 absolute left-60 w-[30vw] h-[50vh] flex flex-col'>
            <button className='bg-black text-white self-end m-[10px] px-2 ' onClick={(e: React.MouseEvent<HTMLButtonElement>) => prop.openform(false)}>X</button>
            <form>
                <div className='flex flex-col items-center justify-center my-4 '>
                    <label>Add Item</label>
                    <select onChange={onchangeItem}>
                        <option value={'Margerta Pizza olives asdf'}>Margerta Pizza olives asdf</option>
                        <option value={'Burger'}>Burger</option>
                        <option value={'Tiika'}>Tiika</option>
                        <option value={'veg'}>veg</option>
                        <option value={'Nonveg'}>Nonveg</option>
                        <option value={'Allu'}>Allu</option>
                    </select>
                </div>
                <div className='flex flex-col items-center justify-center my-4 '>
                    <label>Quantity</label>
                    <input type={'number'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setquantity(+(e.target.value))} />
                </div>
                <div className='flex flex-col items-center justify-center my-4 '>
                    <label>Leave Comment</label>
                    <input type={'text'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)} />
                </div>



                <div className='flex flex-col items-center justify-center my-4 '>
                    <button onClick={SumbitHandle}>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default AddItem