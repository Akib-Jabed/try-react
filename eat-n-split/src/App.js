import { useEffect, useState } from 'react';
import './App.css';
import Button from './Button';
import { friends as initialFriends } from './data';
import FormAddFriend from './FormAddFriend';
import FormSplitBill from './FormSplitBill';
import FriendList from './FriendList';

function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    setFriends(initialFriends);
  }, [])

  function handleSelection(friend) {
    setSelectedFriend(prevFriend => prevFriend?.id === friend.id ? null : friend);
    setShowForm(false)
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend])
    setShowForm(false)
  }

  function handleSplitBill(value) {
    setFriends(friends => 
      friends.map(friend => 
        friend.id === selectedFriend.id ? 
        {...friend, balance: friend.balance + value} : 
        friend
      )
    )

    setSelectedFriend(null);
  }

  return (
    <div className="app">
        <div className="sidebar">
          <FriendList friends={friends} 
            selectedFriend={selectedFriend} 
            onSelection={handleSelection} 
            />

            { showForm && <FormAddFriend onAddFriend={handleAddFriend} /> }

            <Button onClick={() => setShowForm(prevValue => !prevValue)}>
              {showForm ? "Close" : "Add Friend"}
            </Button>
        </div>

        {selectedFriend && (
          <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
        )}

    </div>
  );
}


export default App;
