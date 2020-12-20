import React from 'react';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import {View,Text,TouchableOpacity,Dimensions,Button} from 'react-native'
import PasswordInputText from 'react-native-hide-show-password-input';
import Icon from 'react-native-vector-icons/Entypo'
import SignUp from './SignUp'
const { width, height } = Dimensions.get('window');

export default function Login(props) {

  const [getColor,setColor]=React.useState('#F5F5F5')
  const [getDisable,setDisable]=React.useState(true)
  const [getEmail,setEmail]=React.useState('')

  const handlePass=(text)=>{
    setEmail(text)
    if(text=='mihir'){
      setDisable(false)
        setColor('#e1275f') 
        
        4567
    }
    else{
      
      setDisable(true)
      setColor('#F5F5F5')
      }
}
 
   
    return (
      <View style={{flex:1}}>
        
        <View style={{marginTop:'15%',margin:'2%'}}>
       
      <OutlinedTextField
        label='Phone or Email'
        labelFontSize={18}
        placeholder="Enter Phone or Email ID"
        //keyboardType='phone-pad'
        tintColor='#e1275f'
        onChangeText={(text)=>handlePass(text)}
        
      />
      </View>
      
      <View style={{marginTop:'5%',margin:'2%'}}>
       
      <OutlinedTextField
        label='Password'
        labelFontSize={18}
        placeholder="Password"
        //keyboardType='phone-pad'
        tintColor='#e1275f'
        onChangeText={(text)=>handlePass(text)}
        
      />
       </View>

      
      <View style={{flex: 1,
      justifyContent: 'flex-end'}}>
     <TouchableOpacity disabled={getDisable} style={{backgroundColor:getColor,height:height*0.08,justifyContent:'center',alignItems:'center'}}  onPress={()=>props.navigation.navigate('SignUp')}>
         <Text style={{color:'black',fontSize:20 }}>PROCEED</Text>
     </TouchableOpacity>
    </View>
      </View>

      )
}

Login.navigationOptions=({navigation})=>({
  header:null
  
  })