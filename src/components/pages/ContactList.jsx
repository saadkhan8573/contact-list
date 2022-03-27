import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteContact } from '../../redux/actions/ContactListAction'
import RemoveAllContact from './RemoveAllContact'
import Test from './Test'

const ContactList = () => {
    const ContactList = useSelector(state => state.ContactList.list)
    const dispatch = useDispatch()
    return (
        <>
        <Test/>
            <div className="w-5/6 mx-auto mt-10">
                <div className="flex justify-end">
                    <NavLink exact to="/contact-list/add">
                        <button className="px-6 py-2 rounded border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all">Add Contact</button>
                    </NavLink>
                </div>

                {/* List */}
                {ContactList.length ?
                    <>
                        <div className="overflow-x-auto">
                            <div className="flex items-center justify-center font-sans overflow-hidden">
                                <div className="w-full lg:w-5/6">
                                    <div className="bg-white shadow-md rounded my-6">
                                        <table className="min-w-max w-full table-auto">
                                            <thead>
                                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                    <th className="py-3 px-6 text-left">Full Name</th>
                                                    <th className="py-3 px-6 text-left">Email</th>
                                                    <th className="py-3 px-6 text-left">Phone</th>
                                                    <th className="py-3 px-6 text-center">Status</th>
                                                    <th className="py-3 px-6 text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600 text-sm font-light">
                                                {
                                                    ContactList.map((contact) => {
                                                        return (<>
                                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                                                    <div className="flex items-center">
                                                                        <div className="mr-2">
                                                                            <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Men" />
                                                                        </div>
                                                                        <span className="font-medium">{`${contact.fname} ${contact.lname}`}</span>
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-left">
                                                                    <div className="flex items-center">
                                                                        <span>{contact.email}</span>
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-center">
                                                                    <div className="flex items-center">
                                                                        <span>{contact.phone}</span>
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-center">
                                                                    <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                                                                </td>
                                                                <td className="py-3 px-6">
                                                                    <div className="flex item-center justify-center">
                                                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                            <NavLink to={`/contact-list/view/${contact.id}`}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                                </svg>
                                                                            </NavLink>
                                                                        </div>
                                                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                            <NavLink to={`/contact-list/edit/${contact.id}`}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                                </svg>
                                                                            </NavLink>
                                                                        </div>
                                                                        <div className="w-4 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110" onClick={() => dispatch(deleteContact(contact.id))}>

                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </>)
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <RemoveAllContact />
                    </>
                    :
                    <div className="flex justify-center items-center w-full h-64">
                        <p className="text-center text-2xl text-black font-bold"> There is no any contact List here <br/> Please click on ADD CONTACT button to create new contact list </p>
                    </div>
                }

            </div>
        </>
    )
}

export default ContactList
