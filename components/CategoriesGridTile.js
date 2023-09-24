import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';

const CategoriesGridTile = ({title, color, onPress}) => {
    return (
        <View style={styles.outerGrid}>
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CategoriesGridTile;

const styles = StyleSheet.create({
    outerGrid: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',    //to add shadow on iOS, need to add backgroundColor also.
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});