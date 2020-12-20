
import React from 'react';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import NewBrands from './NewBrands';

const  DATA=[{name:"LAKME",pic:require('../images/lakme1.png')},{name:"L'OREAL",pic:require('../images/loreal.png')},{name:'MAYBELLINE',pic:require('../images/maybelline.png')},{name:'BIOTIQUE',pic:require('../images/biotique.png')},{name:'NYX',pic:require('../images/nyx.png')},{name:'THE FACE SHOP',pic:require('../images/thefaceshop.png')}]

function Brands({ item,props }) {
   
      return (
         <View>
        <TouchableOpacity onPress={()=>props.navigation.navigate('FoodListBiryani',{category:JSON.stringify(item)})}>  
     <View style={styles.mainContainer} >
    
     < Image source={item.pic} style={styles.itemVertical} />
    
     
    
   </View>
   </TouchableOpacity>
   </View> 
   
  );
}

export default function TopBrands(props) {
  
  
    return (
      <View >
        <Text style={{fontSize:25,fontWeight:'bold',width:width*0.9,marginTop:'10%',marginLeft:'5%'}}>Top Brands</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Brands item={item} props={props} />}
          keyExtractor={item => item.name}
          numColumns={2}
          
        />
        <View style={{marginTop:'5%'}}>
            <NewBrands/>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  mainContainer: {
    
    
    justifyContent:"center",
    alignItems:"center",
    marginBottom:7,
    marginLeft:'3%',
    
    marginTop:'10%'
  },
 
  itemVertical: {
    marginTop:2 ,
    marginLeft: 2,
    width:width*0.46,
    height:height*0.11,
    
  },
  userTextStyle:{
    position:'absolute',
    backgroundColor:'#ffffff',
    paddingLeft:25,
    paddingRight:25,
    borderTopLeftRadius:15,
    borderBottomRightRadius:15,
  

  },
  textStyleText: {
                
    fontSize: 20,
    fontWeight: 'bold',
    width:width*0.90,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:5
   },
  

 
});

