import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendListItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';
const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem key={id}>
          {isOnline ? (
            <FriendStatus
              style={{
                backgroundColor: 'green',
                width: '25px',
                height: '25px',
                borderRadius: '50%',
              }}
            ></FriendStatus>
          ) : (
            <FriendStatus
              style={{
                backgroundColor: 'red',
                width: '25px',
                height: '25px',
                borderRadius: '50%',
              }}
            ></FriendStatus>
          )}
          <FriendAvatar src={avatar} alt="User avatar" width="48" />
          <FriendName>{name}</FriendName>
        </FriendListItem>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default FriendList;
