
import {
  Dimensions,
  Platform
} from 'react-native';

const isAndroid = Platform.OS === 'android';
const topBarHeight = isAndroid ? 25 : 0;

export default {
  DEVICE_HEIGHT: Dimensions.get('window').height - topBarHeight,
  DEVICE_WIDTH: Dimensions.get('window').width,
  CARD_HEIGHT: Dimensions.get('window').height - 32 - topBarHeight,
  CARD_WIDTH: Dimensions.get('window').width - 32,
  isAndroid: isAndroid,
  isIos: !isAndroid,
  SMALL_CARD_HEIGHT: 225,
  SMALL_CARD_WIDTH: 140,
};
