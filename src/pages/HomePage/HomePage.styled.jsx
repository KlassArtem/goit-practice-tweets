import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xl};
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