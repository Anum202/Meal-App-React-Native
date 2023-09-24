import { useLayoutEffect } from 'react';
import {View, Text, Image,  StyleSheet, ScrollView, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitles from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/IconButton';

const MealDetailScreen = ({route, navigation}) => {
    
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const btnOnPressHandler = () =>{
        console.log('Pressed');
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={btnOnPressHandler}/>
            }
        })
    },[navigation, btnOnPressHandler])

    return(
        <ScrollView style={styles.rootContainer}>
            <Image 
                source={{uri: selectedMeal.imageUrl}}
                style={styles.imgStyles}
            />
            
            <Text style={styles.titleStyles}>{selectedMeal.title}</Text>

            <MealDetails 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailTexttStyles}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitles>Ingredients</Subtitles> 
                    <List data={selectedMeal.ingredients}/>

                    <Subtitles>Steps</Subtitles> 
                    <List data={selectedMeal.steps}/>
                </View>
            </View>

           
        </ScrollView>
    )
}
export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    imgStyles: {
        width: '100%',
        height: 350,
    },
    titleStyles: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailTexttStyles: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    }
});