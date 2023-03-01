import React, { useState } from 'react'
import itemData from '../models/itemType'
import AddItem from './addItem'
import Dataitem from './dataitem'

const FormCart: React.FC<{ itemData: itemData[] }> = (props) => {
    const [openForm, setOpenForm] = useState<boolean>(false)
    const [actualData, setActualData] = useState<itemData[]>(props.itemData)
    let OpenForm = () => {
        setOpenForm(true)
    }
    let FormData = (data: itemData) => {
        setActualData(prev => prev.concat(data))
    }
    return (
        <div>
            <div>
                <button className='bg-amber-700 p-2 rounded-[0.7rem] text-white m-[1rem]' onClick={OpenForm}>Create a Order</button>
                {openForm && <AddItem Getdata={FormData} openform={setOpenForm} />}
            </div>
            <div className='bg-slate-600 h-[20rem] w-[60rem] mx-60 flex-row items-center rounded-[1rem]'>
                {actualData.map(val => <Dataitem id={val.id} title={val.title} count={val.quantity} />)}
            </div>


        </div>
    )
}

export default FormCart