import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { sendMessage, fetchMessages } from '../actions'
import { Form, Separator, InputField } from 'react-native-form-generator';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    }
  }

  componentDidMount() {
    let savedProfile = this.props.data;
    console.log("mounted component: ", savedProfile);
  }

  onSave = () => {
    this.props.dispatch(sendMessage(this.state.formData));
    alert("Changes have been saved !");
  }

  handleFormChange(formData){
    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }

  render() {
    let savedProfile = this.props.data;
    return (
    <ScrollView style={styles.container}>
      <Form
        ref='userProfileForm'
        onChange={this.handleFormChange.bind(this)}
        label="User Profile">
        <Separator />
        <InputField
          ref='firstName'
          label='First Name'
          placeholder='First Name'
          value={savedProfile.firstName || ''}
          />
        <InputField
          ref='lastName'
          label='Last Name'
          placeholder='Last Name'
          value={savedProfile.lastName || ''}
          />
        <Separator />

        <InputField
          ref='company'
          label='Company'
          placeholder='Company'
          value={savedProfile.company|| ''}
          />
        <InputField
          ref='department'
          label='Department'
          placeholder='Department'
          value={savedProfile.department || ''}
          />
        <InputField
          ref='position'
          label='Position'
          placeholder='Position'
          value={savedProfile.position || ''}
          />

        <Separator />

        <InputField
          ref='email'
          label='Email'
          placeholder='Email'
          value={savedProfile.email || ''}
          />
        <View style={{flex: 1, alignItems:'center'}}>
          <TouchableOpacity style={styles.button} onPress={this.onSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity> 
        </View>
      </Form>
      
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20, 
    height: 200,
    flex: 1,
    backgroundColor: '#EEE'
  }, 
  button: {
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    height: 60,
    marginTop: 30,
    width: 180,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  }
});

export default connect()(UserProfile);