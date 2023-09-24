import {View, Text, StyleSheet, Pressable, Image, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

const MealsItem = ({id, title, imageUrl, duration, complexity, affordability}) => {

    const navigation = useNavigation();

    const  mealItemPressHandler = () => {
        navigation.navigate('MealDetail',{
            mealId: id,
        })
    }
    return (
        <View style={styles.outerContainer}>
            <Pressable 
                android_ripple={{color: 'yellow'}}
                style={({pressed}) => {pressed ? styles.buttonPressed : null}
                }
                onPress={mealItemPressHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image 
                            source={{uri: imageUrl}}
                            style={styles.imageStyles}    
                        />
                        <Text style={styles.textStyles}>{title}</Text>
                    </View>
                    
                    <MealDetails 
                        duration={duration} 
                        complexity={complexity} 
                        affordability={affordability}
                    />
                </View>
            </Pressable>

        </View>
    )
}
export default MealsItem;

const styles = StyleSheet.create({
    outerContainer: {
        margin: 16,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        backgroundColor: 'white',    //to add shadow on iOS, need to add backgroundColor also.
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.35,
        shadowRadius: 18,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageStyles: {
        width: '100%',
        height: 200,
    },
    textStyles: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
    
});