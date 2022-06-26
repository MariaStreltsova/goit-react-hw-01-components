import PropTypes from 'prop-types';

export default function FriendListItem({avatar, name}) {
    return (
    <> 
    <span class="status"></span>
    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>

        </>
    ) 
}

FriendListItem.propTypes = {

  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};