import {PropsWithChildren, useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import {ButtonWithIcon} from '../ui/ButtonWithIcon';
import {ListIcon, MapIcon, PlusIcon} from '../ui/icons/Icons';
import {solidColor} from '../../../config/theme';
import {LinearGradientAdapter} from '../../../config';
import {TabTitle} from './TabTitle';

interface Props extends PropsWithChildren {
  onPress?: () => void;
}

type WeatherSelection = 'hourly' | 'weekly';

export const HomeModal = ({children, onPress}: Props) => {
  const {width} = useWindowDimensions();
  const [selection, setSelection] = useState<WeatherSelection>('hourly');

  const handleChoose = (selected: WeatherSelection) => () => {
    setSelection(selected);
  };

  return (
    <>
      <View style={[styles.generalDimensions, styles.container]}>
        <LinearGradientAdapter
          colors={['#2E335A', '#1C1B33']}
          style={[
            styles.generalDimensions,
            {opacity: Platform.OS === 'ios' ? 0.8 : 0.6},
          ]}
        />
        <View style={[styles.topTabsContainer]}>
          <TabTitle
            selected={selection === 'hourly'}
            text="Hourly forecast"
            onPress={handleChoose('hourly')}
          />
          <TabTitle
            selected={selection === 'weekly'}
            text="Weekly forecast"
            onPress={handleChoose('weekly')}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {children}
        </ScrollView>
        <View style={styles.imagesWrapper}>
          <Image
            source={require('../../../assets/images/modal/bottom.png')}
            style={styles.bottomImage}
          />
          <Image
            source={require('../../../assets/images/modal/subtract.png')}
            style={styles.subtractImage}
            resizeMode="contain"
          />
        </View>
        <BlurView
          style={[styles.generalDimensions, {zIndex: -1}]}
          blurType="light"
          blurAmount={6}
          reducedTransparencyFallbackColor="#1C1B33"
        />

        <ButtonWithIcon
          onPress={onPress}
          style={{position: 'absolute', bottom: 15, right: 20}}
          icon={<ListIcon style={{width: 45}} />}
        />
        <ButtonWithIcon
          style={{position: 'absolute', bottom: 15, left: 20}}
          icon={<MapIcon style={{width: 45}} />}
        />

        <Pressable
          style={{
            position: 'absolute',
            bottom: 25,
            left: width / 2 - 30,
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.6,
            shadowRadius: 10,
            shadowOffset: {
              width: 6,
              height: 3,
            },
          }}>
          <PlusIcon style={{tintColor: solidColor.primary}} />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  generalDimensions: {
    height: 320,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  container: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  topTabsContainer: {
    height: 45,
    flexDirection: 'row',
    opacity: 0.7,
    marginBottom: 15,
  },
  imagesWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 0,
  },
  subtractImage: {
    zIndex: 0,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
