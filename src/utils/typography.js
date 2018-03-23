import Typography from 'typography';
import wordpressTheme from 'typography-theme-wordpress-2012';

wordpressTheme.baseFontSize = '16px';
wordpressTheme.baseLineHeight = 1.5;

const typography = new Typography(wordpressTheme)

export default typography;
