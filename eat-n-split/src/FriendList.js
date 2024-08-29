import Friend from "./Friend"

export default function FriendList({friends, selectedFriend, onSelection}) {
    return (
        <ul>
            {friends.map(friend => (
                <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend} />
            ))}
        </ul>
    )
}