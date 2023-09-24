import {View, Text, StyleSheet} from 'react-native';

const List = ({data}) => {
    return (
        data.map((datapoint) => (
            <View 
                key={datapoint}
                style={styles.listItemStyles}
            >
                <Text style={styles.listTextStyles}>{datapoint}</Text>
            </View>
        )));
}
export default List;

const styles = StyleSheet.create({
    listItemStyles: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    listTextStyles: {
        textAlign: 'center',
        color: '#351401',
    },
});