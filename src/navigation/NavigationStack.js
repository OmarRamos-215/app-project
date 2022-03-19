import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import MealsScreen from '../screens/MealsScreen'
import SplashScreen from "../screens/SplashScreen";
import MealDetails from "../screens/MealDetails";

const Stack= createNativeStackNavigator();

export default function NavigationStack(){

    return(
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Meals" component={MealsScreen} />
            <Stack.Screen name="MealDetails" component={MealDetails} />
        </Stack.Navigator>
    )
}