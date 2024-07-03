import {BaseIcon} from './BaseIcon';

interface Props {}

export const SmallMoonCloudFastWind = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/weather/small/moon-cloud-fast-wind.png')}
    />
  );
};

export const SmallMoonCloudMidRain = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/weather/small/moon-cloud-mid-rain.png')}
    />
  );
};

export const SmallSunCloudAngledRain = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/weather/small/sun-cloud-angled-rain.png')}
    />
  );
};

export const SmallSunCloudMidRain = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/weather/small/sun-cloud-mid-rain.png')}
    />
  );
};

export const SmallTornado = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/weather/small/tornado.png')}
    />
  );
};
