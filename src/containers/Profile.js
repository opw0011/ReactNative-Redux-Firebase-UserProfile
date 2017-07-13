import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile';
import { sendMessage, fetchMessages } from '../actions'

function mapStateToProps(state) {
	console.log("map state to props", state);
  return { data: state.profile, isFetching: state.isFetching };
}

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.props.dispatch(fetchMessages());
	}
	
	render() {
		const { data, dispatch, isFetching } = this.props;
    if (isFetching) {
        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
            </View>
        );
    }
		return (
				<UserProfile data={data} />
		);
	}
}

export default connect(mapStateToProps)(Profile)

