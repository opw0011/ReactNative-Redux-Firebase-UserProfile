import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { sendMessage } from '../actions'
import { Form, Separator,InputField } from 'react-native-form-generator';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData:{}
    }
  }

  componentDidMount() {
    // redux call fetch
  }

  onSave = () => {
    this.props.dispatch(sendMessage("test"));
  }

  handleFormChange(formData){
    /*
    formData will contain all the values of the form,
    in this example.

    formData = {
    first_name:"",
    last_name:"",
    gender: '',
    birthday: Date,
    has_accepted_conditions: bool
    }
    */

    this.setState({formData:formData})
    console.log(this.state.formData);
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }

  render() {
    return (
    <ScrollView style={{paddingLeft:10,paddingRight:10, height:200}}>
      <Form
        ref='registrationForm'
        onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        label="Personal Information">
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
        
        <TouchableOpacity>
          <Text style={styles.button}  onPress={this.onSave}>Save</Text>
        </TouchableOpacity> 
      </Form>

    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }, 
  button: {
    backgroundColor: '#03a9f4',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    flex: 1
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
});

export default connect()(UserProfile);