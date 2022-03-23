import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";
import React, { useState, useEffect, useMemo } from "react"
import { getMealsApi } from "../api/meals"
import MealList from "../components/MealList";

export default function MealsScreen({navigation}){
    const [meals, setMeals]= useState([])
    const [filterData, setFilterData]= useState("")
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        navigation.setOptions({
            headerSearchBarOptions:{
                placeholder: "Search Meal",
                onChangeText: (event)=>{
                    handleSearch(event.nativeEvent.text)
                },
            },
        })
        fetchCharacter()
        setLoading(false)
    },[])

    const fetchCharacter= async() =>{
        const response= await getMealsApi()
        setMeals(response)
    }

    const handleSearch= (text)=>{
        setFilterData(text)
    }

    const filteredMeals= useMemo(()=>
        meals.filter((meal)=>{
            return meal.strMeal.toLowerCase().includes(filterData.toLowerCase())
        }), [meals, filterData])


    return(
        <SafeAreaView style={styles.container}>
            { loading ?
                <SafeAreaView style={[styles.container_indicator, styles.horizontal]}>
                    <ActivityIndicator size={"large"} colors={"#54DB33"} />
                </SafeAreaView>
                :
                <SafeAreaView>
                    <MealList meals={filteredMeals} navigation= {navigation} />
                </SafeAreaView>
            }
        </SafeAreaView>
            
    )
}

const styles= StyleSheet.create({
    container_indicator: {
        flex: 1,
        justifyContent: "center",
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    container: {
        height: "100%",
        paddingBottom: 15,
        backgroundColor: "#E5A478"
    }
})