import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile';

function mapStateToProps(state) {
    console.log("map state to props", state);
  return { data: state.profile, isFetching: state.isFetching };
}

class Profile extends React.Component{
    render() {
        const { data, dispatch, isFetching } = this.props;
        return (
            <UserProfile data={data} isFetching={isFetching}/>
        );
    }
}

export default connect(mapStateToProps)(Profile)

