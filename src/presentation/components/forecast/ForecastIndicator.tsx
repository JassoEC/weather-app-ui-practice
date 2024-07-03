import {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {solidColor} from '../../../config/theme';
import {DefBoldTitle2, DefBoldTitle3} from '../ui/text/default/Bold';
import {LinearGradientAdapter} from '../../../config';
import {DefRegularTitle, DefRegularTitle2} from '../ui/text/default/Regular';

interface Props {
  topText: string;
  icon: ReactNode;
  bottomText: string;
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const ForecastIndicator = ({
  topText,
  icon,
  bottomText,
  selected,
  style,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      {selected && (
        <View
          style={[
            styles.contentWrapper,
            {
              backgroundColor: solidColor.primary,
            },
          ]}>
          <DefBoldTitle3 text={topText} />
          {icon}
          <DefRegularTitle text={bottomText} fontSize={22} />
        </View>
      )}
      {!selected && (
        <LinearGradientAdapter
          angle
          colors={['#2E335A', '#45278B']}
          style={[styles.contentWrapper]}>
          <DefBoldTitle3 text={topText} />
          {icon}
          <DefRegularTitle text={bottomText} fontSize={22} />
        </LinearGradientAdapter>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 146,
    borderRadius: 30,
    borderColor: solidColor.secondary,
    borderWidth: 0.7,
    marginEnd: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    shadowOffset: {
      width: 6,
      height: 3,
    },
  },
  contentWrapper: {
    width: 60,
    height: 146,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    paddingVertical: 10,
  },
});
