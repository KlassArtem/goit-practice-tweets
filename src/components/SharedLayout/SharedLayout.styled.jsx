import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  z-index: ${p => p.theme.zIndices[4]};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 30px;

  height: 28px;
  width: 100%;

  text-transform: uppercase;

  color: ${p => p.theme.colors.greyViolet};
  background-image: ${p => p.theme.colors.addGradient};
  box-shadow: ${p => p.theme.shadows.addLight};
`;

export const Title = styled.h1`
  position: relative;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const SubTitle = styled.h2`
  position: absolute;
  top: 37px;

  font-size: ${p => p.theme.fontSizes.s};
  letter-spacing: 2px;

  background: ${p => p.theme.colors.textGradient};
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 2000ms linear infinite;

  @-webkit-keyframes shine {
    to {
      background-position: 200% center;
    }
  }
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

export const GoToTweetsBtn = styled.button`
  margin-top: 12px;
  height: 40px;
  width: 176px;

  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  text-transform: uppercase;
  animation: pulse 1s infinite;
  color: ${p => p.theme.colors.greyViolet};
  background-color: transparent;
  border: ${p => p.theme.borders.NavBtn};
  border-radius: ${p => p.theme.radii.small};
  

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.greenAccent};
    border: ${p => p.theme.borders.NavBtnHover};
  }
`;

export const GoToHomeBtn = styled.button`
  position: fixed;
  z-index: ${p => p.theme.zIndices[4]};
  top: 73px;

  height: 25px;
  width: 100px;

  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.body};
  text-transform: uppercase;

  color: ${p => p.theme.colors.greyViolet};
  background-color: ${p => p.theme.colors.violetDark};
  box-shadow: ${p => p.theme.shadows.addLight};

  animation: stretch 3s linear infinite;

  @keyframes stretch {
    0% {
      width: 100px; /* начальная ширина кнопки */
    }
    50% {
      width: 150px; /* максимальная ширина кнопки */
    }
    100% {
      width: 100px; /* возвращаем кнопку в исходное состояние */
    }
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.greenAccent};
    border: ${p => p.theme.borders.NavBtnHover};
  }
`;

export const Arrow = styled.span`
  display: inline-block;
  transform: scaleX(-1);
`;