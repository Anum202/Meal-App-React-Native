import { useEffect } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MealsCategories')
        }, 3000)
    }, []);

    return (
        <View style={styles.imgWrapper}>
            <Image 
                source={require('../assets/images/splash-img.png')}
                style={styles.imgStyles}
            />
            <Text style={styles.textStyles}>MEALS APP</Text>
        </View>
    )
}
export default SplashScreen;

const styles = StyleSheet.create({
    imgWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgStyles: {
        width: 250,
        height: 250,
    },
    textStyles: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
        textShadowRadius: 10,
        textShadowColor: 'yellow',
        textShadowOffset: {width: 2, height: 2},
    }
});