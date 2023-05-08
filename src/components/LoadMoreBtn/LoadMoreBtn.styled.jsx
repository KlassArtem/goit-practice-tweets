import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;

  height: 40px;
  width: 176px;
  animation: pulse 1s infinite;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  text-transform: uppercase;

  color: ${p => p.theme.colors.violetLight};
  background-color: transparent;
  border: ${p => p.theme.borders.LoadMoreBtn};
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

  transition: all 0.3s ease-in-out;
  
  &:hover
   {
    background-color: ${p => p.theme.colors.greenAccent};
    border: ${p => p.theme.borders.LoadMoreBtnHover};
    transform: scale(0.1)
  }
`;