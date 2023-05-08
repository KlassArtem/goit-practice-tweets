import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;

  height: 40px;
  width: 176px;

  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  text-transform: uppercase;

  color: ${p => p.theme.colors.violetLight};
  background-color: transparent;
  border: ${p => p.theme.borders.LoadMoreBtn};
  border-radius: ${p => p.theme.radii.small};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.greenAccent};
    border: ${p => p.theme.borders.LoadMoreBtnHover};
  }
`;