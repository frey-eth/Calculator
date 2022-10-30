import React, {useState, Component, useDebugValue } from "react";
import {IconButton,MD3Colors , SafeAreaView,ScrollView,TouchableOpacity, StyleSheet, Text, View ,StatusBar,TextInput,Dimensions, Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback} from "react-native";
import Button from "./Button";
import Row from "./Row";
import calculator, {initialState} from "../util/calculator"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from "./SearchScreen";


export default class HomeScreen extends Component {
    state = initialState;
    constructor(props) {
        super(props);
        this.st = {
          list:[],
        };
      
    }    
    HandleTap = (type, value) =>{
        if(this.state.flag===true)
            this.st.list=[]
        if(type==="equal")
        {
            var temp={expr:this.state.currentValue,tol:this.state.result}
            this.st.list=[...this.st.list,temp]
            this.setState((state)=>calculator(type,value,state))
        }
        else
            this.setState((state)=>calculator(type,value,state))
    }

    render() {
        const {navigation} = this.props

        return (
            <View style={styles.container}>
                <StatusBar 
                    animated={true}
                    backgroundColor="#202020"
                >
                </StatusBar>  
                
                <View style={{flex:1,justifyContent:"center"}}>
    
                    <Button text='Search' onPress={()=>{
                    navigation.navigate('SearchScreen',{Hislist:this.st.list})
                }}></Button>
                </View>  
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView style={styles.input}>     
                    <TextInput style = {styles.value}
                        keyboardType='numeric'
                        onChangeText={(text)=>this.HandleTap("text",text)}>
                            {this.state.currentValue}
                    </TextInput>
                </KeyboardAvoidingView>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.res} >                 
                    <View style={{flex:4,}}>
                        <Text style ={styles.resvalue}>
                            {this.state.result}
                        </Text>
                    </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.button}>
                    <Row>
                        <Button
                            text="AC"
                            theme="secondary"
                            onPress={()=>this.HandleTap("clear")}/>
                        
                        <Button
                            text="C"
                            theme="secondary"
                            onPress={()=>this.HandleTap("C")}/>

                        <Button
                            text="!"
                            theme='secondary'
                            onPress={()=>this.HandleTap("fac","!")}
                            />
                        
                        <Button
                            text="÷"
                            theme="accent"
                            onPress={()=>this.HandleTap("operator","/")}/>
                    </Row>

                    <Row>
                        <Button text= '7' onPress={()=>this.HandleTap("number",7)}/>
                        <Button text= '8' onPress={()=>this.HandleTap("number",8)}/>
                        <Button text= '9' onPress={()=>this.HandleTap("number",9)}/>
                        <Button text= 'x' theme={"accent"} onPress={()=>this.HandleTap("operator","*")}/>
                    </Row>

                    <Row>
                        <Button text= '4' onPress={()=>this.HandleTap("number",4)}/>
                        <Button text= '5' onPress={()=>this.HandleTap("number",5)}/>
                        <Button text= '6' onPress={()=>this.HandleTap("number",6)}/>
                        <Button text= '-' theme={"accent"} onPress={()=>this.HandleTap("operator","-")}/>
                    </Row>

                    <Row>
                        <Button text= '1' onPress={()=>this.HandleTap("number",1)}/>
                        <Button text= '2' onPress={()=>this.HandleTap("number",2)}/>
                        <Button text= '3' onPress={()=>this.HandleTap("number",3)}/>
                        <Button text= '+' theme={"accent"} onPress={()=>this.HandleTap("operator","+")}/>
                    </Row>

                    <Row>
                        <Button text= "0" onPress={() => this.HandleTap("number", 0)} />
                        <Button text= "." onPress={() => this.HandleTap("dot", ".")} />
                        <Button text= "^" theme="accent" onPress={()=>this.HandleTap("exp","^")}/>
                        <Button text= "=" theme="accent" onPress={() => this.HandleTap("equal", "=")}
                        />
                    </Row>
                    
                </View>               
                </TouchableWithoutFeedback>    
            </View>

        )
    }
}

const screen = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#202020",
      //justifyContent:"center",
    },
    input:{
        flex:1.75,
        backgroundColor:'#a9a9a9',
        justifyContent:'center',
        //backgroundColor:"blue"
    },
    res:{
        flex:1,
        //backgroundColor:'blue',
        flexDirection:'row',
        
    },
    button:{
        flex:5,
        //backgroundColor:'red',
    },
    value: {
      color: "#fff",
      fontSize: 42,
      textAlign: "right",
      marginHorizontal:20,
    },
    resvalue: {
        color: "#fff",
        fontSize: 22,
        textAlign: "right",
        marginHorizontal:20,
      },
    textInput: {
        backgroundColor: '#BFBFBF',
        borderRadius: 10,
        height: 50,
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal:screen.width/20,
        paddingHorizontal: 10,
      },
    hisbt:{
        flex:1,
        borderRadius:30,
        marginLeft:screen.width/40,
        marginVertical:screen.width/40,
        //backgroundColor:"red",
    },
  });