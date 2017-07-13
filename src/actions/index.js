import firebase from '../firebase';

export const addMessage = (msg) => ({
    type: 'ADD_MESSAGE',
    ...msg
});

export const sendMessage = (text) => {
    return function (dispatch) {
        let msg = {
                text: text,
                time: Date.now(),
                // author: {
                //     name: user.name,
                //     avatar: user.avatar
                // }
            };

        console.log(msg);

        const newMsgRef = firebase.database()
                                  .ref('form')
                                  .push();
        msg.id = newMsgRef.key;
        newMsgRef.set(msg);

        dispatch(addMessage(msg));
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
			.ref('form')
			.on('value', (snapshot) => {
				// gets around Redux panicking about actions in reducers
				setTimeout(() => {
					const messages = snapshot.val() || [];

					dispatch(receiveMessages(messages))
				}, 0);
			});
	}
}

export const receiveMessages = (messages) => {
    return function (dispatch) {
        Object.values(messages).forEach(msg => dispatch(addMessage(msg)));

        dispatch(receivedMessages());
    }
}