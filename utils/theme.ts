import {moderateScale, scale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export {width as WIDTH_SCREEN, height as HEIGHT_SCREEN};

interface Spacing {
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_32: number;
  space_36: number;
}

export const SPACING: Spacing = {
  space_2: scale(2),
  space_4: scale(4),
  space_8: scale(8),
  space_10: scale(10),
  space_12: scale(12),
  space_15: scale(15),
  space_16: scale(16),
  space_18: scale(18),
  space_20: scale(20),
  space_24: scale(24),
  space_28: scale(28),
  space_32: scale(32),
  space_36: scale(36),
};

interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_15: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_30: number;
}

export const FONTSIZE: FontSize = {
  size_8: moderateScale(8, 0.3),
  size_10: moderateScale(10, 0.3),
  size_12: moderateScale(12, 0.3),
  size_14: moderateScale(14, 0.3),
  size_15: moderateScale(15, 0.3),
  size_16: moderateScale(16, 0.3),
  size_18: moderateScale(18, 0.3),
  size_20: moderateScale(20, 0.3),
  size_24: moderateScale(24, 0.3),
  size_30: moderateScale(30, 0.3),
};

interface BorderRadius {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
}

export const BORDER_RADIUS: BorderRadius = {
  radius_4: scale(4),
  radius_8: scale(8),
  radius_10: scale(10),
  radius_15: scale(15),
  radius_20: scale(20),
  radius_25: scale(25),
};
