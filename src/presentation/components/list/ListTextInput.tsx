import {TextInput} from 'react-native';

interface Props {
  placeholder: string;
}

export const ListTextInput = ({placeholder}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={{
        width: '100%',
        height: 36,
        backgroundColor: '#1C1B33',
        borderRadius: 10,
        paddingLeft: 10,
        borderColor: 'black',
        borderWidth: 1,
        color: 'white',
      }}
    />
  );
};
