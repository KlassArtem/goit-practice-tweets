import { useState } from 'react';
import PropTypes from 'prop-types';

import { CARDS_PER_PAGE } from '../../config/constants';

import { Box } from '../Box/Box';
import { UserItem } from './UserItem/UserItem';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';

import { UsersCards } from './UsersList.styled';

export const UsersList = ({ users }) => {
  const [page, setPage] = useState(1);
  const [usersToShow, setUsersToShow] = useState(users.slice(0, CARDS_PER_PAGE * page));

  const handleLoadMore = () => {
    setPage(page + 1);
    setUsersToShow(users.slice(0, CARDS_PER_PAGE * (page + 1)));
  };

  return (
    <Box paddingBottom="30px">
      <UsersCards>
        {usersToShow.map(user => (
          <UserItem
            key={user.id}
            id={user.id}
            user={user.user}
            tweets={user.tweets}
            followers={user.followers}
            avatar={user.avatar}
          />
        ))}
      </UsersCards>
      {usersToShow.length < users.length && <LoadMoreBtn type="button" onClick={handleLoadMore} />}
    </Box>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};