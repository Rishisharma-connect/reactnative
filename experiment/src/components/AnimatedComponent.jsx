import { View, Button, Text } from 'react-native'
import Animated from 'react-native-reanimated';
import { useSharedValue, withSpring } from 'react-native-reanimated';


import React from 'react'

const AnimatedComponent = () => {
    const width = useSharedValue(100);

    const handlePress1 = () => {
        width.value = withSpring(width.value + 50);
    };
    const handlePress2 = () => {
        width.value = withSpring(width.value - 50);
    };

    return (
        <View>
            <Animated.View
                style={{
                    width,
                    height: 100,
                    backgroundColor: 'violet',
                }}
            />
            <Button onPress={handlePress1} title="Cilick me to +" />
            <Button onPress={handlePress2} title="Cilick me to -" />
        </View>

    );
}

export default AnimatedComponent