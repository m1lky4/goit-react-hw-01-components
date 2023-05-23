import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json'
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json'
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        gap: '40px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
