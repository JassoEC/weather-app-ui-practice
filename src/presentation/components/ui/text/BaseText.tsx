import {StyleProp, Text, TextStyle} from 'react-native';
import {OpacityValue, textColor} from '../../../../config/theme';

export interface BaseTextProps {
  text: string;
  fontSize?: number;
  opacity?: OpacityValue;
  color?: keyof typeof textColor;
  style?: StyleProp<TextStyle>;
}

export const RegularBaseText = ({
  text,
  fontSize = 14,
  opacity,
  color = 'primary',
  style,
}: BaseTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize,
          fontWeight: 'normal',
          opacity,
          color: textColor[color],
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export const BoldBaseText = ({
  text,
  fontSize = 14,
  color = 'primary',
  opacity,
  style,
}: BaseTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize,
          fontWeight: 'bold',
          opacity,
          color: textColor[color],
        },
        style,
      ]}>
      {text}
    </Text>
  );
};
