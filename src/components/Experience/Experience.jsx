import React from'react';
import Card from '../Card';
import '../../resources/styles/Experience.css';
import Amazon from './Amazon';
import FWW from './FWW';

const Experience = () => {

    return (
        <Card 
            title='Experience' 
            stickyHeader={ true }
        >
            <Amazon />
            <FWW />
        </Card>
    )
}

export default Experience