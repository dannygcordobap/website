import React from'react';
import Card from '../Card';
import ExperienceItem from './ExperienceItem';
import '../../resources/styles/Experience.css';
import amazon from '../../resources/images/amazon.jpg';
import fww from '../../resources/images/fww.jpg';

const Experience = () => {

    return (
        <Card 
            title='Experience' 
            stickyHeader={ true }
        >
            <ExperienceItem 
                title='Amazon.com, SDE Intern'
                subtitle = 'June 2022 - December 2022'
                src={amazon}
                alt='Inside the Amazon Spheres'
                caption={'The incredible view in the Amazon Spheres'}
            >
                <div>
                    <p>
                        At Amazon, I worked in Personalization, or P13N, on the 
                        Customer Intent team. Owning features such as 'Keep 
                        shopping for' and 'Pick up where you left off', we 
                        strived to be the best shopping assistant around.
                    </p>
                    <p>
                        Following a positive feedback from my summer term, 
                        I managed to extend my internship through the fall. 
                        During my extension, I worked independently 
                        on the team and conducted code reviews.
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
                        company that focuses on selling remanufactured rims. 
                        Having only 5 employees, many processes were still 
                        manual. I started as a full time Sales Representative 
                        to support myself while in school.
                    </p>
                    <p>
                        As a Sales Representative I automated our internal 
                        processes to free myself more time to focus on 
                        development tasks abd earned myself the title of Junior 
                        SWE.
                    </p>
                </div>
            </ExperienceItem>
        </Card>
    )
}

export default Experience