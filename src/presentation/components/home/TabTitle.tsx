import {Pressable, StyleSheet} from 'react-native';

import {solidColor} from '../../../config/theme';
import {DefBoldTitle3} from '../ui/text/default/Bold';
import {LinearGradientAdapter} from '../../../config';

interface Props {
  selected: boolean;
  text: string;
  onPress?: () => void;
}

export const TabTitle = ({selected, text, onPress}: Props) => {
  return (
    <Pressable style={styles.tabTitleContainer} onPress={onPress}>
      <DefBoldTitle3
        text={text}
        style={{
          fontSize: 15,
          textAlign: 'center',
        }}
      />
      {selected && (
        <LinearGradientAdapter
          angle
          colors={['#3C3C43', '#7758D1', '#F7CBFD', '#7758D1', '#3C3C43']}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 2,
          }}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabTitleContainer: {
    flex: 1,
    height: 45,
    alignContent: 'center',
    justifyContent: 'center',
    borderBottomColor: solidColor.secondary,
    borderBottomWidth: 1,
  },
});
