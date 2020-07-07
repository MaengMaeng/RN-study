import React from 'react'
import {StyleSheet, View, Image, Text, Platform} from 'react-native'

const ProfileCard = () => (
    <View style={styles.container}>
        <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
                <Image style={styles.cardImage} source={require('../assets/user.png')}></Image>
            </View>
            <View>
                <Text style={styles.cardName}>
                    남궁명
                </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
                <Text styles={styles.cardOccupation}>
                    React Native
                </Text>
            </View>
            <View>
                <Text style={styles.cardDescription}>
                    Java Script Developer. Using {Platform.OS}. 
                </Text>
            </View>
        </View>
    </View>
)

const profileCardColor = 'dodgerblue'

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cardContainer:{
        backgroundColor: profileCardColor,
        width:300,
        height:400,
        borderColor:'black',
        borderWidth:3,
        borderStyle:'solid',
        borderRadius:20,
        alignItems:'center',
    },
    cardImageContainer:{
        alignItems:'center',
        backgroundColor:'white',
        borderWidth:3,
        borderColor:'black',
        width:120,
        height:120,
        borderRadius:60,
        marginTop:30,
        paddingTop:15
    },
    cardImage:{
        width:80,
        height:80
    },
    cardName:{
        color:'white',
        fontWeight:'bold',
        fontSize:24,
        marginTop:30,
        textShadowColor:'black',
        textShadowOffset:{
            height:2,
            width:2
        },
        textShadowRadius:3
    },
    cardOccupationContainer:{
        borderColor:'black',
        borderWidth:3,
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
    },
    cardOccupation:{
        marginTop:10,
        marginBottom:10
    },
    cardDescription:{
        marginTop:10,
        marginRight:40,
        marginLeft:40,
        marginBottom:10
    }
})

export default ProfileCard