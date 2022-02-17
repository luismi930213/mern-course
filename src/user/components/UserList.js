import React from 'react';

import './UsersList.css'
import './UserItem'
import UserItem from './UserItem';
import Card from '../../shared/UIElements/Card';

const UserList = props => {
    if (props.items.length === 0)
        return <div className='center'>
            <Card>
                <h2>No hay resultados</h2>
            </Card>
        </div>
    return <ul className='users-list'>
        {props.items.map(user => (<UserItem key={user.id} user={user} />))}
    </ul>
}

export default UserList; 