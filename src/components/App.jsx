import user from "./data/user.json";
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friends/FriendsList";
import TransactionHistory from "./transactions/Transactions";
const App = () => {
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

      <div>
        <FriendList friends={friends} />
      </div>
      
    <div>
        <TransactionHistory items={transactions} />
      </div>
      
  </div>
  );
};

export default App;