import Card from './Card';

export default function CardList({ monsters }) {
    return (
        <div className='card-list'>
            {monsters.map(monster => 
                <Card monster={monster} key={monster.id} />
            )}
        </div>
    )
}