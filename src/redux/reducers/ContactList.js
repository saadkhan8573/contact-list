const initialState = {
    list: [
        {
            id: 1629716631135,
            fname: "Saad",
            lname: "Mushtaq",
            email: "info@gmail.com",
            phone: "+921234567890"
        },
        {
            id: 1629716631335,
            fname: "Saad",
            lname: "khan",
            email: "info@contact-list.com",
            phone: "+12345678908"
        }
    ]
}

const ContactList = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            const { fname, lname, email, phone } = action.payload;
            return {
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        case "UPDATE_CONTACT":
            const updatedData = state.list.map(val => val.id === action.payload.id ? action.payload : val);
            return {
                list: updatedData
            }
        case "DELETE_CONTACT":
            const updatedList = state.list.filter(val => val.id !== action.payload)
            return {
                list: updatedList
            }
        case "REMOVE_ALL":
            return {
                list: []
            }
        default: return state
    }
}

export default ContactList
