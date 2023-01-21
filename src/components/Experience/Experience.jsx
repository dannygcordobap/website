import React from'react';
import Card from '../Card';
import ExperienceItem from './ExperienceItem';
import '../../resources/styles/Experience.css';

const Experience = () => {
    return (
        <Card title='Experience' stickyHeader={ true }>
            Include resume preview and download!
            <ExperienceItem 
                title='Amazon.com, SDE Intern'
                subtitle = 'June 2022 - December 2022'
            >
                <div>
                    Image carousel
                </div>
                <div>
                    Amazon experience here
                    <br />
                    More stuff
                    <br />
                    And even more stuff
                </div>
                <div>
                    <h4 className='project-header'>Project 1</h4>
                    <div>Project 1 here</div>
                    <h4 className='project-header'>Project 2</h4>
                    <div>Project 2 here</div>
                </div>
            </ExperienceItem>
            <ExperienceItem 
                title='Factory Wheel Warehouse, Junior SWE'
                subtitle = 'January 2022 - May 2022'
            >
                <div>
                    Image carousel
                </div>
                <div className='description'>
                    Amazon experience here
                    <br />
                    More stuff
                    <br />
                    And even more stuff
                </div>
                <div className='projects'>
                    <h4 style={{'marginBottom': '5px'}}>Project 1</h4>
                    <div>Project 1 here</div>
                    <h4 style={{'marginBottom': '5px'}}>Project 2</h4>
                    <div>Project 2 here</div>
                </div>
            </ExperienceItem>
        </Card>
    )
}

export default Experience