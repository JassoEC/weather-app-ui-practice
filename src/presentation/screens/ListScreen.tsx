import {Image, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {LinearGradientAdapter} from '../../config';
import {
  BigMoonCloudFastWind,
  BigMoonCloudMidRain,
  BigSunCloudAngledRain,
  BigTornado,
  DefRegularTitle2,
  ListCard,
  ListTextInput,
} from '../components';

interface Props {}

export const ListScreen = ({}: Props) => {
  const {top} = useSafeAreaInsets();

  const navigation = useNavigation();

  const fullTop = top + 10;
  return (
    <LinearGradientAdapter
      colors={['#2E335A', '#1C1B33']}
      angle
      style={[styles.container, {paddingTop: 10}]}>
      <View
        style={[
          styles.headerContainer,
          {marginTop: fullTop, marginBottom: 20},
        ]}>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/images/icons/buttons/chevron-left.png')}
              style={{marginRight: 10}}
            />
          </Pressable>
          <DefRegularTitle2 fontSize={26} text="Weather" />
        </View>
        <Pressable>
          <Image
            source={require('../../assets/images/icons/buttons/dot-options.png')}
            style={{marginRight: 10}}
          />
        </Pressable>
      </View>
      <ListTextInput placeholder="Search a city or airport" />
      <ScrollView style={{width: '100%', marginTop: 20}}>
        <ListCard
          icon={<BigMoonCloudMidRain />}
          temperature={19}
          low={18}
          hight={24}
          locality="Montreal, Canada"
          weather="Mid Rain"
        />
        <ListCard
          icon={<BigMoonCloudFastWind />}
          temperature={17}
          low={18}
          hight={24}
          locality="Toronto, Canada"
          weather="Fast Wind"
        />
        <ListCard
          icon={<BigSunCloudAngledRain />}
          temperature={18}
          low={18}
          hight={24}
          locality="Tokyo, Japan"
          weather="Showers"
        />
        <ListCard
          icon={<BigTornado />}
          temperature={19}
          low={18}
          hight={24}
          locality="Tokyo, Japan"
          weather="Showers"
        />
      </ScrollView>
    </LinearGradientAdapter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});
