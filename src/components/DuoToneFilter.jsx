import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { parseToRgb } from 'polished';

const StyledFilter = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
})`
  height: 0;
  width: 0;
  position: fixed;
`;

// returns a object with keys red,green,blue mapped to table values
const calcTableValues = (shadow, highlight) =>
  Object.keys(highlight).reduce((acc, key) => {
    Object.assign(acc, {
      [key]: `${shadow[key] / 255} ${highlight[key] / 255}`,
    });
    return acc;
  }, {});

// SVG image filter to produce a duo tone image
const DuoToneFilter = ({ id, shadowColor, highlightColor }) => {
  // parse colors to individual rgb values
  const shadowRGB = parseToRgb(shadowColor);
  const highlightRGB = parseToRgb(highlightColor);
  const tableValues = calcTableValues(shadowRGB, highlightRGB);
  return (
    <StyledFilter>
      <filter id={id}>
        <feColorMatrix
          type="matrix"
          result="grayscale"
          values="1 0 0 0 0
          1 0 0 0 0
          1 0 0 0 0
          0 0 0 1 0"
        />
        <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
          <feFuncR type="table" tableValues={tableValues.red} />
          <feFuncG type="table" tableValues={tableValues.green} />
          <feFuncB type="table" tableValues={tableValues.blue} />
          <feFuncA type="table" tableValues="0 1" />
        </feComponentTransfer>
      </filter>
    </StyledFilter>
  );
};

DuoToneFilter.propTypes = {
  id: PropTypes.string.isRequired,
  shadowColor: PropTypes.string.isRequired,
  highlightColor: PropTypes.string.isRequired,
};

export default DuoToneFilter;
