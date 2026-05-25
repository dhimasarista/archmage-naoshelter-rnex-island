import { Text } from '@/components/ui';
import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

export default function LottieScreen() {
    const animation = useRef<LottieView>(null);

    useEffect(() => {
        animation.current?.play();
    }, []);
    return (
        <View style={styles.container}>
            <Text variant="title">Lottie Animation</Text>
            <LottieView
                ref={animation}
                source={require("@/assets/lotties/iot.json")}
                loop={true}
                style={{
                    width: 300,
                    height: 300,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
});