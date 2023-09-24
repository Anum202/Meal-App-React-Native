import { useLayoutEffect } from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {MEALS, CATEGORIES} from '../data/dummy-data'
import MealsItem from '../components/MealsItem';

const MealsOverViewScreen = ({route, navigation}) => {

    const cId = route.params.categoryId;

    //to return category id for each meal category.
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(cId) >= 0;
    })

    //useLayoutEffect to render each category title dynamically.
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === cId).title;
        console.log("Category ID:", cId);
        console.log("Category Title:", categoryTitle);
        
        navigation.setOptions({
            title: categoryTitle,
        });
    },[cId, navigation]);

    const renderMealItem = (itemData) => {
        return <MealsItem 
            id={itemData.item.id}
            title={itemData.item.title} 
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
        />
    }

    return(
        <View style={styles.container}>
            {/* <Text>Meals Overview Screen - {cId}</Text> */}
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}
export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})