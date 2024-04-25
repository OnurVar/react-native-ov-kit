import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextPalette } from 'react-native-ov-kit';

SplashScreen.preventAutoHideAsync();

const SF_Pro_Text_TextPalette = new TextPalette({
  defaultFamilyName: 'SF Pro Text',
  thinFamilyName: 'SF-Pro-Text-Thin',
  ultralightFamilyName: 'SF-Pro-Text-Ultralight',
  lightFamilyName: 'SF-Pro-Text-Light',
  regularFamilyName: 'SF-Pro-Text-Regular',
  mediumFamilyName: 'SF-Pro-Text-Medium',
  semiboldFamilyName: 'SF-Pro-Text-Semibold',
  boldFamilyName: 'SF-Pro-Text-Bold',
  heavyFamilyName: 'SF-Pro-Text-Heavy',
  blackFamilyName: 'SF-Pro-Text-Black',
  getLineHeight: (fontSize: number) => fontSize * 1.4,
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

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <OVButton /> */}
      <Text style={{ ...SF_Pro_Text_TextPalette.ultralight_100(20) }}>
        The quick brown fox jumps over the lazy dog
      </Text>
      <Text style={{ ...SF_Pro_Text_TextPalette.thin_200(20) }}>
        The quick brown fox jumps over the lazy dog
      </Text>
      <Text style={{ ...SF_Pro_Text_TextPalette.light_300(20) }}>
        The quick brown fox jumps over the lazy dog
      </Text>
      <Text style={{ ...SF_Pro_Text_TextPalette.regular_400(20) }}>
        The quick brown fox jumps over the lazy dog
      </Text>
      <Text style={{ ...SF_Pro_Text_TextPalette.medium_500(20) }}>
        The quick brown fox jumps over the lazy dog
      </Text>
      <Text style={{ ...SF_Pro_Text_TextPalette.semibold_600(20) }}>
        The quick brown fox jumps over the lazy dog
      </Text>
      <Text style={{ ...SF_Pro_Text_TextPalette.bold_700(20) }}>
        The quick brown fox jumps over the lazy dog
      </Text>
      <Text style={{ ...SF_Pro_Text_TextPalette.heavy_800(20) }}>
        The quick brown fox jumps over the lazy dog
      </Text>
      <Text style={{ ...SF_Pro_Text_TextPalette.black_900(20) }}>
        The quick brown fox jumps over the lazy dog
      </Text>
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
