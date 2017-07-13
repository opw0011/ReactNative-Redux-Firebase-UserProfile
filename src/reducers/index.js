import { combineReducers } from 'redux';

const initialState = {
    isFetching: false,
    firstName: '',
    lastName: '',
    company: '',
    department: '',
    position: '',
    email: ''
}

const profile = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                id: action.id,
                text: action.text,
                time: action.time,
                author: action.author,
                firstName: action.firstName,
                lastName: action.lastName,
                company: action.company,
                department: action.department,
                position: action.position,
                email: action.email
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    profile,
});

export default rootReducer;