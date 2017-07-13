import React from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile';

function mapStateToProps(state) {
    console.log("map state to props", state);
  return { data: state.profile };
}

class Profile extends React.Component{
    render() {
        const { data, dispatch } = this.props;
        return (
            <UserProfile data={data} />
        );
    }
}

export default connect(mapStateToProps)(Profile)

