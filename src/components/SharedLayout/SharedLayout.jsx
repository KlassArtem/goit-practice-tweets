import { startTransition } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '../Box/Box';
import { Header, Title, SubTitle, GoToTweetsBtn, GoToHomeBtn, Arrow } from './SharedLayout.styled';

export const SharedLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoToTweets = navigate => {
    startTransition(() => {
      navigate('tweets');
    });
  };
  const handleGoToHome = navigate => {
    startTransition(() => {
      navigate('/');
    });
  };

  return (
    <Box>
      <Header>
        {location.pathname === '/' && (
          <GoToTweetsBtn type="button" onClick={() => handleGoToTweets(navigate)}>
            Go to tweets
          </GoToTweetsBtn>
        )}

        {location.pathname === '/tweets' && (
          <Box display="flex" justifyContent="center">
            <Title>Thrilled you're here</Title>
            <SubTitle>Tweets are welcoming</SubTitle>
          </Box>
        )}
      </Header>

      {location.pathname === '/tweets' && (
        <GoToHomeBtn type="button" onClick={() => handleGoToHome(navigate)}>
          <Arrow>&#x27A4;</Arrow> Go home
        </GoToHomeBtn>
      )}
      <Outlet />
    </Box>
  );
};