import React,{Component} from "react";
import {View, Text, FlatList, StyleSheet, Alert, 
        SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground
        , Image} from "react-native"
import axios from "axios"

export default class Planet extends Component{
    constructor(props){
    super(props)
    this.state = {
        listData : [],
        ImagePath : "",
        url: "https://2431-2405-201-8008-e095-a413-c282-beb3-6a86.ngrok.io",
        
    };

    }
    componentDidMount(){
        this.getPlanets();


    }
    getPlanets=()=>{
        const{url} = this.state;
        axios
        .get(url)
        .then((response)=> {
            this.setState({
                listData:response.data.data,
                
            });
            
        })

        .catch((error) =>{
          Alert.alert(error.message);
            
        });

    };

    setDetails = (planetDetails)=>{
        const planetType = planetDetails.planet_type;
        let imagePath = "";
        switch(planetType){
            case "Gas Giant":
                imagePath = require("../assets/Gas_Giant.png");
                break;
              case "Terrestrial":
                imagePath = require("../assets/Terrestrial.png");
                break;
              case "Super Earth":
                imagePath = require("../assets/Super_Earth.png");
                break;
              case "Neptune Like":
                imagePath = require("../assets/Neptune-like.png");
                break;
              default:
                imagePath = require("../assets/Gas_Giant.png")
        }

        this.setState({
            details: planetDetails,
            imagePath: imagePath,
        });
    };

    renderItem = ({item,index})=>{
        this.setDetails(item);
        return(
        <TouchableOpacity style = {[
            styles.listItem,
          { backgroundColor: this.selectColor(index), opacity: 0.7 }
        ]}
        onPress = {() => this.props.navigation.navigate("Home",{planet_name:item.name})}
        >
        <Image source = {this.state.imagePath}
        style = {styles.cardImage}>
        </Image>
        
        <View style = {styles.nameCardPlanet}>
        <Text style = {styles.title}>{item.name}</Text> 
        </View>
        </TouchableOpacity>

        );
    };
    
    keyExtractor = (planet.os === "andriod")
        
};

render()
    const {listData} = this.state;
    if(listData.length != 0){
        return(
            <View style= {styles.container}>
            <SafeAreaView
            style = {{
                marginTop:10
            }}
/>

            <ImageBackground source = {require("../assets/bg.png")}>
            </ImageBackground>            
            </View>
        )
    
}