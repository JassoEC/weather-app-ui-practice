import {Pressable, StyleProp, View, ViewStyle} from 'react-native';

interface Props {
  icon: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const ButtonWithIcon = ({icon, style}: Props) => {
  return (
    <Pressable>
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}>
        {icon}
      </View>
    </Pressable>
  );
};
