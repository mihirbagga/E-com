import React from 'react';
import {
    Text,
    View,
    
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions
} 
from 'react-native';
import Divider from 'react-native-divider'
import Carousel from 'react-native-banner-carousel';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
const  DATA=[{name:"image1",pic:require('../images/clogo.png')},{name:'image2',pic:require('../images/gp.png')},{name:'image3',pic:require('../images/bestdeal.png')}]
function renderimage(image, index) {
    return (
        <View key={index}>
            <Image style={{ marginTop:'4%',width: width, height: height*0.3 }} source={image.pic} />
        </View>
    );
  }

export default function Register(props)
{
    return(
        <ScrollView>
           <View>
                    <ImageBackground  source={require('../images/cover.jpg')} style={{width:width, height:height}}>

                    <Text style={{marginLeft:'14%',marginTop:'5%',width:'80%',justifyContent:'center',alignContent:'center'}} >COVID-19</Text>
                    
                        <Carousel
                            autoplay
                            autoplayTimeout={9000}
                            loop
                            index={0}
                            pageSize={width,height}
                        >
                            {DATA.map((image, index) => renderimage(image, index))}
                        </Carousel>
              
              <View style={{justifyContent:'center',alignItems:'center'}}>
            
                  <Text style={{marginTop:'15%',color:'white',fontSize:20}}>Login or Register</Text>
              
                      <TouchableOpacity onPress={()=>props.navigation.navigate('Login')} style={{width:width*0.9,height:height*0.07, marginTop:'5%',alignItems:'center',backgroundColor:'#e1275f',borderRadius:5}}>
                          <Text style={{fontSize:20,color:'white',marginTop:'3%'}}>Enter Phone Number or Email Id</Text>
                          </TouchableOpacity>
             
                          <Divider orientation='center' ><Text style={{color:'white',fontSize:20}}>Or</Text></Divider>
                        

                  <Text style={{marginTop:'1%',color:'white',fontSize:20}}>Continue with Social Login</Text>  
                  
                  <View style={{flexDirection:'row',display:'flex',flexWrap:'wrap'}}>
                 
                       <TouchableOpacity style={{width:width*0.4,height:height*0.08,marginTop:'5%',backgroundColor:'white',borderRadius:5,flexDirection:'row',justifyContent:'center'}}>
                              <Image source={require('../images/fb.png')} style={{width:width*0.1,height:height*0.05,marginTop:'5%'}}/>
                              <Text style={{fontSize:20,color:'black',marginLeft:'8%',marginTop:'8%'}}>Facebook</Text>
                          </TouchableOpacity>
                
                          <TouchableOpacity style={{width:width*0.4,height:height*0.08,marginTop:'5%',marginLeft:'10%' ,backgroundColor:'white',justifyContent:'center',borderRadius:5,flexDirection:'row'}}>
                              <Image source={require('../images/google.png')} style={{width:width*0.09,height:height*0.05,marginTop:'5%'}}/>
                              <Text style={{fontSize:22,color:'black',marginLeft:'8%',marginTop:'7%'}}>Google</Text>
                          
                          </TouchableOpacity>
                          
                          </View>
                          <TouchableOpacity onPress={()=>props.navigation.replace('Home',{show:"Hello"})}>
                          <Text style={{marginTop:'5%',color:'white',fontSize:20}}>Skip for now</Text>
                          </TouchableOpacity>
                  </View>
                  
            </ImageBackground>
            
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    styletext:{
        
        color:'white',
    },
    
      
    
})

Register.navigationOptions=({navigation})=>({
header:null
})