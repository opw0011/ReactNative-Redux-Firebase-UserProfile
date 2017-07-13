import firebase from '../firebase';

const DEFAULT_USER_ID = '1000';

export const addMessage = (msg) => ({
    type: 'ADD_MESSAGE',
    ...msg
});

export const sendMessage = (formData) => {
    return function (dispatch) {
        console.log(formData);
        // const newMsgRef = firebase.database()
        //                           .ref('profile')
        //                           .push();
        // formData.id = DEFAULT_USER_ID;
        // newMsgRef.set(formData);
        const profileRef = firebase.database().ref('profile/' + DEFAULT_USER_ID);
        profileRef.set(formData);

        dispatch(addMessage(formData));
    };
};


export const startFetchingMessages = () => ({
	type: 'START_FETCHING_MESSAGES'
});

export const receivedMessages = () => ({
    type: 'RECEIVED_MESSAGES',
    receivedAt: Date.now()
});

export const fetchMessages = () => {
	return function (dispatch) {
		dispatch(startFetchingMessages());

		firebase.database()
			.ref('profile/' + DEFAULT_USER_ID)
			.on('value', (snapshot) => {
				// gets around Redux panicking about actions in reducers
				setTimeout(() => {
                    const messages = snapshot.val() || [];
                    console.log(messages);

					dispatch(receiveMessages(messages))
				}, 0);
			});
	}
}

export const receiveMessages = (messages) => {
    return function (dispatch) {
        // Object.values(messages).forEach(msg => dispatch(addMessage(msg)));
        dispatch(addMessage(messages));
        dispatch(receivedMessages());
    }
}