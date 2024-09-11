import { normalize } from './Responsive';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const FontSize = {
  font6: normalize(6),
  font7: normalize(7),
  font8: normalize(8),
  font9: normalize(9),
  font10: normalize(10),
  font11: normalize(11),
  font12: normalize(12),
  font13: normalize(13),
  font14: normalize(14),
  font15: normalize(15),
  font16: normalize(16),
  font17: normalize(17),
  font18: normalize(18),
  font19: normalize(19),
  font20: normalize(20),
  font21: normalize(21),
  font22: normalize(22),
  font23: normalize(23),
  font24: normalize(24),
  font25: normalize(25),
  font26: normalize(26),
  font27: normalize(27),
  font28: normalize(28),
  font29: normalize(29),
  font30: normalize(30),
  font31: normalize(31),
  font32: normalize(32),
  font33: normalize(33),
  font34: normalize(34),
  font35: normalize(35),
  font36: normalize(36),
  font37: normalize(37),
  font38: normalize(38),
  font39: normalize(39),
  font40: normalize(40),
};

const FontFamily = {
  Black: 'LexendDeca-Black',
  Bold: 'LexendDeca-Bold',
  ExtraBold: 'LexendDeca-ExtraBold',
  ExtraLight: 'LexendDeca-ExtraLight',
  Light: 'LexendDeca-Light',
  Medium: 'LexendDeca-Medium',
  Regular: 'LexendDeca-Regular',
  SemiBold: 'LexendDeca-SemiBold',
  Thin: 'LexendDeca-Thin',
};

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    'LexendDeca-Black': require('../assets/fonts/LexendDeca-Black.ttf'),
    'LexendDeca-Bold': require('../assets/fonts/LexendDeca-Bold.ttf'),
    'LexendDeca-ExtraBold': require('../assets/fonts/LexendDeca-ExtraBold.ttf'),
    'LexendDeca-ExtraLight': require('../assets/fonts/LexendDeca-ExtraLight.ttf'),
    'LexendDeca-Light': require('../assets/fonts/LexendDeca-Light.ttf'),
    'LexendDeca-Medium': require('../assets/fonts/LexendDeca-Medium.ttf'),
    'LexendDeca-Regular': require('../assets/fonts/LexendDeca-Regular.ttf'),
    'LexendDeca-SemiBold': require('../assets/fonts/LexendDeca-SemiBold.ttf'),
    'LexendDeca-Thin': require('../assets/fonts/LexendDeca-Thin.ttf'),
  });

  if (!fontsLoaded) {
    console.log('Fonts are not loaded yet');
    return <AppLoading />;
  }
  console.log('Fonts are loaded');
  return null;
};

export { FontSize, FontFamily, useCustomFonts };
