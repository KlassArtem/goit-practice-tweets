import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  UserCard,
  Logo,
  CardImage,
  Ellipse,
  Avatar,
  Rectangle,
  Tweets,
  Followers,
  Button,
} from './UserItem.styled';

import logo from '../../../assets/images/svg/card-logo.svg';
import cardImage from '../../../assets/images/svg/card-image.svg';
import defaultUserAvatar from '../../../assets/images/svg/default-user-avatar.svg';

export const UserItem = ({ id, user, followers, tweets, avatar }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers);

  useEffect(() => {
    const storedValue = localStorage.getItem(`following_${id}`);
    if (storedValue === 'true') {
      setIsFollowing(true);
      setFollowersCount(followersCount + 1);
    }
    // eslint-disable-next-line
  }, [id]);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    if (!isFollowing) {
      localStorage.setItem(`following_${id}`, 'true');
      setFollowersCount(followersCount + 1);
    } else {
      localStorage.removeItem(`following_${id}`);
      setFollowersCount(followersCount - 1);
    }
  };

  return (
    <UserCard>
      <Logo src={logo} alt="Logo GoIT" />
      <CardImage src={cardImage} alt="Messages" />
      <Rectangle />
      <Ellipse />
      <Avatar src={avatar || defaultUserAvatar} alt={`${user}'s avatar`} />
      <Tweets>{tweets} Tweets</Tweets>
      <Followers>{followersCount.toLocaleString()} Followers</Followers>
      <Button type="button" isFollowing={isFollowing} onClick={handleFollowClick}>
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </UserCard>
  );
};

UserItem.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};