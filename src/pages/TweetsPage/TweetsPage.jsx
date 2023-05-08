import { useState, useEffect } from 'react';

import { UsersList } from '../../components/UsersList/UsersList';
import { fetchData } from '../../services/api';
import { UserItemSkeleton } from '../../components/UsersList/UserItem/UserItemSkeleton/UserItemSkeleton';
import { UserItemSkeletonTheme } from '../../components/UsersList/UserItem/UserItemSkeleton/UserItemSkeletonTheme';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetchData();
      setUsers(data);
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <UserItemSkeletonTheme>
      {isLoading && <UserItemSkeleton cards={8} />}
      {users?.length > 0 && <UsersList users={users} />}
    </UserItemSkeletonTheme>
  );
};
export default TweetsPage;