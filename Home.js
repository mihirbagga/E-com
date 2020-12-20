import React,{useState,useEffect} from 'react';
import {TouchableOpacity,TextInput,Dimensions,ImageBackground,  SafeAreaView, Button,View, FlatList, StyleSheet, Text,Image, Alert } from 'react-native';
//import Icon  from "react-native-vector-icons/FontAwesome"
//import MCIcon  from "react-native-vector-icons/MaterialCommunityIcons"
//import ShoppingCartIcon from './ShoppingCartIcon'
import {getData,postData,BaseURL} from "./FetchServices"
import Slider from './Carousel';
import MultipleList from './MultipleList';
import TopBrands from './TopBrands';
import Horizontalcard from './sidecard';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/EvilIcons';
import Icon4 from 'react-native-vector-icons/Entypo';
import Icon5 from 'react-native-vector-icons/SimpleLineIcons'
import { ScrollView } from 'react-native-gesture-handler';
import Menu from './menu'
const { width, height } = Dimensions.get('window');
const  DATA=[{name:"maincard1",pic:require('../images/maincard1.jpg')},{name:'maincard2',pic:require('../images/maincard2.jpg')},{name:'maincard3',pic:require('../images/maincard3.jpg')},{name:'maincard4',pic:require('../images/maincard4.jpg')},{name:'maincard5',pic:require('../images/maincard5.jpg')},{name:'maincard6',pic:require('../images/maincard6.jpg')}]
function Item({ item,props }) {
    return (
         <View>
      <View style={styles.mainContainer}>
     <TouchableOpacity onPress={()=>props.navigation.navigate('Subcard')}>   
     <Image  style={styles.mainImageStyle} source={item.pic}  />
     </TouchableOpacity>
     </View>
   </View>    
  );
}
export default function Home(props) {
  //props.navigation.addListener( "willFocus", e => updateHeader())
  function updateHeader()
  {props.navigation.setParams({x:''})}
  const [getList,setList]=useState(null)
  const [getSearch,setSearch]=useState('')
 
  const fetchData=async()=>{
   var list=await getData('pack/category')
   setList(list)

  }
  const searchData=async(categoryname)=>{
    let body={'categoryname':categoryname}
    var list=await postData('pack/searchByCategory',body)
     await setList(list)
 
   }
 const handleChange=async(txt)=>{
  await setSearch(txt)
  searchData(txt)

 }
  useEffect(function(){
    // alert(props.navigation.getParam('show'))
    fetchData()


  },[])
  return (
    <SafeAreaView>
      <ScrollView>
    <View>
    <View style={styles.container}>
       
       <View style={styles.SectionStyle}>

      <Icon3 name="search" size={25} />

         <TextInput
             style={{flex:1}}
             placeholder="Search Products or Brands..."
             underlineColorAndroid="transparent"
         />

       </View>

     </View>
    
   <View>
   <Slider/>
   </View>
   
     <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} props={props} />}
        keyExtractor={item => item.name}
        
        
      />
     

      <View>
        <MultipleList/>
      </View>
      <View>
        <TopBrands/>
      </View>
      <View style={{flexDirection:'row',marginTop:'20%'}}>

        <View style={{justifyContent:'center',alignItems:'center',flex:1,margin:'5%'}}>
                <View style={{width:60,height:60,borderRadius:30,justifyContent:'center',alignItems:'center',backgroundColor:'#e1275f'}}>
                   <Icon  size={40} color="white" name="md-pricetag" />
                </View>
         <Text style={{fontWeight:'bold',fontSize:15,marginTop:'2%',textAlign:'center'}}>850+ BRANDS</Text>
         </View>

         <View style={{justifyContent:'center',alignItems:'center',flex:1,margin:'5%'}}>
            <View style={{width:60,height:60,borderRadius:30,backgroundColor:'#e1275f',justifyContent:'center',alignItems:'center'}}>
            <Icon1  size={30} color="white" name="shipping-fast" />
            </View>
            <Text style={{fontWeight:'bold',marginTop:'2%',fontSize:15,textAlign:'center'}}>FREE SHIPPING</Text>
            </View>

            <View style={{justifyContent:'center',alignItems:'center',flex:1,margin:'5%'}}>
              <View style={{width:60,height:60,borderRadius:30,backgroundColor:'#e1275f',justifyContent:'center',alignItems:'center'}}>
              <Icon2 size={30} color="white" name="round-brush" />
              </View>
              <Text style={{fontWeight:'bold',marginTop:'2%',fontSize:15,textAlign:'center'}}>GENUINE PRODUCTS</Text>
              </View>
          
        </View>
        
     
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
 

const styles = StyleSheet.create({
  
 
  mainHeadStyle:{
    flexDirection:'row', 
   
    marginTop:20, 
    marginBottom:7,
    padding:5,
      },
      mainImageStyle:{

         width:width*0.98,
         height:height*0.4,
        
        },
       
  userTextStyle:{
    position:'absolute',
    backgroundColor:'green',
    paddingLeft:25,
    paddingRight:25,
    
    

  },
   

textStyle:{color:'#2c3e50',fontSize:32,
fontWeight:'bold', },

 

mainContainer:{
width:width,
justifyContent:"center",
alignItems:"center",
marginBottom:7,
marginTop:'2%'
  },
textContainer:{
 flexDirection:'row', 
marginBottom:15,
justifyContent:'center',
 alignItems:'center',
 
},
                 
textStyleText: {
fontSize: 20,
fontWeight: 'bold',
width:width*0.90,
marginLeft:5
},
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:'15%'
},

SectionStyle: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: .5,
  borderColor: '#000',
  height:height*0.06,
  borderRadius: 5,
  width:width*0.9
  
},

ImageStyle: {
  padding: 10,
  margin: 5,
  height: 25,
  width: 25,
  resizeMode : 'stretch',
  alignItems: 'center'
},
 
  
});
Home.navigationOptions=({navigation})=>({
  header:
  
  <View style={{justifyContent:'flex-start', flexDirection:'row',marginTop:'3%',height:height*0.06}}>
    <Image source={require('../images/pricrhatke.png')} />
    <TouchableOpacity>
    <Icon5 style={{marginLeft:'5%'}} size={25} name="handbag"/>
    </TouchableOpacity>
  
    <Menu/>
    
  </View>
  
  })

 
