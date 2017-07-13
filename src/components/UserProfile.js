import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { sendMessage, fetchMessages } from '../actions'
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
    this.props.dispatch(fetchMessages());
    console.log("Get profile props: ", this.props.profiles);
  }

  onSave = () => {
    this.props.dispatch(sendMessage(this.state.formData));
    alert("Changes have been saved !");
  }

  handleFormChange(formData){
    this.setState({formData:formData})
    console.log(this.state.formData);
    this.props.onFormChange && this.props.onFormChange(formData);
  }

  render() {
    return (
    <ScrollView style={{paddingLeft:10,paddingRight:10, height:200}}>
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