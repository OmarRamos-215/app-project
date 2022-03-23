import { View, Text, Image } from "react-native";
import styles from "../components/styles/MealDetailsStyles";
import React from 'react'

export default function MealDetails(props){
    const {meal}= props.route.params

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.image} source={{uri: meal.strMealThumb}} />
                <View style={styles.name}>
                    <Text style={styles.name_value}>{meal.strMeal}</Text>
                    <Text style={styles.area_values}>{meal.strArea} - {meal.strCategory}</Text>
                </View>
                <View style={styles.ingredients_container}>
                    <Text style={styles.ingredient_value}>{meal.strMeasure1} {meal.strIngredient1}</Text>
                    <Text style={styles.ingredient_value}>{meal.strMeasure2} {meal.strIngredient2}</Text>
                    <Text style={styles.ingredient_value}>{meal.strMeasure3} {meal.strIngredient3}</Text>
                    <Text style={styles.ingredient_value}>{meal.strMeasure4} {meal.strIngredient4}</Text>
                    <Text style={styles.ingredient_value}>{meal.strMeasure5} {meal.strIngredient5}</Text>
                    <Text style={styles.ingredient_value}>{meal.strMeasure6} {meal.strIngredient6}</Text>
                    <Text style={styles.ingredient_value}>{meal.strMeasure7} {meal.strIngredient7}</Text>
                    <Text style={styles.ingredient_value}>{meal.strMeasure8} {meal.strIngredient8}</Text>
                    <Text style={styles.ingredient_value}>{meal.strMeasure9} {meal.strIngredient9}</Text>
                    <Text style={styles.ingredient_value}>{meal.strMeasure10} {meal.strIngredient10}</Text>
                    <Text style={styles.ingredient_value}>{meal.strMeasure11} {meal.strIngredient11}</Text>
                    <Text style={styles.ingredient_value}>{meal.strMeasure12} {meal.strIngredient12}</Text>
                    <Text style={styles.ingredient_value}>{meal.strMeasure13} {meal.strIngredient13}</Text>

                </View>
                <View style={styles.instruction}>
                    <Text style={styles.instruction_value}>{meal.strInstructions}</Text>
                </View>
            </View>
        </View>
    )
}