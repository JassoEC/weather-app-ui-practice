import {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

interface Props extends PropsWithChildren {
  colors?: (string | number)[];
  locations?: number[];
  style?: StyleProp<ViewStyle>;
  angle?: boolean;
}

export const LinearGradientAdapter = ({
  children,
  locations,
  colors = [],
  style,
  angle,
}: Props) => {
  return (
    <LinearGradient
      style={style}
      locations={locations}
      colors={colors}
      useAngle={angle}>
      {children}
    </LinearGradient>
  );
};
