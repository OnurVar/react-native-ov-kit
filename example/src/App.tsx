import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextPalette } from 'react-native-ov-kit';

SplashScreen.preventAutoHideAsync();

TextPalette.setup({
  defaultFamilyName: 'SF-Pro-Text-Ultralight',
  thinFamilyName: 'SF-Pro-Text-Thin',
  ultralightFamilyName: 'SF-Pro-Text-Ultralight',
  lightFamilyName: 'SF-Pro-Text-Light',
  regularFamilyName: 'SF-Pro-Text-Regular',
  mediumFamilyName: 'SF-Pro-Text-Medium',
  semiboldFamilyName: 'SF-Pro-Text-Semibold',
  boldFamilyName: 'SF-Pro-Text-Bold',
  heavyFamilyName: 'SF-Pro-Text-Heavy',
  blackFamilyName: 'SF-Pro-Text-Black',
});

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'SF-Pro-Text-Black': require('../assets/fonts/SF-Pro-Text-Black.otf'),
    'SF-Pro-Text-Bold': require('../assets/fonts/SF-Pro-Text-Bold.otf'),
    'SF-Pro-Text-Heavy': require('../assets/fonts/SF-Pro-Text-Heavy.otf'),
    'SF-Pro-Text-Light': require('../assets/fonts/SF-Pro-Text-Light.otf'),
    'SF-Pro-Text-Medium': require('../assets/fonts/SF-Pro-Text-Medium.otf'),
    'SF-Pro-Text-Regular': require('../assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF-Pro-Text-Semibold': require('../assets/fonts/SF-Pro-Text-Semibold.otf'),
    'SF-Pro-Text-Thin': require('../assets/fonts/SF-Pro-Text-Thin.otf'),
    'SF-Pro-Text-Ultralight': require('../assets/fonts/SF-Pro-Text-Ultralight.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  console.log(TextPalette.black_900(25));
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <OVButton /> */}
      <Text style={{ ...TextPalette.ultra_light_100(20) }}>HOEOEOE</Text>
      <Text style={{ ...TextPalette.thin_200(20) }}>HOEOEOE</Text>
      <Text style={{ ...TextPalette.light_300(20) }}>HOEOEOE</Text>
      <Text style={{ ...TextPalette.regular_400(20) }}>HOEOEOE</Text>
      <Text style={{ ...TextPalette.medium_500(20) }}>HOEOEOE</Text>
      <Text style={{ ...TextPalette.semibold_600(20) }}>HOEOEOE</Text>
      <Text style={{ ...TextPalette.bold_700(20) }}>HOEOEOE</Text>
      <Text style={{ ...TextPalette.heavy_800(20) }}>HOEOEOE</Text>
      <Text style={{ ...TextPalette.black_900(20) }}>HOEOEOE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
