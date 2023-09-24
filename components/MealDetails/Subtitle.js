import {View, Text, StyleSheet} from 'react-native';

const Subtitles = ({children}) => {
    return (
        <View style={styles.subtitleContainerStyles}>
            <Text style={styles.subtitletStyles}>{children}</Text>
        </View>   
    )
}
export default Subtitles;

const styles = StyleSheet.create({
    subtitleContainerStyles: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#e2b497',
    },
    subtitletStyles: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e2b497',
        textAlign: 'center',
    }
});