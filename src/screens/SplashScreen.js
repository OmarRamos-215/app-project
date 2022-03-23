import React, { useEffect } from 'react'
import { StyleSheet, Image, SafeAreaView } from 'react-native'

const image_url= "https://iphoneswallpapers.com/wp-content/uploads/2019/09/Milk-Chocolate-Galaxy-Cosmic-Bar-Bite-iPhone-Wallpaper.jpg"

export default function SplashScreen({ navigation }){
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("Meals")
        }, 5000)
    })

    return (
        <SafeAreaView style={styles.image_container}>
            <Image source={{uri: image_url}} style={styles.image} />
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    image_container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    image:{
        width: "100%",
        height: "100%",
    },
})