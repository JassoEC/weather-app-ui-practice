import {BaseIcon, BaseIconProps} from './BaseIcon';

interface Props extends BaseIconProps {}

export const MenuIcon = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/Menu.png')}
    />
  );
};

export const ListIcon = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/List.png')}
    />
  );
};

export const PlusIcon = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/Plus.png')}
    />
  );
};

export const MapIcon = (props: Props) => {
  return (
    <BaseIcon
      {...props}
      path={require('../../../../assets/images/icons/Map.png')}
    />
  );
};
