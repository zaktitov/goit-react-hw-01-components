import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';
import Stats from './components/Stats/Stats';
import Product from './components/UserCard/UserCard';
import FriendsList from './components/FriendsList/FriendsList';
import Table from './components/Transactions/TransactionHistory';
import './App.css';

console.log();
function App() {
  return (
    <div className="main">
      <Product
        userClass={user.class}
        userName={user.name}
        tag={user.tag}
        location={user.location}
        imgSrc={user.src}
        alt={user.alt}
        lblOne={user.stats['li-one'].label}
        qOne={user.stats['li-one'].quantity}
        qTwo={user.stats['li-two'].quantity}
        lblTwo={user.stats['li-two'].label}
      />

      <Stats title=" " stats={data} />

      <FriendsList friendsData={friends} />

      <Table tableData={transactions} />
    </div>
  );
}

export default App;
