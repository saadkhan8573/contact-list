import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { updateContact } from '../../redux/actions/ContactListAction';

const EditContact = () => {
    const { id } = useParams();

    const [InputHandle, setInputHandle] = useState({
        id : "",
        fname: "",
        lname: "",
        email: "",
        phone: ""
    })

    

    const dispatch = useDispatch()
    const ContactList = useSelector(state => state.ContactList.list)
    const newContactList = ContactList.filter(contact => contact.id === parseInt(id))
    const contactListNew = newContactList[0]

    useEffect(() => {
        setInputHandle(contactListNew)
    }, [contactListNew])
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputHandle((val) => {
            return {
                ...val,
                [name]: value
            }

        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!(InputHandle.fname && InputHandle.lname && InputHandle.email && InputHandle.phone)) {
            toast.warning("Something is missing")
        } else {
            const { id ,fname, lname, email, phone } = InputHandle;
            const Data = {
                id,
                fname,
                lname,
                email,
                phone
            }
            dispatch(updateContact(Data))
            setInputHandle({
                fname: "",
                lname: "",
                email: "",
                phone: ""
            })
            toast.success("Contact Updated Successfully!")
            setTimeout(function () { history.push('/contact-list/') }, 180);
        }
    }
    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">

                    <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg shadow-lg">
                        <h3 className="pt-4 text-2xl text-center">Edit Contact {id}</h3>
                        <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4 md:flex md:justify-between gap-3">
                                <div className="mb-4 md:mb-0 w-1/2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" name="fname" value={InputHandle.fname} onChange={handleChange} />
                                </div>
                                <div className="w-1/2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" name="lname" value={InputHandle.lname} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="mb-4 md:flex md:justify-between gap-3">
                                <div className="mb-4 w-1/2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name="email" value={InputHandle.email} onChange={handleChange} />
                                </div>
                                <div className="mb-4 w-1/2">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                            Phone Number
                                        </label>
                                        <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="tel" placeholder="Number" name="phone" value={InputHandle.phone} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline" type="submit">
                                    Update Contact
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditContact
