import { combineReducers } from 'redux';

const initialState = {
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

const isFetching = (state = true, action) => {
    console.log("isFetchgin reducer", action);
    switch (action.type) {
        case 'START_FETCHING':
            return true;
        case 'FINISH_FETCHING':
            return false;
        default:
            return state
    }
}


const rootReducer = combineReducers({
    profile, isFetching
});

export default rootReducer;