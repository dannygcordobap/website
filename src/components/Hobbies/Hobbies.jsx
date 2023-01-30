import React from'react';
import Card from '../Card';
import Hiking from './Hiking';
import NewHobbies from './NewHobbies';

export default function Hobbies() {

    return (
        <Card title='Hobbies' stickyHeader={ true }>
            <Hiking />
            <NewHobbies />
        </Card>
    )
}