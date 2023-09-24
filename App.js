import { StatusBar } from 'react-native';
import { StyleSheet,} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
          <Stack.Navigator 
            initialRouteName='Splash'
            screenOptions={{                    //styles for all screens
              headerStyle: {
                backgroundColor: '#351401',
              },
              headerTintColor: 'white',
              headerTitleAlign: 'center',
              contentStyle: {
                backgroundColor: '#3f2f25',
              }
            }}
          >
              <Stack.Screen 
                name="MealsCategories" 
                component={CategoriesScreen}
                options={{
                  headerTitle: 'All Categories',
                }}
              />
              <Stack.Screen 
                name="MealsOverview"
                component={MealsOverViewScreen}
              />
              <Stack.Screen 
                name="MealDetail"
                component={MealDetailScreen}
              />
              <Stack.Screen 
                name="Splash"
                component={SplashScreen}
                options={{
                  headerShown: false,
                }}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
