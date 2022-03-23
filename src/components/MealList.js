import { FlatList, StyleSheet } from "react-native";
import React from 'react'
import Meal from "./Meal";

export default function MealList({ meals, navigation }){
    return(
        <FlatList
        data={meals}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainer}
        keyExtractor={(meal)=>String(meal.idMeal)}
        renderItem={({item})=> <Meal meal={item} navigation={navigation} />}
        />
    )
}

const styles= StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal: 5,
        backgroundColor: "#E5A478"
    }
})