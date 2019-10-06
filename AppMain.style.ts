import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        backgroundColor: '$background',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});
