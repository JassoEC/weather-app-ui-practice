import {PropsWithChildren} from 'react';
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

import {DefBoldTitle3} from '../ui/text/default/Bold';
import {ButtonWithIcon} from '../ui/ButtonWithIcon';
import {ListIcon, MapIcon, PlusIcon} from '../ui/icons/Icons';
import {solidColor} from '../../../config/theme';
import {LinearGradientAdapter} from '../../../config';

interface Props extends PropsWithChildren {}

export const HomeModal = ({children}: Props) => {
  const {width} = useWindowDimensions();
  return (
    <>
      <View style={[styles.generalDimensions, styles.container]}>
        <LinearGradientAdapter
          colors={['#2E335A', '#45278B', '#2E335A']}
          style={[
            styles.generalDimensions,
            {opacity: Platform.OS === 'ios' ? 0.7 : 0.4},
          ]}
        />
        <View
          style={[
            styles.topTabsContainer,
            {
              borderBottomColor: solidColor.quaternary,
              borderBottomWidth: 0.5,
            },
          ]}>
          <DefBoldTitle3
            text="Hourly forecast"
            style={{fontSize: 15, textAlign: 'center'}}
          />
          <DefBoldTitle3
            text="Weekly forecast"
            style={{fontSize: 15, textAlign: 'center'}}
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
    width: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    opacity: 0.7,
    marginBottom: 15,
    borderBottomColor: 'white',
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
