import React from'react';
import Card from '../Card';
import ExperienceItem from './ExperienceItem';
import '../../resources/styles/Experience.css';
import amazon from '../../resources/images/amazon.jpg';

const Experience = () => {
    return (
        <Card title='Experience' stickyHeader={ true }>
            Include resume preview and download!
            <ExperienceItem 
                title='Amazon.com, SDE Intern'
                subtitle = 'June 2022 - December 2022'
                src={amazon}
                alt='View in the spheres'
                caption={'The incredible view in the Amazon Spheres'}
            >
                <div>
                    <p>
                        At Amazon, I worked in Personalization, or P13N, on the Customer Intent team. Owning features such as 'Keep shopping for' and 'Pick up where you left off', we strived to be the best shopping assistant around.
                    </p>
                    <p>
                        Following a successful summer, I managed to extend my internship. During my extension I worked independently on the team and reviewed CR's for systems I was familiar with.
                    </p>
                    <p>
                        
                    </p>
                </div>
                <div>
                    <h4 className='project-header'>Internal MissionCX Reconstruction</h4>
                    <div>lalalalala</div>
                    <h4 className='project-header'>MissionCX on Desktop</h4>
                    <div>lalalalalala</div>
                </div>
            </ExperienceItem>
            <ExperienceItem 
                title='Factory Wheel Warehouse, Junior SWE'
                subtitle = 'January 2022 - May 2022'
            >
                <div className='description'>
<p>Factory Wheel Warehouse is a small online retail company focusing on remanufactured rims. Having only 5 employees, many processes were still manual. I started as a full time Sales Representative to pay my rent and food while in school. </p>

<p>Following my training, I identified multiple opportunities for automation and began prototyping an automation system whenever I had down time. After about a month I had a CLI that reduced my workload from 8 hours to about 2 hours. </p>

<p>I approached my boss, the business owner, and pitched that I spend half the day as a Sales Representative and half building the rest of the system. About a month later I had the system hosted on Heroku as an Flask app with different endpoints triggering different processes.</p>

<p>Once the automation was in place and automated with AWS functions triggered by EventBridge CRON triggers, I transitioned to a full time software role. My title changed to Junior Software Engineer and I carried on adding features, solving bugs, and squeezing in maintenance as a one man team. </p>
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