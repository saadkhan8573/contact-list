import axios from 'axios'
import React, { useState } from 'react'

const Testing = () => {
    const [companyName, setcompanyName] = useState("")
    const [inputsChange, setinputsChange] = useState([{
        name: "",
        city: "",
        state: ""
    }])

    const addData = () => {
        const obj = {
            name: "",
            city: "",
            state: ""
        }
        setinputsChange((preVal) => {
            return [
                ...preVal,
                obj
            ]
        })
    }

    const removeData = () => {
        var list = [...inputsChange];
        list.splice(list.length-1,1);
        inputsChange.length > 1 && setinputsChange(list)
    }

    const handleChange = (event,index) => {
        const { name, value } = event.target;
        const list = [...inputsChange];
        list[index][name] = value;
        setinputsChange(list);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const obj = {
            companyName,
            inputsChange
        }
        try{
            const result = await axios.put("http://localhost:8000/api/testing", obj);
            console.log(result);
        }
        catch(err){
            console.log(err)
        }
        console.log(obj)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <input className='border border-black w-60 h-8' type="text" placeholder="name" name="name" value={companyName} onChange={(event) => setcompanyName(event.target.value)} />

                {
                    inputsChange.map((val,index) => {
                        return (<>
                            <div className='flex justify-center gap-5 my-3' key={index}>
                                <input className='border border-black w-60 h-8' type="text" placeholder="name" name="name" value={val.name} onChange={(event) => handleChange(event,index)} />
                                <input className='border border-black w-60 h-8' type="text" placeholder="city" name="city" value={val.city} onChange={(event) => handleChange(event,index)} />
                                <input className='border border-black w-60 h-8' type="text" placeholder="state" name="state" value={val.state} onChange={(event) => handleChange(event,index)} />
                            </div>
                        </>)
                    })
                }
                <div className='flex justify-evenly'>
                    <button className='bg-gray-300 px-3 py-1' onClick={addData}>Add</button>
                    <button className='bg-gray-300 px-3 py-1' onClick={removeData}>Delete</button>
                    <button className='bg-gray-300 px-3 py-1' type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Testing;