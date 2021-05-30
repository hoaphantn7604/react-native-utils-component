import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface Props {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  seconds: number;
  onTimes?: (seconds: number) => void
  onEnd?: () => void
}
