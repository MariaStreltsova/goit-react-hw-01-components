import PropTypes from 'prop-types';
import FriendListItem from "./FriendsListItem";

export default function FriendList( {friends} ) {
    return (
        <div>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id}>
                        <FriendListItem
                            name={friend.name}
                            avatar={friend.avatar}
                        />
                    </li>
                )
                )
                }

            </ul>
        </div>
    );
}



FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};