import {Image, View, useWindowDimensions} from 'react-native';
import {
  DefBoldTitle2,
  DefRegularLargeTitle,
  DefRegularTitle,
  HomeModal,
  SmallMoonCloudFastWind,
} from '../components';
import {OpacityValue} from '../../config/theme';
import {LinearGradientAdapter} from '../../config';
import {ForecastIndicator} from '../components/forecast/ForecastIndicator';

interface Props {}

export const HomeScreen = ({}: Props) => {
  const {width, height} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Image
          source={require('../../assets/images/background.png')}
          style={{
            position: 'absolute',
            zIndex: -10,
            width: width,
            height: height,
          }}
        />
        <DefRegularTitle text="Montreal" />
        <DefRegularLargeTitle text="19º" fontSize={96} />
        <DefBoldTitle2 text="Mostly Clear" opacity={OpacityValue.quaternary} />

        <View style={{flexDirection: 'row'}}>
          <DefBoldTitle2 text="H:24º" style={{marginEnd: 15}} />
          <DefBoldTitle2 text="L:18º" />
        </View>

        <Image
          source={require('../../assets/images/House-2.png')}
          style={{width: '100%'}}
          resizeMode="contain"
        />
      </View>
      <HomeModal>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <ForecastIndicator
            topText="Now"
            bottomText="19º"
            icon={<SmallMoonCloudFastWind />}
          />
          <ForecastIndicator
            topText="12 AM"
            bottomText="19º"
            selected
            icon={<SmallMoonCloudFastWind />}
          />
          <ForecastIndicator
            topText="Now"
            bottomText="19º"
            icon={<SmallMoonCloudFastWind />}
          />
          <ForecastIndicator
            topText="12 AM"
            bottomText="19º"
            icon={<SmallMoonCloudFastWind />}
          />
          <ForecastIndicator
            topText="Now"
            bottomText="19º"
            icon={<SmallMoonCloudFastWind />}
          />
          <ForecastIndicator
            topText="12 AM"
            bottomText="19º"
            icon={<SmallMoonCloudFastWind />}
          />
        </View>
      </HomeModal>
      <LinearGradientAdapter
        style={{
          height: 519,
          width: '100%',
          position: 'absolute',
          bottom: 0,
          zIndex: -1,
        }}
        colors={['rgba(58,63,84,0.12)', 'rgba(58,63,84,1)']}
      />
    </View>
  );
};
