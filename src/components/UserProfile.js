import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { sendMessage } from '../actions'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // redux call fetch
  }

  onSave = () => {
    this.props.dispatch(sendMessage("test"));
  }

  render() {
    return (
    <View style={styles.container}>
        <Text>Email:</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity>
          <Text style={styles.button}  onPress={this.onSave}>Save</Text>
        </TouchableOpacity>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
});

export default connect()(UserProfile);