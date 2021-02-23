import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps {
  darkMode: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    position: relative;
    box-sizing: border-box;
  }
  body {
    background-image: url(${(props) => (getBackgroundImage(props.darkMode))});
  }
`;

export default GlobalStyle;

function getBackgroundImage(darkMode:boolean) {
  const darkmodeBackground = 'https://www.legendsofidleon.com/ytGl5oc/assets/graphics/2x/background-260-0.png?996607';
  const lightmodeBackground = 'https://www.legendsofidleon.com/ytGl5oc/assets/graphics/2x/background-228-0.png?996607';
  return darkMode ? darkmodeBackground : lightmodeBackground;
}
