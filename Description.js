import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions,Text, TextInput,TouchableOpacity} from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/AntDesign'
import ReadMore from '@kangyoosam/react-native-readmore'
import Divider from 'react-native-divider';
//import hr from 'react-native-hr'
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Entypo';
import Icon5 from 'react-native-vector-icons/SimpleLineIcons'
import StarRate from './Rating'
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
const  DATA=[{name:"carousel1",pic:require('../images/carousel1.jpg')},{name:'carousel2',pic:require('../images/carousel2.jpg')},{name:'carousel3',pic:require('../images/carousel3.jpg')},{name:'carousel4',pic:require('../images/carousel4.jpg')},{name:'carousel5',pic:require('../images/carousel5.jpg')},{name:'carousel6',pic:require('../images/carousel6.jpg')}]

function renderimage(image, index) {
  return (
      <View key={index}>
          <Image style={{ marginTop:'3%',width: width, height: height*0.35 }} source={image.pic} />
      </View>
  );
}
 










export default function Slider(props) {
  const readMore = handlePress => (
    <Text  style={{marginLeft:'40%',color:'#e1275f',fontWeight:'bold',marginTop:'5%'}} onPress={handlePress}>
      READ MORE  <Icon3 size={15} name="right" color='#e1275f'/>
    </Text>
  )
 
  const hide = handlePress => {
    return null
  }
 
    const text="Minified React error #130; visit https://reactjs.org/docs/error-decoder.html?invariant=130&args[]=undefined&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings. )Minified React error #130; visit https://reactjs.org/docs/error-decoder.html?invariant=130&args[]=undefined&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings. )"
   
 
    {
        return (
            <ScrollView>
            <View style={styles.container}>
            
                <Carousel
                    autoplay={false}
                    index={0}
                    pageSize={width,height}
                >
                    {DATA.map((image, index) => renderimage(image, index))}
                </Carousel>
              
            <View style={{margin:'3%'}}>
            <Text style={{marginTop:'5%',fontWeight:'bold',fontSize:20}}>
                        Maybelline New York Fashion Brow Duo Shaper-Brown|0.61gm
            </Text>
            <StarRate/>
            <View style={{display:'flex',flexWrap:'wrap',flexDirection:"row",marginTop:"2%"}}>
            <Text style={{fontSize:15,color:"grey"}}>MRP:</Text>
            <Text style={{textDecorationLine:'line-through',textDecorationStyle:'solid',color:'grey',fontSize:15,marginLeft:"1%"}}><Icon1 size={15} name="rupee"/>1100</Text>
            <Text style={{fontWeight:'bold',fontSize:18,marginLeft:"2%"}}><Icon1 size={18} name="rupee"/>850 |</Text>
            <Text style={{fontWeight:'bold',fontSize:18,marginLeft:"2%",color:'#e1275f'}}>23% Off</Text>
            </View>
            <Text style={{fontSize:18,marginLeft:"1%",marginTop:'5%'}}>SOLD BY: Nykaa</Text>
            
            <View style={{display:'flex',flexWrap:'wrap',flexDirection:"row",marginTop:"2%",justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:30,height:30,borderRadius:15,marginTop:'5%',alignItems:'center',backgroundColor:'#e1275f'}}>
                    <Icon size={20} name="checkcircleo" color='white' style={{marginTop:'15%'}}/>
                    </View>
                    <Text style={{marginTop:'6%',marginLeft:'2%'}}>100% Authentic</Text>

            <View style={{width:30,height:30,borderRadius:15,marginTop:'5%',marginLeft:'5%',alignItems:'center',backgroundColor:'#e1275f'}}>
            <Icon size={20} name="back" color='white' style={{marginTop:'15%'}} />
            </View>
            <Text style={{marginTop:'6%',marginLeft:'2%'}}>Easy Return Policy</Text>
            </View>
            <Text style={{fontSize:20,marginTop:'5%'}}>Description</Text>
            <Text style={{fontSize:15,marginTop:'10%',fontWeight:'bold',marginLeft:'5%'}}>Aveeno Dry Skin Essentials Combo Contains:</Text>
            <View style={{marginTop:'5%'}}>            
              <ReadMore
            numberOfLines={2}
            renderTruncatedFooter={readMore}
            renderRevealedFooter={hide}
          >
            <Text style={{fontSize:20}}>
              {text}
            </Text>
          </ReadMore>
          </View>

            <View>
              <Text style={{marginTop:'5%', fontSize:20,fontWeight:'bold'}}>Delivery Options</Text>
              <TextInput style={{marginTop:'5%',height:40}}  placeholder='Enter Pincode' ></TextInput>
              <Text style={{fontSize:15,marginTop:'5%'}}>Check availability of COD option, estimated delivery date for online purchase, and availability in nearby retail store.</Text>
            </View>
            <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row',marginTop:'15%'}}>
         <TouchableOpacity>
     <Icon2  style={{marginLeft:'16%',marginTop:'5%'}} size={30} color="#e1275f" name="hearto" />
     </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:'#e1275f',height:height*0.05,width:width*0.7,justifyContent:'center',alignItems:'center'}}  onPress={()=>props.navigation.navigate('ShoppingBag')}>
      <Text style={{fontWeight:'bold',color:'white'}}>ADD TO BAG</Text>
    </TouchableOpacity>
   
    </View>

            </View>
            </View>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        
    },
});

Slider.navigationOptions=({navigation})=>({
  header:
  
  <View style={{justifyContent:'flex-start', flexDirection:'row',marginTop:'3%',height:height*0.06}}>
    <Image source={require('../images/pricrhatke.png')} />
    <TouchableOpacity>
    <Icon5 style={{marginLeft:'5%'}} size={25} name="handbag"/>
    </TouchableOpacity>
    <TouchableOpacity>
    <Icon4  style={{ marginLeft:'25%',marginRight:'5%'}} size={25} name="arrow-with-circle-up"/>
    </TouchableOpacity>
  </View>
  
  })