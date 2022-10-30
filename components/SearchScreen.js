import React,{Component} from "react";
import { Text,StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import createNavigationContainerRef from "@react-navigation/native";
import SearchList from "./SearchList";
import HomeScreen from "./HomeScreen";
import { InitialState } from '@react-navigation/native';

const SearchScreen=({navigation,route})=>{
    const {Hislist}=route.params;
    return (
        <SearchList dataSource={Hislist}>
        </SearchList>
    )
}
export default SearchScreen