import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const ViewContact = () => {
    const { viewid } = useParams();
    const ContactList = useSelector(state => state.ContactList.list)
    const newContactList = ContactList.filter(contact => contact.id === parseInt(viewid))
    const contactListNew = newContactList[0]

    return (
        <>
            {
                newContactList ?
                    <>
                        <div className="object-cover w-full shadow-sm h-96 rounded flex justify-center items-center" style={{ background: `linear-gradient(220deg,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.55) 100%), url(https://source.unsplash.com/collection/${viewid}/1600x900)`, backgroundSize: 'cover' }} >
                            <h1 className="text-6xl text-white font-bold">{contactListNew.fname} {contactListNew.lname}</h1>
                        </div>

                        <div className="flex flex-col my-20 w-2/3 mx-auto">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Name
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Phone
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Status
                                                    </th>
                                                    <th scope="col" className="relative px-6 py-3">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {contactListNew.fname} {contactListNew.lname}
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                    {contactListNew.email}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{contactListNew.phone}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Active
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <NavLink to={`/contact-list/edit/${viewid}`} className="text-indigo-600 hover:text-indigo-900">
                                                            <p>Edit</p>
                                                        </NavLink>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <p>Loading...</p>
            }
        </>
    )
}

export default ViewContact
