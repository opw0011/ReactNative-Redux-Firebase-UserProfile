import firebase from '../firebase';

const DEFAULT_USER_ID = '1000';

export const addMessage = (msg) => ({
    type: 'UPDATE_PROFILE',
    ...msg
});

// save to firebase and update profile
export const sendMessage = (formData) => {
    return function (dispatch) {
        console.log(formData);
        const profileRef = firebase.database().ref('profile/' + DEFAULT_USER_ID);
        profileRef.set(formData);

        dispatch(addMessage(formData));
    };
};

// update profile only
export const updateMessage = (formData) => {
    return function (dispatch) {
        dispatch(addMessage(formData));
    }
}

export const startFetchingMessages = () => ({
	type: 'START_FETCHING'
});

export const finishFetchingMessages = () => ({
	type: 'FINISH_FETCHING'
});

export const fetchMessages = () => {
	return function (dispatch) {
		dispatch(startFetchingMessages());

		firebase.database()
			.ref('profile/' + DEFAULT_USER_ID)
			.on('value', (snapshot) => {
				setTimeout(() => {
                    const messages = snapshot.val() || [];
                    console.log("Firebase message:", messages);

                    dispatch(receiveMessages(messages))
				}, 0);
			});
	}
}

export const receiveMessages = (messages) => {
    return function (dispatch) {
        // console.log("receive data");
        dispatch(addMessage(messages));
        dispatch(finishFetchingMessages());
    }
}