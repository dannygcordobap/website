import React from'react';
import Card from '../Card';
import ExperienceItem from './ExperienceItem';
import '../../resources/styles/Experience.css';
import amazon from '../../resources/images/amazon.jpg';
import fww from '../../resources/images/fww.jpg';

const Experience = () => {

    const linkToResume = <a href='https://drive.google.com/file/d/17JeeDRq8rYbj3PfqzOh1UlonIILyTeHW/view?usp=sharing' rel="noreferrer" target='_blank'>Resume</a>

    return (
        <Card 
            title='Experience' 
            stickyHeader={ true }
            rightHeaderContent={ linkToResume }
        >
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
            </ExperienceItem>
            <ExperienceItem 
                title='Factory Wheel Warehouse, Junior SWE'
                subtitle = 'January 2022 - May 2022'
                src={fww}
                alt='A car rim'
                caption='A rim following the refinishing process, not yet wiped down'
            >
                <div>
                    <p>
                        Factory Wheel Warehouse is a small online retail 
                        company focusing on remanufactured rims. Having only 
                        5 employees, many processes were still manual. I 
                        started as a full time Sales Representative to support 
                        myself while in school.
                    </p>
                    <p>
                        As a Sales Representative I automated our internal 
                        processes to free myself more time to focus on 
                        development tasks earning the Junior SWE title, despite 
                        being the only software focused employee.
                    </p>
                </div>
            </ExperienceItem>
        </Card>
    )
}

export default Experience