import user from "./data/user.json";
import Profile from "./profile/profile";

export const App = () => {
  return (
    <div>
      <div>
        <Profile
        username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
        />
</div>

  </div>

  );
};
