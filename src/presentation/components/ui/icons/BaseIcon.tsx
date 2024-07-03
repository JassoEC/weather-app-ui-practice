import {Image, ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';

export interface BaseIconProps {
  path?: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

export const BaseIcon = ({path, style}: BaseIconProps) => {
  return <Image source={path} style={style} />;
};
