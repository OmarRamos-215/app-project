import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './styles/MealStyles'

export default function Meal({ meal, navigation }){

    return(
        <TouchableWithoutFeedback onPress={()=>{
            navigation.navigate("MealDetails", {meal})
            
            }}>

            <View style={styles.meal}>
                <View style={styles.spacing}>
                    <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
                    <View style={styles.meal_info}>
                        <Text style={styles.meal_name}>{meal.strMeal}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}