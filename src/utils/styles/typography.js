import { modularScale, stripUnit } from 'polished';

export const BODY_FONT_FAMILY = "'Work Sans', sans-serif";
export const HEADER_FONT_FAMILY = 'Eczar, serif';

export const BASE_FONT_SIZE = '16px';
export const BASE_LINE_HEIGHT = 1.5;
const SCALE_RATIO = 'perfectFourth';

const calcFontSize = steps => modularScale(steps, '1em', SCALE_RATIO);

const calcLineHeight = (fontSize) => {
  const rawSize = stripUnit(fontSize);

  // Calculates a line height that is a multiple of the base line height.
  return `${Math.ceil(rawSize / BASE_LINE_HEIGHT) * (BASE_LINE_HEIGHT / rawSize)}em`;
};

const stepCalc = (steps) => {
  const calculatedFontSize = calcFontSize(steps);
  const calculatedLineHeight = calcLineHeight(calculatedFontSize);

  return {
    fontSize: calculatedFontSize,
    lineHeight: calculatedLineHeight,
  };
};

export const stepZero = stepCalc(0);
export const stepUpHalf = stepCalc(1 / 2);
export const stepUpOne = stepCalc(1);
export const stepUpTwo = stepCalc(2);
export const stepUpThree = stepCalc(3);
export const stepUpFour = stepCalc(4);
export const stepUpSix = stepCalc(6);
export const stepDownHalf = stepCalc(-1 / 2);
export const stepDownOne = stepCalc(-1);
export const stepDownTwo = stepCalc(-2);
export const stepDownThree = stepCalc(-3);
