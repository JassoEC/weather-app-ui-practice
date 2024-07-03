import {BaseIcon, BaseIconProps} from './BaseIcon';

interface Props extends BaseIconProps {}

export const BigMoonCloudFastWind = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/weather/big/moon-cloud-fast-wind.png')}
    />
  );
};

export const BigMoonCloudMidRain = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/weather/big/moon-cloud-mid-rain.png')}
    />
  );
};

export const BigSunCloudAngledRain = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/weather/big/sun-cloud-angled-rain.png')}
    />
  );
};

export const BigSunCloudMidRain = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/weather/big/sun-cloud-mid-rain.png')}
    />
  );
};

export const BigTornado = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/weather/big/tornado.png')}
    />
  );
};
