import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image,Dimensions,TextInput,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import NumericInput from 'react-native-numeric-input'
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Octicons'
import Icon3 from 'react-native-vector-icons/Entypo'
import Icon4 from 'react-native-vector-icons/Feather'
const{height,width}=Dimensions.get('window')

export default function ShoppingBag(props){
    const[quantity,setquantity]=React.useState(1)


    return(
        
          
                <ScrollView>
                  <View style={{marginLeft:'2%',marginTop:'5%'}}>
                <View style={styles.Container}>

                      <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row',}}>
                              <Image source={require('../images/feature2.jpg')} style={{height:height*0.1, width:width*0.2,marginTop:'5%',marginLeft:'5%'}}/>
                              <Text style={{flex:1,marginLeft:'5%',marginTop:'5%'}}>Aveeno Baby Daily Moisturizing Wash Combo Pack</Text>
                              <TouchableOpacity>                  
                              <Icon style={{marginLeft:'2%',marginTop:'15%',marginRight:'2%'}} size={25} name="delete"/>
                              </TouchableOpacity>
                              <View style={{backgroundColor:'grey',width:width*0.96,height:height*0.002,marginTop:'5%'}}></View>
                      </View>

                      <View style={{marginTop:'5%',marginLeft:'5%',display:'flex',flexWrap:"wrap",flexDirection:'row'}} >                    
                            <Text style={{fontSize:15}}>Quantity:</Text>
                            <NumericInput 
                                  value={quantity} 
                                  onChange={value => setquantity({value})} 
                                  containerStyle={{marginLeft:'5%'}}
                                  totalWidth={100} 
                                  totalHeight={30} 
                                  iconSize={5}
                                  rounded
                                  valueType='real'
                                  textColor='#B0228C' 
                                  iconStyle={{ color: 'white' }} 
                                  rightButtonBackgroundColor='#e1275f' 
                                  leftButtonBackgroundColor='#e1275f'/>

                            <Text style={{textDecorationLine:'line-through',textDecorationStyle:'solid', color:'grey',marginLeft:'20%'}}><Icon1 size={15} name="rupee"/>FREE</Text>
                            <Text style={{fontWeight:'bold',marginLeft:'2%'}}><Icon1 size={15} name="rupee"/>FREE</Text>
                      </View>
           </View>
            <View  style={{marginTop:'5%',backgroundColor:'#F5F5F5',width:width*0.96,height:height*0.09,flexDirection:'row',justifyContent:'space-between'}}> 
            <Text style={{marginLeft:'5%',marginTop:'5%',textAlign:'left'}}><Icon2 size={15} name="gift"/> ADD A GIFT BOX FOR  <Icon1 size={15} name="rupee"/> 30  </Text>  
            <Text style={{marginRight:'5%',marginTop:'5%',textAlign:'right'}}><Icon name="right" color="#e1275f" size={20}/></Text>
            </View>

            <View  style={{marginTop:'5%',backgroundColor:'#F5F5F5',width:width*0.96,height:height*0.3}}> 
            <Text style={{marginTop:'2%',marginLeft:'30%',fontWeight:'bold',fontSize:20}}>Payment Details</Text>
            <View style={{backgroundColor:'grey',width:width*0.96,height:height*0.002,marginTop:'2%'}}></View>
            

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'5%'}}>
               <Text style={{textAlign:'left',marginLeft:'5%'}}>Bag Total</Text>
               <Text style={{textAlign:'right',marginRight:'5%'}}><Icon1  size={15} name="rupee"/>FREE</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'2%'}}>
                  <Text style={{textAlign:'left',marginLeft:'5%'}}>Bag Discount</Text>
                  <Text style={{textAlign:'right',marginRight:'5%'}}>-<Icon1  size={15} name="rupee"/>FREE</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'2%'}}>
                  <Text style={{textAlign:'left',marginLeft:'5%'}}>Subtotal</Text>
                  <Text style={{textAlign:'right',marginRight:'5%'}}><Icon1  size={15} name="rupee"/>FREE</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'2%'}}>
                  <Text style={{textAlign:'left',marginLeft:'5%'}}>Shipping Charges</Text>
                  <Text style={{textAlign:'right',marginRight:'5%'}}>FREE</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'2%'}}>
                  <Text style={{textAlign:'left',marginLeft:'5%',fontWeight:'bold'}}>GRAND TOTAL</Text>
                  <Text style={{textAlign:'right',marginRight:'5%',fontWeight:'bold'}}><Icon1  size={15} name="rupee"/>FREE</Text>
            </View>
                
                

            
            </View>
            <View style={{backgroundColor:'#F5F5F5',marginTop:'5%',width:width*0.96,height:height*0.08}}>
                <TouchableOpacity>
                      <Text style={{color:'#e1275f',textAlign:'right',fontWeight:'bold',marginRight:'5%',marginTop:'5%'}}>VIEW COUPONS</Text>
                </TouchableOpacity>
          </View>
          <View style={{backgroundColor:'grey',width:width*0.96,height:height*0.002,marginTop:'5%'}}></View>
            
            <View style={{marginTop:'1%', justifyContent:'space-between',flexDirection:'row'}}>
                 <Text style={{marginLeft:'2%',flex:1}}> Earn 1119 Rewards Points on delivery of this order</Text>
                 <Text style={{marginRight:'10%',textAlign:'right',flex:1}}>Net Savings <Icon1  size={15} name="rupee"/>479 </Text>
            </View>
            <View style={{backgroundColor:'grey',width:width*0.96,height:height*0.002,marginTop:'2%'}}></View>

          </View>

        <View style={{display:'flex',flexDirection:'row'}}>
              <View style={{width:width*0.5,height:height*0.08,flex:1,marginTop:'10%',marginLeft:'2%'}}>
                  <Text>Grand Total:</Text>
                  <View style={{flexDirection:'row'}}>
                  <Text style={{textDecorationLine:'line-through',textDecorationStyle:'solid'}}> <Icon1  size={15} name="rupee"/>3196</Text>
                  <Text style={{color:'#e1275f'}}> <Icon1  size={15} name="rupee"/>2238</Text>
                  <TouchableOpacity style={{marginLeft:'15%'}}>
                  <Icon4 size={15} name="info" ></Icon4>
                  </TouchableOpacity>
                  </View>
              </View>
          
     <TouchableOpacity style={{backgroundColor:'#e1275f',width:width*0.5,height:height*0.08,alignItems:'center',marginTop:'10%'}}>
         <Text style={{color:'white',fontSize:20,marginTop:'5%'}}>CHECKOUT</Text>
     </TouchableOpacity>
     </View>
            </ScrollView>
 
 )
}
const styles = StyleSheet.create({
   

     Container:{
        width:width*0.96,
        height:height*0.24,
        backgroundColor:'#F5F5F5'    
     }
})