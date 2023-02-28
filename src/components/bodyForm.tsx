import React, { useState } from 'react'
import itemData from '../models/itemType'
import AddItem from './addItem'
import Dataitem from './dataitem'

const FormCart: React.FC<{ itemData: itemData[] }> = (props) => {
    const [openForm, setOpenForm] = useState<boolean>(false)
    let OpenForm = () => {
        setOpenForm(true)
    }
    return (
        <div>
            <div>
                <button className='bg-amber-700 p-2 rounded-[0.7rem] text-white m-[1rem]' onClick={OpenForm}>Create a Order</button>
                {openForm && <AddItem />}
            </div>
            <div className='bg-slate-600 h-[20rem] w-[60rem] mx-60 flex-row items-center rounded-[1rem]'>
                {props.itemData.map(val => <Dataitem id={val.id} title={val.title} />)}
            </div>


        </div>
    )
}

export default FormCart