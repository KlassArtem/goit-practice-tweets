import { Title } from './HomePage.styled';
import { Box } from '../../components/Box/Box';

const HomePage = () => {
  return (
    <Box display="flex" height="100vh" justifyContent="center" alignItems="center">
      <Title>Tweets!</Title>
    </Box>
  );
};

export default HomePage;