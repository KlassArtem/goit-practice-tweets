import styled from 'styled-components';

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 380px);
  gap: 30px;
  padding: 105px 30px 30px;
  justify-content: space-evenly;
`;

export const CardItem = styled.li`
  position: relative;

  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;

  height: 480px;
  width: 380px;

  border: ${p => p.theme.borders.skeleton};
  border-radius: ${p => p.theme.radii.regular};
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  height: 22px;
  width: 76px;
`;

export const Avatar = styled.div`
  position: absolute;
  top: 178px;
`;

export const Tweets = styled.div`
  margin-bottom: 16px;
`;

export const Followers = styled.div`
  margin-bottom: 26px;
`;

export const Button = styled.div`
  margin-bottom: 36px;
`;