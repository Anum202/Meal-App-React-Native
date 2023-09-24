import { FlatList, StyleSheet } from "react-native";
import {CATEGORIES} from '../data/dummy-data'
import CategoriesGridTile from "../components/CategoriesGridTile";

const CategoriesScreen = ({navigation}) => {

    //method to pass as a parameter to renderItem.
    const renderCategoryItem = (itemData) => {
        
        //onPressHandler method.
        const onPressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }

        return(
            <CategoriesGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onPress={onPressHandler}
            />  
        )
    }
    return (
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) =>item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}
export default CategoriesScreen;

const styles = StyleSheet.create({

});