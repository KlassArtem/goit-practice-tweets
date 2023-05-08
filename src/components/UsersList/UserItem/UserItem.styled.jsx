import styled from 'styled-components';

export const UserCard = styled.li`
  position: relative;

  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;

  height: 480px;
  width: 380px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  text-transform: uppercase;

  color: ${p => p.theme.colors.greyViolet};
  background-image: ${p => p.theme.colors.userCardGradient};
  border-radius: ${p => p.theme.radii.regular};
  box-shadow: ${p => p.theme.shadows.userCard};
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;

  height: 22px;
  width: 76px;
`;

export const CardImage = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;

  height: 168px;
  width: 308px;
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;

  height: 80px;
  width: 80px;

  background: ${p => p.theme.colors.greyViolet};
  border-radius: ${p => p.theme.radii.round};
  box-shadow: ${p => p.theme.shadows.decorElemEllipse};
`;

export const Avatar = styled.img`
  position: absolute;
  top: 187px;
  left: 159px;

  height: 62px;
  width: 62px;

  background-size: cover;
  border-radius: ${p => p.theme.radii.round};
`;

export const Rectangle = styled.div`
  position: absolute;
  top: 214px;
  left: 0px;

  height: 8px;
  width: 380px;

  background: ${p => p.theme.colors.greyViolet};
  box-shadow: ${p => p.theme.shadows.decorElemRectangle};
`;

export const Tweets = styled.p`
  margin-top: 26px;
`;

export const Followers = styled.p`
  margin-top: 16px;
`;

export const Button = styled.button`
  height: 50px;
  width: 196px;
  margin-top: 26px;
  margin-bottom: 36px;

  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  text-transform: uppercase;

  color: ${p => p.theme.colors.deepGray};
  background-color: ${p =>
    p.isFollowing ? p.theme.colors.greenAccent : p.theme.colors.greyViolet};
  border-radius: ${p => p.theme.radii.small};
  box-shadow: ${p => p.theme.shadows.btn};

  &:hover,
  &:focus {
    background-color: ${p =>
      p.isFollowing ? p.theme.colors.greenAccentHover : p.theme.colors.greyVioletHover};
    box-shadow: ${p => p.theme.shadows.btnHover};
  }
`;