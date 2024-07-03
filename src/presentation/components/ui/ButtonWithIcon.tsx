import {Pressable, StyleProp, View, ViewStyle} from 'react-native';

interface Props {
  icon: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const ButtonWithIcon = ({icon, style, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
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
