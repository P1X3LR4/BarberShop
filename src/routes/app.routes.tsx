import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {LoginScreen} from '../screens';

const Stack = createNativeStackNavigator()

export function AppRoutes() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}