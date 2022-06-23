import user from "./data/user.json";
        import data from './data/data.json';

import Profile from "./profile/profile";
import Statistics  from "./statistics/statistics";
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
      
      <div>

    <Statistics title="Upload stats" stats={data} />
    {/* <Statistics stats={data} /> */}
      </div>

  </div>

  );
};
