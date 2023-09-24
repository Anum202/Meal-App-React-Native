import {View, Text, StyleSheet} from 'react-native';

const MealDetails = ({duration, complexity, affordability, style, textStyle}) => {
    return(
      <View style={[styles.detailContainerStyles, style]}>
        <Text style={[styles.detailStyles, textStyle]}>{duration}m</Text>
        <Text style={[styles.detailStyles, textStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailStyles, textStyle]}>{affordability.toUpperCase()}</Text>
      </View>
    )
}
export default MealDetails;

const styles = StyleSheet.create({
  detailContainerStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
},
  detailStyles: {
      fontSize: 12,
      fontWeight: 'bold',
      marginHorizontal: 5,
  }
});