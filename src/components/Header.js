import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function Header(){
    return (
        <View style = {styles.header}>
            <View style={{ justifyContent: "center", paddingLeft: 20}}>
                <Text style = {styles.title}>HelenTube</Text>
            </View>
            <View style={styles.rightIcons}>
                <Icon 
                    style = {styles.headerIcon}
                    name = "videocam" 
                    size= {25} 
                    color = "#fff" 
                />
                <Icon 
                style = {styles.headerIcons} 
                name = "search" 
                size = {35} 
                color = "#fff" 
                />
                <Icon 
                style = {styles.headerIcons} 
                name = "account-circle" 
                size = {35} 
                color = "#fff" 
                />
            </View>    
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: "#E62116", 
        justifyContent: "space-between", 
        flexDirection: "row"
    },
    title: {
        color: "#fff", 
        fontSize: 22, 
        fontWeight: "bold", 
    }, 
    rightIcons: {
        flexDirection: "row",
        alignItems: "center"
    }, 
    headerIcons: {
        marginHorizontal: 10
    }
});

export default Header;