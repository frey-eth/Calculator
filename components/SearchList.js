import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import { InitialState } from '@react-navigation/native';

import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Dimensions,
    Button,
} from 'react-native';


export default function SearchList(props) {
    const { dataSource } = props
    const [filter,setfilter] = useState([])
    const handleText=(text)=>{
        text = text.replace(/\s+/g, '')
        if(text){   
            const temp = text.toLowerCase()
            const templist = dataSource.filter(item => {
                if (item.expr.toString().includes(temp)||item.tol.toString().includes(temp))
                return item
            })
            setfilter(templist)
        }
        else
            setfilter([])
    }

    
    return (
        <View onPress={props.onPress}
              style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <TextInput autoFocus={true} 
                        placeholder='Click here to view History'  
                        style={styles.textInput} 
                        onPressIn={()=>setfilter(dataSource)} 
                        onChangeText={(text)=>handleText(text)}>
                </TextInput>
                <TouchableOpacity 
                    style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        borderRadius: 20,
                        width: screen.width/7,
                        justifyContent:"center",
                        alignItems:"center",
                    }}
                    onPress={()=>setfilter(dataSource)}>
                    <Text style={{fontSize:35,fontWeight:"800"}}>↻</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.subContainer}>
                {
                    filter.length ?
                    filter.map(item => {
                            return (
                                <View style={styles.itemView}>
                                        <TouchableOpacity>
                                            <Text style={styles.itemTextExp}>Exp: {item.expr}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={styles.itemTextRes}>Res: {item.tol}</Text>
                                        </TouchableOpacity>
                                </View>   
                            )
                        })
                        :null
                        // <View
                        //     style={styles.noResultView}>
                        //     <Text style={styles.noResultText}>No search items matched</Text>
                        // </View>
                }
                </View>
            </ScrollView>
        </View>
    )
}

const screen = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '1%',
        left: 0, right: 0, bottom: 0,
        backgroundColor:"white",
    },
    subContainer: {
        backgroundColor: 'white',
        paddingTop: 10,
        //marginHorizontal: 20,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        flexWrap: 'wrap',

        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    itemView: {
        backgroundColor:"#BFBFBF",
        width:"88%",
        marginBottom:screen.width/50,
        justifyContent: 'center',
        borderRadius: 6,
        alignItems:"center",
    },
    itemText: {
        color: 'black',
        fontSize:30,
        fontWeight:"bold",
        justifyContent:"center",
        alignItems:"center",
    },
    itemTextExp: {
        color:"green",
        fontSize:30,
        justifyContent:"center",
        alignItems:"center",
    },
    itemTextRes: {
        color:"blue",
        fontSize:30,
        justifyContent:"center",
        alignItems:"center",
    },
    noResultView: {
        height: screen.height/15,
        marginVertical:screen.height/150,
        paddingVertical:10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    noResultText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        justifyContent:'center',
        alignItems:"center",
    },
    textInput: {
        backgroundColor: '#BFBFBF',
        borderRadius: 10,
        height: screen.height/15,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft:screen.width/7,
        paddingHorizontal: 10,
        textAlign: "left",
        width: "70%"
      },

    clearButton:{
        backgroundColor: '#BFBFBF',
        width:"20%",
        borderRadius:10,
        height: 10,
        fontSize:20,
    }

});