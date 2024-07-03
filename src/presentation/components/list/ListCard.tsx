import {Image, View} from 'react-native';

import {DefBoldTitle, DefBoldTitle3} from '../ui/text/default/Bold';
import {OpacityValue} from '../../../config/theme';
import {
  DefRegularLargeTitle,
  DefRegularTitle2,
} from '../ui/text/default/Regular';
import {ReactNode} from 'react';

interface Props {
  icon: ReactNode;
  temperature: number;
  locality: string;
  weather: string;
  low: number;
  hight: number;
}

export const ListCard = ({
  icon,
  temperature,
  locality,
  weather,
  low,
  hight,
}: Props) => {
  return (
    <View
      style={{
        height: 200,
        marginBottom: 20,
      }}>
      <Image
        resizeMode="contain"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
        }}
        source={require('../../../assets/images/list/rectangle-1.png')}
      />

      <View style={{position: 'absolute', right: 20}}>{icon}</View>
      <View style={{paddingHorizontal: 40, paddingTop: 40}}>
        <DefRegularLargeTitle fontSize={70} text={`${temperature}º`} />
        <View style={{flexDirection: 'row'}}>
          <DefRegularTitle2
            fontSize={20}
            text={`H:${hight}º`}
            opacity={OpacityValue.quaternary}
            style={{marginEnd: 15}}
          />
          <DefRegularTitle2
            fontSize={20}
            text={`L:${low}º`}
            opacity={OpacityValue.quaternary}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <DefBoldTitle fontSize={20} text={locality} />
          <DefBoldTitle3 fontSize={14} text={weather} />
        </View>
      </View>
    </View>
  );
};
