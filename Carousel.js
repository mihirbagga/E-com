import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
//const BannerWidth = Dimensions.get('window').width;
//const BannerHeight = 260;
 
const  DATA=[{name:"carousel1",pic:require('../images/carousel1.jpg')},{name:'carousel2',pic:require('../images/carousel2.jpg')},{name:'carousel3',pic:require('../images/carousel3.jpg')},{name:'carousel4',pic:require('../images/carousel4.jpg')},{name:'carousel5',pic:require('../images/carousel5.jpg')},{name:'carousel6',pic:require('../images/carousel6.jpg')}]

function renderimage(image, index) {
  return (
      <View key={index}>
          <Image style={{ marginTop:'2%',width: width, height: height*0.4 }} source={image.pic} />
      </View>
  );
}
 
export default function Slider() {
    
 
    {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={3000}
                    loop
                    index={0}
                    pageSize={width,height}
                >
                    {DATA.map((image, index) => renderimage(image, index))}
                </Carousel>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});