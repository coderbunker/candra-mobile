
import {
  Dimensions,
  Platform
} from 'react-native';

const isAndroid = Platform.OS === 'android';
const topBarHeight = isAndroid ? 25 : 0;

export default {
  DEVICE_HEIGHT: Dimensions.get('window').height - topBarHeight,
  DEVICE_WIDTH: Dimensions.get('window').width,
  isAndroid: isAndroid,
  isIos: !isAndroid,
};
