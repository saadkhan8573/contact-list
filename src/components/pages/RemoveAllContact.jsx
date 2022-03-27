import React from 'react'
import { removeAll } from '../../redux/actions/ContactListAction';
import { useDispatch, useSelector } from 'react-redux'

const RemoveAllContact = () => {
    const ContactList = useSelector(state => state.ContactList.list);
    const dispatch = useDispatch()
    return (
        <>

            <div className="flex justify-center items-center my-4">
                <button className="min-w-1/3 px-5 h-12 border border-red-700 bg-red-700 text-white hover:bg-white  hover:text-black transition-all shadow-2xl" onClick={() => dispatch(removeAll())}>Remove All</button>
            </div>
        </>
    )
}

export default RemoveAllContact
