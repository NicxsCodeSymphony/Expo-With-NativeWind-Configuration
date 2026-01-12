import { Text, View, Button } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  const [color, setColor] = useState('');
  const [x, setX] = useState<number>(0);

  const handleColorChange = () => {
    setX(x + 20);
    setColor('text-red-500');
  };

  return (
    <View className="relative mt-20 h-full">
      <Text className={`absolute top-[100px] ${color}`} style={{ left: x }}>
        Hello World {x}
      </Text>

      <Button onPress={() => handleColorChange()} title="Press to change button" />
    </View>
  );
};
