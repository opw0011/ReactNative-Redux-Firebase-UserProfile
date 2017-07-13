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
    this.refs.userProfileForm.refs.firstName.setValue(savedProfile.firstName || '');
    this.refs.userProfileForm.refs.lastName.setValue(savedProfile.lastName || '');
    this.refs.userProfileForm.refs.company.setValue(savedProfile.company || '');
    this.refs.userProfileForm.refs.department.setValue(savedProfile.department || '');
    this.refs.userProfileForm.refs.position.setValue(savedProfile.position || '');
    this.refs.userProfileForm.refs.email.setValue(savedProfile.email || '');
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
    console.log("Receive***in render", this.props);   
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
          />
        <InputField
          ref='lastName'
          label='Last Name'
          placeholder='Last Name'
          />
        <Separator />

        <InputField
          ref='company'
          label='Company'
          placeholder='Company'
          />
        <InputField
          ref='department'
          label='Department'
          placeholder='Department'
          />
        <InputField
          ref='position'
          label='Position'
          placeholder='Position'
          />

        <Separator />

        <InputField
          ref='email'
          label='Email'
          placeholder='Email'
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
    backgroundColor: '#EE1E'
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