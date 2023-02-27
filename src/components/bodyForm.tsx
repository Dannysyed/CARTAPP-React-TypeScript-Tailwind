import React from 'react'
import itemData from '../models/itemType'
import Dataitem from './dataitem'

const FormCart: React.FC<{ itemData: itemData[] }> = (props) => {
    return (
        <div className='bg-slate-600 h-[20rem] w-[60rem] mx-60 flex-row items-center'>
            {props.itemData.map(val => <Dataitem id={val.id} title={val.title} />)}
        </div>
    )
}

export default FormCart