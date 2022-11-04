import React, {useState, Component, useDebugValue } from "react";
import {IconButton,MD3Colors , SafeAreaView,ScrollView,TouchableOpacity, StyleSheet, Text, View ,StatusBar,TextInput,Dimensions, Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback} from "react-native";
import Button from "./Button";
import Row from "./Row";
import calculator, {initialState} from "../util/calculator"
import { DataProvider, LayoutProvider, RecyclerListView } from "recyclerlistview";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from "./SearchScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class HomeScreen extends Component {
    state = initialState;
    constructor(props) 
    {
        super(props);
        this.st = {
          list:[],
        };

        this.current_item = 0;

        this.Fetch_data();

        this.state = 
        {
            dataProvider: new DataProvider((r1, r2) => (r1 !== r2)).cloneWithRows(this.st.list),
            currentValue: "",
            result:"",
            btn_height : 60,
            input_font : 45,
            out_font : 35
        }
        
        this.layoutProvider = new LayoutProvider(
            (position) => 0,
            (type, size_holder) =>
            {
                size_holder.width = 200;
                size_holder.height = 60;
            }
        )

        Dimensions.addEventListener('change', () =>
        {
            let dim = Dimensions.get('screen');

            if(dim.width > dim.height)
            {
                this.setState({btn_height : 35, input_font : 15, out_font : 10});
                console.log('went here!!')
            }
            else
                this.setState({btn_height : 60, input_font : 45, out_font : 25})
        })
    }

    Store_data = async () =>
    {
        try
        {
            AsyncStorage.setItem('history', JSON.stringify(this.st.list));
        }
        catch(error)
        {
            console.log(error);
        }
    }
    
    Fetch_data = async () =>
    {
        AsyncStorage.getItem('history')
            .then(list_str => 
                {
                    if(list_str == null)
                        return;

                    this.st.list = JSON.parse(list_str);
                    
                    this.setState({dataProvider : this.state.dataProvider.cloneWithRows(
                        JSON.parse(list_str)
                    )});
                })
            .catch(error => console.log(error))
    }


    On_bind_view_holder(type, data)
    {
        return (
            <View style={{borderBottomWidth : 2, borderColor : 'lightgray'}}>
                <Text style={{color : 'white'}}>
                    {"Expr: " + data.expr}
                </Text>
                <Text style={{color : 'white'}}>{"Result: " + data.tol}</Text>
            </View>)
    }

    HandleTap = (type, value) =>
    {
        if(this.state.flag===true)
            this.st.list=[]
        if(type==="equal")
        {
            var temp={expr:this.state.currentValue,tol:this.state.result}
            this.st.list=[...this.st.list,temp]
            this.setState((state)=>calculator(type,value,state))

            this.setState({dataProvider : this.state.dataProvider.cloneWithRows(this.st.list)})
            this.Store_data()
        }
        else
            this.setState((state)=>calculator(type,value,state))
    }

    render() {
        const {navigation} = this.props

        return (
            <View style={{flex : 1, flexDirection : 'row'}}>
            <View style={styles.container}>

                <KeyboardAvoidingView style={styles.input}>     
                    <TextInput 
                        style = {{
                            color: "#fff",
                            fontSize: this.state.input_font,
                            textAlign: "right",
                            marginHorizontal:20,}}
                            keyboardType='numeric'
                            onChangeText={(text)=>this.HandleTap("text",text)}>

                        {this.state.currentValue}
                    </TextInput>
                </KeyboardAvoidingView>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.res} >                 
                        <View>
                            <Text style =
                            {{
                                color: "#fff",
                                fontSize: this.state.out_font,
                                textAlign: "right",
                                marginHorizontal:20,
                            }}>
                                {this.state.result}
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{flexDirection : "column"}}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.button}>
                        <Row>
                            <Button
                                btn_height={this.state.btn_height}
                                text="AC"
                                theme="secondary"
                                onPress={()=>this.HandleTap("clear")}/>

                            <Button
                                btn_height={this.state.btn_height}
                                text="C"
                                theme="secondary"
                                onPress={()=>this.HandleTap("C")}/>

                            <Button
                                btn_height={this.state.btn_height}
                                text="!"
                                theme='secondary'
                                onPress={()=>this.HandleTap("fac","!")}
                                />

                            <Button
                                btn_height={this.state.btn_height}
                                text="÷"
                                theme="accent"
                                onPress={()=>this.HandleTap("operator","/")}/>
                        </Row>

                        <Row>
                            <Button text= '7' btn_height={this.state.btn_height} onPress={()=>this.HandleTap("number",7)}/>
                            <Button text= '8' btn_height={this.state.btn_height} onPress={()=>this.HandleTap("number",8)}/>
                            <Button text= '9' btn_height={this.state.btn_height} onPress={()=>this.HandleTap("number",9)}/>
                            <Button text= 'x' btn_height={this.state.btn_height} theme={"accent"} onPress={()=>this.HandleTap("operator","*")}/>
                        </Row>

                        <Row>
                            <Button text= '4' btn_height={this.state.btn_height} onPress={()=>this.HandleTap("number",4)}/>
                            <Button text= '5' btn_height={this.state.btn_height} onPress={()=>this.HandleTap("number",5)}/>
                            <Button text= '6' btn_height={this.state.btn_height} onPress={()=>this.HandleTap("number",6)}/>
                            <Button text= '-' btn_height={this.state.btn_height} theme={"accent"} onPress={()=>this.HandleTap("operator","-")}/>
                        </Row>

                        <Row>
                            <Button text= '1' btn_height={this.state.btn_height} onPress={()=>this.HandleTap("number",1)}/>
                            <Button text= '2' btn_height={this.state.btn_height} onPress={()=>this.HandleTap("number",2)}/>
                            <Button text= '3' btn_height={this.state.btn_height} onPress={()=>this.HandleTap("number",3)}/>
                            <Button text= '+' btn_height={this.state.btn_height} theme={"accent"} onPress={()=>this.HandleTap("operator","+")}/>
                        </Row>

                        <Row>
                            <Button text= "0" btn_height={this.state.btn_height} onPress={() => this.HandleTap("number", 0)} />
                            <Button text= "." btn_height={this.state.btn_height} onPress={() => this.HandleTap("dot", ".")} />
                            <Button text= "^" btn_height={this.state.btn_height} theme="accent" onPress={()=>this.HandleTap("exp","^")}/>
                            <Button text= "=" btn_height={this.state.btn_height} theme="accent" onPress={() => this.HandleTap("equal", "=")}
                            />
                        </Row>
                        
                    </View>               
                </TouchableWithoutFeedback>
                </View>
            </View>
                <View style={{flex : 1, flexDirection : 'column', backgroundColor : '#202020'}}>
                    <RecyclerListView
                        style={{flex : 1, backgroundColor: "#202020"}}
                        dataProvider={this.state.dataProvider}
                        layoutProvider={this.layoutProvider}
                        rowRenderer={this.On_bind_view_holder}/>

                    <TextInput
                        style={{height : 70, backgroundColor : 'lightgray', padding : 10, borderRadius : 16, marginHorizontal : 10}}
                        placeholder="Search"/>
                </View>
            </View>
        )
    }
}

const screen = Dimensions.get("window");
const styles = StyleSheet.create({
    container: 
    {
        flex : 1.5,
        flexDirection : 'column',
        justifyContent : 'space-around',
        backgroundColor: "#202020",
    },

    input:
    {
        padding : 10,
        backgroundColor:'#a9a9a9',
        justifyContent:'center',
    },

    res:
    {
        padding : 30,
        marginVertical : 10,
        backgroundColor:'gray',
        flexDirection:'row',
        
    },
    textInput: 
    {
        backgroundColor: '#BFBFBF',
        borderRadius: 10,
        height: 50,
        fontSize: 15,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    button_style:
    {
        backgroundColor : 'lightgray',
        paddingHorizontal : 40,
        paddingVertical : 10,
        borderRadius : 20
    }
  });