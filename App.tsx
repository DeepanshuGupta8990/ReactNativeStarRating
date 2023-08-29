import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { AirbnbRating,Rating } from 'react-native-ratings'

export class App extends Component {
  render() {
    return (
      <View>
        <Text> hello deepanshu </Text>
        <AirbnbRating 
        reviews={['Poor',"Very Bad","Bad","OK","Good","Very Good",'Excellent']}
        count={7}
        defaultRating={2}
        // size={20}
        // reviewSize={10}
        // showRating={false}
        // isDisabled={true}
        // unSelectedColor='grey'
        // selectedColor='yellow'
        // starContainerStyle={{backgroundColor:"red"}}
        // ratingContainerStyle={{backgroundColor:'red'}}
        // starImage={require('./facebook-icon.png')}
        onFinishRating={(rating)=>{console.log(rating)}}
        />

        <Rating
        type='star' //heart , star , bell, rocket
        ratingCount={7}
        showRating={true}
        // ratingTextColor='red'
        // readonly
        showReadOnlyText={false}
        fractions={1}
        jumpValue={0.5}
        startingValue={0}
        // onStartRating={(rating:any)=>{console.log(rating)}}
        // onFinishRating={(rating:any)=>{console.log(rating)}}
        onSwipeRating={(rating:any)=>{console.log(rating)}}
        />
      </View>
    )
  }
}

export default App
