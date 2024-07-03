import {BaseIcon, BaseIconProps} from './BaseIcon';

interface Props extends BaseIconProps {}

export const BgdPlusIcon = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/buttons/button-plus.png')}
    />
  );
};

export const BgdMinusIcon = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/buttons/button-minus.png')}
    />
  );
};
