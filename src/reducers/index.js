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
        case 'UPDATE_PROFILE':
            return {
                firstName: action.firstName || state.firstName,
                lastName: action.lastName || state.lastName,
                company: action.company || state.company,
                department: action.department || state.department,
                position: action.position || state.position,
                email: action.email || state.email
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